"use client";

import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function AlumniGrid() {
  const alumni = [
    {
      name: "Sarah Okonkwo",
      role: "Senior Full Stack Engineer",
      company: "Google",
      location: "Mountain View, CA",
      image: "/images/alumni.jpg",
      skills: ["React", "TypeScript", "Python"],
      bio: "Led the redesign of Google's payment platform, impacting 2M+ daily users.",
      year: "2020",
    },
    {
      name: "Chisom Adeyemi",
      role: "AI/ML Engineer",
      company: "OpenAI",
      location: "San Francisco, CA",
      image: "/images/alumni.jpg",
      skills: ["Python", "TensorFlow", "ML Ops"],
      bio: "Building next-gen AI models for natural language processing.",
      year: "2021",
    },
    {
      name: "Zainab Hassan",
      role: "Cybersecurity Specialist",
      company: "Microsoft",
      location: "Seattle, WA",
      image: "/images/alumni.jpg",
      skills: ["Security", "Penetration Testing", "Cloud"],
      bio: "Protecting Azure infrastructure for enterprises worldwide.",
      year: "2019",
    },
    {
      name: "Emeka Nwankwo",
      role: "Product Engineer",
      company: "Stripe",
      location: "San Francisco, CA",
      image: "/images/alumni.jpg",
      skills: ["Node.js", "React", "Product Design"],
      bio: "Designing payment products used by millions.",
      year: "2020",
    },
    {
      name: "Amara Obi",
      role: "Founding Engineer",
      company: "TechStartup Co",
      location: "Lagos, Nigeria",
      image: "/images/alumni.jpg",
      skills: ["JavaScript", "Startup Growth", "Backend"],
      bio: "Building and scaling an African fintech unicorn.",
      year: "2021",
    },
    {
      name: "Tunde Awosusi",
      role: "Solutions Architect",
      company: "Amazon",
      location: "London, UK",
      image: "/images/alumni.jpg",
      skills: ["AWS", "System Design", "Enterprise"],
      bio: "Architecting solutions for Fortune 500 companies.",
      year: "2019",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Alumni
          </h2>
          <p className="text-lg text-muted-foreground">
            Exceptional graduates making waves in tech
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {alumni.map((person, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-gradient-to-br from-card/60 to-card/40 overflow-hidden hover:shadow-2xl hover:shadow-accent/15 transition-all duration-300 flex h-80"
            >
              {/* Image half - LEFT SIDE */}
              <div className="relative w-1/2 overflow-hidden">
                <Image
                  src={person.image || "/placeholder.svg?height=320&width=240"}
                  alt={person.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/40 group-hover:to-card/20 transition-all duration-300"></div>
              </div>

              {/* Content half - RIGHT SIDE */}
              <div className="relative z-10 w-1/2 p-8 flex flex-col justify-between">
                {/* Top section */}
                <div>
                  {/* Company badge */}
                  <div className="mb-3">
                    <span className="text-xs font-bold text-primary bg-accent/15 px-3 py-1 rounded-full inline-block">
                      {person.company}
                    </span>
                  </div>

                  {/* Name and role */}
                  <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-2">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3 line-clamp-2">
                    {person.role}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3" />
                    {person.location}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-card-foreground line-clamp-3 leading-relaxed">
                    {person.bio}
                  </p>
                </div>

                {/* Bottom section with skills */}
                <div className="flex flex-wrap gap-1.5">
                  {person.skills.slice(0, 2).map((skill, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-600 border-0 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {person.skills.length > 2 && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-600 border-0 text-xs"
                    >
                      +{person.skills.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
