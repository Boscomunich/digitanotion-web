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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Shield,
  AlertTriangle,
  Lock,
  Bug,
  Users,
  Server,
  Code,
  Globe,
  Building2,
  Mail,
  Phone,
  User,
  CheckCircle2,
  Zap,
  FileText,
  Send,
} from "lucide-react";
import { submitCybersecurityRequest } from "@/lib/service-request";

const cybersecuritySchema = z.object({
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
  company: z.string().min(1, "Company name is required"),
  jobTitle: z.string().optional(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => /^\+?[\d\s\-()]{10,}$/.test(val.replace(/\s/g, "")), {
      message: "Please enter a valid phone number",
    }),
  employeeCount: z.string().min(1, "Please select company size"),
  industry: z.string().min(1, "Please select your industry"),
  serviceType: z.array(z.string()).min(1, "Please select at least one service"),
  urgency: z.string().min(1, "Please select urgency level"),
  description: z
    .string()
    .min(1, "Security concerns are required")
    .min(30, "Please provide at least 30 characters")
    .max(1000, "Description cannot exceed 1000 characters"),
  hasPreviousIncident: z.string().optional(),
  complianceNeeds: z.string().optional(),
  agreeToContact: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

export function CybersecurityContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    employeeCount: "",
    industry: "",
    serviceType: [],
    urgency: "",
    description: "",
    hasPreviousIncident: "",
    complianceNeeds: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    try {
      cybersecuritySchema.parse(formData);
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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

  const handleServiceTypeToggle = (service) => {
    setFormData((prev) => {
      const currentServices = [...prev.serviceType];
      const index = currentServices.indexOf(service);

      if (index === -1) {
        currentServices.push(service);
      } else {
        currentServices.splice(index, 1);
      }

      return {
        ...prev,
        serviceType: currentServices,
      };
    });

    if (errors.serviceType) {
      setErrors((prev) => ({
        ...prev,
        serviceType: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Security check failed", {
        description: "Please review the highlighted fields",
        icon: <AlertTriangle className="h-4 w-4" />,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitCybersecurityRequest(formData);

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
        jobTitle: "",
        phone: "",
        employeeCount: "",
        industry: "",
        serviceType: [],
        urgency: "",
        description: "",
        hasPreviousIncident: "",
        complianceNeeds: "",
        agreeToContact: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Transmission failed", {
        description: "Please try again",
        icon: <Lock className="h-4 w-4" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    {
      id: "awareness",
      label: "Cybersecurity Awareness Training",
      icon: <Users className="h-4 w-4 text-black" />,
    },
    {
      id: "soc",
      label: "Security Operations Center",
      icon: <Server className="h-4 w-4 text-black" />,
    },
    {
      id: "vapt",
      label: "Vulnerability & Penetration Testing",
      icon: <Bug className="h-4 w-4 text-black" />,
    },
    {
      id: "incident",
      label: "Incident Response",
      icon: <AlertTriangle className="h-4 w-4 text-black" />,
    },
    {
      id: "devsecops",
      label: "DevSecOps",
      icon: <Code className="h-4 w-4 text-black" />,
    },
    {
      id: "product",
      label: "Product Security Management",
      icon: <Globe className="h-4 w-4 text-black " />,
    },
  ];

  return (
    <Card className="border-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden">
      {/* Modern header */}
      <div className="p-4 md:p-8 pb-0">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Request Security Assessment
            </h2>
            <p className="text-sm text-muted-foreground">
              Fortify your digital defenses. Our security experts are ready.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 md:p-8 pt-6 space-y-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <User className="h-4 w-4" />
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className={`h-12 rounded-lg border-border ${
                  errors.firstName ? "border-destructive" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.firstName}
                </p>
              )}
            </div>

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
                className={`h-12 rounded-lg border-border ${
                  errors.lastName ? "border-destructive" : ""
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
                placeholder="security@yourcompany.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-12 rounded-lg border-border ${
                  errors.email ? "border-destructive" : ""
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
                className={`h-12 rounded-lg border-border ${
                  errors.phone ? "border-destructive" : ""
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="company"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Building2 className="h-3.5 w-3.5" />
                Company <span className="text-destructive">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Your organization name"
                value={formData.company}
                onChange={handleChange}
                className={`h-12 rounded-lg border-border ${
                  errors.company ? "border-destructive" : ""
                }`}
                disabled={isSubmitting}
              />
              {errors.company && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.company}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="jobTitle"
                className="text-sm font-medium flex items-center gap-2"
              >
                <User className="h-3.5 w-3.5" />
                Job Title
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="CTO, Security Lead, etc."
                value={formData.jobTitle}
                onChange={handleChange}
                className="h-12 rounded-lg border-border"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* Organization Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Organization Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="employeeCount"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Users className="h-3.5 w-3.5" />
                Company Size <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.employeeCount}
                onValueChange={(value) =>
                  handleSelectChange("employeeCount", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg border-border ${
                    errors.employeeCount ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="501-1000">501-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
              {errors.employeeCount && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.employeeCount}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="industry"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Globe className="h-3.5 w-3.5" />
                Industry <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleSelectChange("industry", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg border-border ${
                    errors.industry ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance/Banking</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.industry}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Security Services Needed */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security Services Needed <span className="text-destructive">*</span>
          </h3>

          {errors.serviceType && (
            <p className="text-xs text-destructive animate-in fade-in">
              {errors.serviceType}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceOptions.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceTypeToggle(service.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  formData.serviceType.includes(service.id)
                    ? "bg-primary/5 border-accent/50"
                    : "border-border hover:border-accent/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      formData.serviceType.includes(service.id)
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {service.label}
                      </span>
                      {formData.serviceType.includes(service.id) && (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Assessment */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Security Assessment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="urgency"
                className="text-sm font-medium flex items-center gap-2"
              >
                <Zap className="h-3.5 w-3.5" />
                Urgency Level <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.urgency}
                onValueChange={(value) => handleSelectChange("urgency", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={`h-12 rounded-lg border-border ${
                    errors.urgency ? "border-destructive" : ""
                  }`}
                >
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3" />
                      Critical (Active Incident)
                    </span>
                  </SelectItem>
                  <SelectItem value="high">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3" />
                      High (Within 24 hours)
                    </span>
                  </SelectItem>
                  <SelectItem value="medium">
                    <span className="flex items-center gap-2">
                      <Shield className="h-3 w-3" />
                      Medium (Within week)
                    </span>
                  </SelectItem>
                  <SelectItem value="low">
                    <span className="flex items-center gap-2">
                      <Shield className="h-3 w-3" />
                      Low (Proactive Assessment)
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.urgency && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.urgency}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="hasPreviousIncident"
                className="text-sm font-medium flex items-center gap-2"
              >
                <AlertTriangle className="h-3.5 w-3.5" />
                Previous Security Incidents?
              </Label>
              <Select
                value={formData.hasPreviousIncident}
                onValueChange={(value) =>
                  handleSelectChange("hasPreviousIncident", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger className="h-12 rounded-lg border-border">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">
                    Yes, in the past 12 months
                  </SelectItem>
                  <SelectItem value="no">No, never</SelectItem>
                  <SelectItem value="unsure">Not sure/don't know</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="complianceNeeds"
              className="text-sm font-medium flex items-center gap-2"
            >
              <FileText className="h-3.5 w-3.5" />
              Compliance Requirements
            </Label>
            <Select
              value={formData.complianceNeeds}
              onValueChange={(value) =>
                handleSelectChange("complianceNeeds", value)
              }
              disabled={isSubmitting}
            >
              <SelectTrigger className="h-12 rounded-lg border-border">
                <SelectValue placeholder="Select compliance needs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="gdpr">GDPR</SelectItem>
                <SelectItem value="hipaa">HIPAA</SelectItem>
                <SelectItem value="pci">PCI DSS</SelectItem>
                <SelectItem value="soc2">SOC 2</SelectItem>
                <SelectItem value="iso27001">ISO 27001</SelectItem>
                <SelectItem value="multiple">Multiple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Security Concerns */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Describe Your Security Concerns{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Describe specific vulnerabilities, recent incidents, compliance gaps, or security objectives..."
            value={formData.description}
            onChange={handleChange}
            className={`min-h-[140px] resize-none rounded-lg border-border ${
              errors.description ? "border-destructive" : ""
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

        {/* Consent and Submit */}
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="agreeToContact"
              checked={formData.agreeToContact}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, agreeToContact: checked }))
              }
              className="mt-1"
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="agreeToContact"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to be contacted by Digitanotion CyBouncer security
                specialists regarding this inquiry.
                <span className="text-destructive"> *</span>
              </Label>
              <p className="text-xs text-muted-foreground">
                By checking this box, you consent to our Privacy Policy and
                allow our team to contact you via phone, email, or secure
                messaging.
              </p>
              {errors.agreeToContact && (
                <p className="text-xs text-destructive animate-in fade-in">
                  {errors.agreeToContact}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Securing Connection...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <Send className="h-5 w-5" />
                Request Security Assessment
              </span>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
