"use client";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Mail,
  Phone,
  User,
  Globe,
  Briefcase,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { submitSoftwareRequest } from "@/lib/service-request";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "Please enter a valid name"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Please enter a valid name"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s\-()]{10,}$/.test(val.replace(/\s/g, "")), {
      message: "Please enter a valid phone number",
    }),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z
    .string()
    .min(1, "Project description is required")
    .min(50, "Please provide at least 50 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
});

export function AgencyContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    timeline: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors = {};
        err.issues.forEach((issue) => {
          const field = issue.path[0];
          if (field) newErrors[field] = issue.message;
        });
        setErrors(newErrors);
        return false;
      }
      setErrors({ form: "An unexpected error occurred. Please try again." });
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please check the form for errors");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitSoftwareRequest(formData);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        icon: <Sparkles className="h-4 w-4" />,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        timeline: "",
        description: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden">
      {/* Modern header */}
      <div className="p-8 pb-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-sm text-muted-foreground">
              Share your vision. We'll handle the tech.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 md:p-8 pt-6 space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium flex items-center gap-2"
              >
                <User className="h-3.5 w-3.5" />
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.firstName ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium flex items-center gap-2"
              >
                <User className="h-3.5 w-3.5" />
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.lastName ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Mail className="h-3.5 w-3.5" />
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.email ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Phone className="h-3.5 w-3.5" />
                Phone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.phone ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label
              htmlFor="company"
              className="text-sm font-medium flex items-center gap-2"
            >
              <Building2 className="h-3.5 w-3.5" />
              Company
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name (optional)"
              value={formData.company}
              onChange={handleChange}
              className="h-12 rounded-lg border-input/50"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Project Details Section */}
        <div className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Type */}
            <div className="space-y-2">
              <Label
                htmlFor="projectType"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Globe className="h-3.5 w-3.5" />
                Project Type <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  handleSelectChange("projectType", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg w-full ${
                    errors.projectType
                      ? "border-destructive"
                      : "border-input/50"
                  }`}
                >
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-app">Web Application</SelectItem>
                  <SelectItem value="mobile-app">Mobile App</SelectItem>
                  <SelectItem value="ecommerce">Desktop Application</SelectItem>
                  <SelectItem value="api">API Development</SelectItem>
                  <SelectItem value="custom-software">
                    Custom Software
                  </SelectItem>
                  <SelectItem value="ui-ux">Digital Product Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <Label
                htmlFor="timeline"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Briefcase className="h-3.5 w-3.5" />
                Timeline <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleSelectChange("timeline", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg w-full ${
                    errors.timeline ? "border-destructive" : "border-input/50"
                  }`}
                >
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">ASAP (1-2 months)</SelectItem>
                  <SelectItem value="standard">
                    Standard (3-6 months)
                  </SelectItem>
                  <SelectItem value="flexible">Flexible (6+ months)</SelectItem>
                  <SelectItem value="planning">
                    Just exploring options
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.timeline && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.timeline}
                </p>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Tell us about your project{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your project goals, challenges, and any specific requirements..."
              value={formData.description}
              onChange={handleChange}
              className={`min-h-[140px] resize-none rounded-lg ${
                errors.description ? "border-destructive" : "border-input/50"
              }`}
              disabled={isSubmitting}
            />
            <div className="flex justify-between">
              {errors.description && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.description}
                </p>
              )}
              <p className="text-xs text-muted-foreground ml-auto">
                {formData.description.length}/1000
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Sending Message...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <Send className="h-5 w-5" />
              Get Your Free Proposal
            </span>
          )}
        </Button>

        {/* Footer Note */}
        <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border/50">
          We respect your privacy. By submitting, you agree to our{" "}
          <button type="button" className="text-primary hover:underline">
            privacy policy
          </button>
          . Expect a response within 24 hours.
        </p>
      </form>
    </Card>
  );
}
