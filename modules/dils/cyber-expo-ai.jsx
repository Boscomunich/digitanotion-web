"use client";

import { Sparkles } from "lucide-react";

export function CyberAIExpo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 p-12 text-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The Cyber + AI Expo
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Each term concludes with our signature showcase where students
              present their secured digital solutions to teachers, parents, and
              the community. It's a celebration of learning, creativity, and
              innovation that positions your school as a forward-thinking
              institution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="text-sm font-semibold text-blue-600 mb-1">
                  Learning Celebration
                </div>
                <p className="text-xs text-muted-foreground">
                  Showcase student achievements
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="text-sm font-semibold text-blue-600  mb-1">
                  Community Engagement
                </div>
                <p className="text-xs text-muted-foreground">
                  Inspire confidence and innovation
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="text-sm font-semibold text-blue-600  mb-1">
                  School Pride
                </div>
                <p className="text-xs text-muted-foreground">
                  Stand out as innovation hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
