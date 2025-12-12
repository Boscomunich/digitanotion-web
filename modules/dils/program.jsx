"use client";

import { Code2, Shield, Lightbulb } from "lucide-react";

export function ProgramOverview() {
  return (
    <section
      id="overview"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What is DILS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive innovation lab that nurtures creative, secure, and
            responsible digital builders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition group">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Web Development
            </h3>
            <p className="text-muted-foreground">
              Students learn to create interactive, visually appealing web pages
              using HTML, CSS, and JavaScript, building real-world projects.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-secondary/50 transition group">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Artificial Intelligence
            </h3>
            <p className="text-muted-foreground">
              Explore AI capabilities with Teachable Machine and Hugging Face
              APIs, integrating intelligent features into applications
              responsibly.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-accent/50 transition group">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Cybersecurity
            </h3>
            <p className="text-muted-foreground">
              Master defensive practices including OSINT investigations,
              phishing prevention, password management, and social engineering
              awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
