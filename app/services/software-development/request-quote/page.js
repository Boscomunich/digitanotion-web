import { AgencyContactForm } from "@/modules/software-development/quoteform";
import { Toaster } from "sonner";

export default function () {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Toaster position="top-right" richColors />
      <section className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance text-primary">
              Request a Quote
            </h1>
            <p className="text-lg text-muted-foreground">
              Request a Project Assessment
            </p>
          </div>
          <AgencyContactForm />
        </div>
      </section>
    </main>
  );
}
