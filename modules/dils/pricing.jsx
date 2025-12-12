"use client";

import { Check } from "lucide-react";

export function PricingPlans() {
  const plans = [
    {
      name: "Let's Go Plan",
      price: "₦7,000",
      description:
        "Perfect for schools starting their digital innovation journey",
      focus: "Web Creation or Cybersecurity",
      features: [
        "Instructor-led sessions at school",
        "All learning materials & exercises",
        "Direct mentorship from trainer",
        "Digital Badge for completion",
        "Internal Demo Day participation",
        "1 Core focus area",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Innovate Plan",
      price: "₦8,500",
      description: "Combine foundational skills with AI for greater impact",
      focus: "Web/Cyber + AI",
      features: [
        "All Let's Go features",
        "AI learning modules",
        "Guided AI templates",
        "Digital Certificate",
        "Cyber + AI Expo participation",
        "Recognition under global frameworks",
        "Professional instructor support",
      ],
      cta: "Most Popular",
      highlight: true,
    },
    {
      name: "Future Leaders Plan",
      price: "₦10,000",
      description: "The complete innovation experience for ambitious schools",
      focus: "Web + AI + Cybersecurity",
      features: [
        "Full access to all modules",
        "Dedicated professional trainers",
        "Group projects & presentations",
        "Inter-school Cyber + AI Expo",
        "DILS Innovation Awards eligibility",
        "Verified Innovation Certificate",
        "Complete mentorship program",
      ],
      cta: "Choose Plan",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Per student per term. Schools with 55+ students qualify for special
            pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? "ring-2 ring-accent bg-gradient-to-b from-card to-card/30 border border-accent/50 transform md:scale-105"
                  : "border border-border/50 bg-gradient-to-b from-card to-card/50"
              } p-8 hover:border-primary/50`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    {plan.cta}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.focus}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2 text-sm">
                  per student/term
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "border border-primary/50 text-foreground hover:bg-primary/10"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
