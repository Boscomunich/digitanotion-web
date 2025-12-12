"use client";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Partner with DILS",
      description:
        "Choose your program plan and select preferred days within your school timetable",
    },
    {
      number: "2",
      title: "Professional Trainers Arrive",
      description:
        "Dedicated Digitanotion trainers conduct hands-on sessions aligned with your school calendar",
    },
    {
      number: "3",
      title: "Students Build & Learn",
      description:
        "Students apply coding, AI, and security knowledge to solve real problems through projects",
    },
    {
      number: "4",
      title: "Showcase at Expo",
      description:
        "Term ends with Cyber + AI Expo where students present their innovations to the community",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How the Partnership Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Simple, flexible, and designed to fit seamlessly into your school's
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-6 h-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
              <div className="h-full rounded-xl p-6 bg-gradient-to-br from-card/50 to-transparent border border-border/50 hover:border-primary/50 transition">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-foreground font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
