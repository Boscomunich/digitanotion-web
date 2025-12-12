"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Gradient orb background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
          <span className="text-sm font-medium text-primary">
            The Future of Digital Innovation for Schools
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Empower Your Students to{" "}
          <span className="text-primary">Build Secure Digital Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
          Digitanotion Innovation Lab for Schools combines Web Development,
          Artificial Intelligence, and Cybersecurity into one transformative
          learning journey. Give your students the skills they need for Africa's
          digital future.
        </p>

        <Link
          href="/dils/get-in-touch"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-base">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-muted-foreground">Partner Schools</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">1000+</div>
            <div className="text-sm text-muted-foreground">
              Students Trained
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-muted-foreground">
              Innovation Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
