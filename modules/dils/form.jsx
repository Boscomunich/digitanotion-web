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
  Users,
  GraduationCap,
  MessageSquare,
  Send,
  Sparkles,
  Calendar,
} from "lucide-react";
import { submitDILSInquiry } from "@/lib/dils";

const dilsContactSchema = z.object({
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
  schoolName: z.string().min(1, "School name is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s\-()]{10,}$/.test(val.replace(/\s/g, "")), {
      message: "Please enter a valid phone number",
    }),
  role: z.string().min(1, "Please select your role"),
  planInterest: z.string().min(1, "Please select a plan of interest"),
  studentCount: z.string().min(1, "Please select student count range"),
  preferredTerm: z.string().min(1, "Please select preferred term"),
  message: z
    .string()
    .min(1, "Please tell us about your needs")
    .min(30, "Please provide at least 30 characters")
    .max(800, "Message cannot exceed 800 characters"),
});

export function DILSContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    phone: "",
    role: "",
    planInterest: "",
    studentCount: "",
    preferredTerm: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    try {
      dilsContactSchema.parse(formData);
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
      await submitDILSInquiry(formData);
      toast.success("Inquiry sent successfully!", {
        description:
          "We'll contact you within 24 hours to discuss DILS partnership.",
        icon: <Sparkles className="h-4 w-4" />,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        schoolName: "",
        phone: "",
        role: "",
        planInterest: "",
        studentCount: "",
        preferredTerm: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send inquiry", {
        description:
          "Please try again or email us directly at education@digitanotion.com",
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
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Start Your DILS Journey
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Digitanotion to nurture the next generation of
              innovators
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

          {/* School Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="schoolName"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Building2 className="h-3.5 w-3.5" />
                School Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="schoolName"
                name="schoolName"
                placeholder="Greenwood High School"
                value={formData.schoolName}
                onChange={handleChange}
                className={`h-12 rounded-lg ${
                  errors.schoolName ? "border-destructive" : "border-input/50"
                }`}
                disabled={isSubmitting}
              />
              {errors.schoolName && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.schoolName}
                </p>
              )}
            </div>

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
                placeholder="john.doe@school.edu"
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
          </div>

          {/* Phone & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="+267 123 4567"
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

            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-sm font-medium flex items-center gap-2"
              >
                <User className="h-3.5 w-3.5" />
                Your Role <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleSelectChange("role", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg w-full ${
                    errors.role ? "border-destructive" : "border-input/50"
                  }`}
                >
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principal">
                    Principal/Headmaster
                  </SelectItem>
                  <SelectItem value="teacher">Teacher/Instructor</SelectItem>
                  <SelectItem value="director">IT Director</SelectItem>
                  <SelectItem value="coordinator">
                    Academic Coordinator
                  </SelectItem>
                  <SelectItem value="administrator">
                    School Administrator
                  </SelectItem>
                  <SelectItem value="board">School Board Member</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.role}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* DILS Program Details Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plan Interest */}
            <div className="space-y-2">
              <Label
                htmlFor="planInterest"
                className="text-sm font-medium flex items-center gap-2"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                Plan Interest <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.planInterest}
                onValueChange={(value) =>
                  handleSelectChange("planInterest", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg w-full ${
                    errors.planInterest
                      ? "border-destructive"
                      : "border-input/50"
                  }`}
                >
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lets-go">
                    Let's Go Plan (M7,000/student)
                  </SelectItem>
                  <SelectItem value="innovate">
                    Innovate Plan (M8,500/student)
                  </SelectItem>
                  <SelectItem value="future-leaders">
                    Future Leaders Plan (M10,000/student)
                  </SelectItem>
                  <SelectItem value="not-sure">
                    Not sure - Need guidance
                  </SelectItem>
                  <SelectItem value="custom">Custom arrangement</SelectItem>
                </SelectContent>
              </Select>
              {errors.planInterest && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.planInterest}
                </p>
              )}
            </div>

            {/* Student Count */}
            <div className="space-y-2">
              <Label
                htmlFor="studentCount"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Users className="h-3.5 w-3.5" />
                Expected Students <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.studentCount}
                onValueChange={(value) =>
                  handleSelectChange("studentCount", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg w-full ${
                    errors.studentCount
                      ? "border-destructive"
                      : "border-input/50"
                  }`}
                >
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-20">1-20 students</SelectItem>
                  <SelectItem value="21-54">21-54 students</SelectItem>
                  <SelectItem value="55-100">
                    55-100 students (Bulk pricing)
                  </SelectItem>
                  <SelectItem value="100+">
                    100+ students (Special quote)
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.studentCount && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.studentCount}
                </p>
              )}
            </div>
          </div>

          {/* Preferred Term */}
          <div className="space-y-2">
            <Label
              htmlFor="preferredTerm"
              className="text-sm font-medium flex items-center gap-2"
            >
              <Calendar className="h-3.5 w-3.5" />
              Preferred Start Term <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.preferredTerm}
              onValueChange={(value) =>
                handleSelectChange("preferredTerm", value)
              }
              disabled={isSubmitting}
            >
              <SelectTrigger
                className={`h-12 rounded-lg w-full ${
                  errors.preferredTerm
                    ? "border-destructive"
                    : "border-input/50"
                }`}
              >
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="term1">Next Term (January)</SelectItem>
                <SelectItem value="term2">Second Term (April)</SelectItem>
                <SelectItem value="term3">Third Term (September)</SelectItem>
                <SelectItem value="next-year">Next Academic Year</SelectItem>
                <SelectItem value="flexible">
                  Flexible - Let's discuss
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.preferredTerm && (
              <p className="text-xs text-destructive animate-in fade-in">
                {errors.preferredTerm}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium flex items-center gap-2"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Tell us about your school's needs{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What are your goals for digital innovation? Any specific focus areas (Coding, AI, Cybersecurity)? Current facilities? Timeline requirements?"
              value={formData.message}
              onChange={handleChange}
              className={`min-h-[140px] resize-none rounded-lg ${
                errors.message ? "border-destructive" : "border-input/50"
              }`}
              disabled={isSubmitting}
            />
            <div className="flex justify-between">
              {errors.message && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.message}
                </p>
              )}
              <p className="text-xs text-muted-foreground ml-auto">
                {formData.message.length}/800
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
              Sending Inquiry...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <Send className="h-5 w-5" />
              Request Partnership Details
            </span>
          )}
        </Button>

        {/* Footer Note */}
        <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border/50">
          We'll send you a detailed DILS prospectus and schedule a consultation
          call. By submitting, you agree to our{" "}
          <button type="button" className="text-primary hover:underline">
            privacy policy
          </button>
          . Expect a response within 24 hours.
        </p>
      </form>
    </Card>
  );
}
