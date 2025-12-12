import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function CertificateValidationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/academy/validate-certificate">
          <div className="group relative overflow-hidden rounded-lg bg-primary/80 p-8 sm:p-12 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-accent/20">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                    Verify Your Certificate
                  </h3>
                  <p className="text-white text-base">
                    Validate your Digitanotion certificate using your unique
                    certificate ID. Confirm authenticity and view your
                    achievements.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                  <span className="text-accent font-semibold">
                    Validate Now
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
