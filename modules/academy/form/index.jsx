"use client";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  BookOpen,
  CreditCard,
  Mail,
  Phone,
  User,
  Calendar,
  Sparkles,
  Send,
} from "lucide-react";
import { createCourseApplicationAndNotify } from "@/lib/apply-to-course";

const registrationSchema = z.object({
  courseName: z.string().min(1, "Course name is required"),
  coursePrice: z
    .string()
    .min(1, "Course price is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Please enter a valid price",
    }),
  firstName: z
    .string()
    .min(1, "First Name is required")
    .min(2, "Enter a valid name"),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .min(2, "Enter a valid name"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s\-()]{10,}$/.test(val.replace(/\s/g, "")), {
      message: "Please enter a valid phone number",
    }),
});

export function CourseRegistrationForm({ courseData }) {
  const [formData, setFormData] = useState({
    courseName: courseData.course || "",
    coursePrice: courseData.price || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    try {
      registrationSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      console.error("Validation error caught:", err);

      if (err instanceof z.ZodError) {
        const newErrors = {};
        err.issues.forEach((issue) => {
          const field = issue.path[0];
          if (field) newErrors[field] = issue.message;
        });
        setErrors(newErrors);
        return false;
      }

      setErrors({
        form: "An unexpected error occurred. Please try again.",
      });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please check the form for errors");
      return;
    }

    setIsSubmitting(true);

    try {
      const course = await createCourseApplicationAndNotify(formData);
      toast.success("Your application has been registered", {
        description: `Your application for the ${course.courseName} has been received. Digitanotion will reach out to you for further process.`,
        icon: <Sparkles className="h-4 w-4" />,
      });

      // Reset form except course details
      setFormData((prev) => ({
        ...prev,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }));
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to register application", {
        description: "Please try again or contact us directly.",
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
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Enroll in Course
            </h2>
            <p className="text-sm text-muted-foreground">
              Start your learning journey with us
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 md:p-8 pt-6 space-y-8">
        {/* Course Information Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Name */}
            <div className="space-y-2">
              <Label
                htmlFor="courseName"
                className="text-sm font-medium flex items-center gap-2"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Course Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="courseName"
                name="courseName"
                placeholder="e.g., Web Development 101"
                value={formData.courseName}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.courseName ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.courseName && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.courseName}
                </p>
              )}
            </div>

            {/* Course Price */}
            <div className="space-y-2">
              <Label
                htmlFor="coursePrice"
                className="text-sm font-medium flex items-center gap-2"
              >
                <CreditCard className="h-3.5 w-3.5" />
                Course Price (₦) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="coursePrice"
                name="coursePrice"
                type="text"
                placeholder="e.g., 50000"
                value={formData.coursePrice}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.coursePrice ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.coursePrice && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.coursePrice}
                </p>
              )}
            </div>
          </div>
        </div>

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
                placeholder="john@example.com"
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
                placeholder="+234 (0) 123 4567 890"
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
              Registering...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <Send className="h-5 w-5" />
              Complete Registration
            </span>
          )}
        </Button>

        {/* Footer Note */}
        <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border/50">
          By registering, you agree to receive updates about the course and
          other communications from Digitanotion. We'll contact you within 24
          hours.
        </p>
      </form>
    </Card>
  );
}
