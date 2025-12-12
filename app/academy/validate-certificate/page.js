import { CertificateValidationForm } from "@/modules/academy/form/validate-certificate";

export default function ValidateCertificatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background flex flex-col">
      <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
              Verify Your Certificate
            </h1>
            <p className="text-muted-foreground text-lg">
              Enter your certificate ID to validate and view your Digitanotion
              credential
            </p>
          </div>

          <CertificateValidationForm />
        </div>
      </div>
    </main>
  );
}
