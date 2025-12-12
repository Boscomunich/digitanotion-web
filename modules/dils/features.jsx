"use client";

import { Award, Users, Zap, Globe } from "lucide-react";

export function FeaturesShowcase() {
  const features = [
    {
      icon: Award,
      title: "Real-World Projects",
      description:
        "Students complete meaningful projects like personal portfolios, FakeAlert AI, or SafeNet Browser that solve real problems.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Learn directly from professional Digitanotion trainers who bring industry experience and practical insights.",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description:
        "Programs fit into your school calendar with no disruption to normal classes. Flexible scheduling around your timetable.",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description:
        "Certifications recognized under AI4K12 and NICE frameworks, positioning your students for international opportunities.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose DILS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Transform your school into a hub of digital innovation and student
            excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-transparent hover:border-primary/50 transition group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
