"use client";
import { CourseRegistrationForm } from "@/modules/academy/form";
import { useSearchParams } from "next/navigation";
import { Toaster } from "sonner";

export default function RegisterPage() {
  const params = useSearchParams();
  const courseData = JSON.parse(params.get("course"));

  console.log(courseData);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Toaster position="top-right" richColors />
      <section className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance text-primary">
              Course Registration
            </h1>
            <p className="text-lg text-muted-foreground">
              Join us and start your learning journey with Digitanotion
            </p>
          </div>
          <CourseRegistrationForm courseData={courseData} />
        </div>
      </section>
    </main>
  );
}
