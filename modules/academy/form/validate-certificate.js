"use client";

import { useState } from "react";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificateSchema = z.object({
  certificateId: z
    .string()
    .min(1, "Certificate ID is required")
    .regex(/^[A-Z0-9-]{8,}$/, "Invalid certificate ID format"),
});

export function CertificateValidationForm() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setResult(null);

    const validation = certificateSchema.safeParse({ certificateId });

    if (!validation.success) {
      const newErrors = {};
      validation.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
      return;
    }
    try {
    } catch (error) {
    } finally {
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="certificateId"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Certificate ID
          </label>
          <input
            id="certificateId"
            type="text"
            placeholder="e.g., DIGI-2024-001"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
            className={`w-full px-4 py-3 rounded-lg bg-input border transition-colors ${
              errors.certificateId
                ? "border-destructive focus:ring-2 focus:ring-destructive/50"
                : "border-border focus:border-accent focus:ring-2 focus:ring-accent/50"
            } text-foreground placeholder-muted-foreground outline-none`}
          />
          {errors.certificateId && (
            <div className="mt-2 flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.certificateId}
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-blue-600  hover:bg-blue-500 text-white font-semibold transition-all duration-300"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Validating...
            </>
          ) : (
            "Validate Certificate"
          )}
        </Button>
      </form>

      {result && (
        <div
          className={`p-6 rounded-lg border ${
            result.found
              ? "bg-green-500/10 border-green-500/30"
              : "bg-destructive/10 border-destructive/30"
          }`}
        >
          {result.found ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <h3 className="text-lg font-bold text-foreground">
                  Certificate Verified
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Recipient Name
                  </p>
                  <p className="text-foreground font-semibold">
                    {result.data.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Program</p>
                  <p className="text-foreground font-semibold">
                    {result.data.program}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Completion Date
                    </p>
                    <p className="text-foreground font-semibold">
                      {new Date(
                        result.data.completionDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Grade</p>
                    <p className="text-foreground font-semibold">
                      {result.data.grade}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                  <p className="text-foreground font-semibold">
                    {result.data.instructor}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">
                  Certificate Not Found
                </h3>
                <p className="text-sm text-foreground/80">{result.error}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
