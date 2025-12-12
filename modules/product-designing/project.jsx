"use client";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Amcec Health",
    description: "A health blog platform",
    link: "https://www.amcechealth.com/",
    image: "/projects/amcec.png",
  },
  {
    title: "Homeofvictory",
    description:
      "an online community created to touch the lives of many who may have lost faith in God because of challenges",
    link: "https://homeofvictory.com/",
    image: "/projects/homeofvictory.png",
  },
  {
    title: "Nursiscope",
    description:
      "A visionary consulting firm dedicated to transforming the future of healthcare through research, innovation, education, and community engagement.",
    link: "https://nursiscope.com/",
    image: "/projects/nursiscope.png",
  },
];

export default function PortfolioSectionLight() {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate projects (optional)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background elements - subtle and light */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
            <span className="text-primary/80 font-mono text-sm tracking-widest">
              PAST WORK
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary/80">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions that transform ideas into digital
            experiences
          </p>
        </div>

        {/* Main Portfolio Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Project Showcase - Left Side */}
          <div
            className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden group shadow-2xl shadow-primary/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated background gradient - light version */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15"></div>

            {/* Project Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${projects[activeProject].image})`,
                  opacity: 0.9,
                }}
              ></div>
            </div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center gap-4 mb-4">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeProject
                        ? "w-12 bg-white"
                        : "w-4 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`View project ${idx + 1}`}
                  ></button>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {projects[activeProject].title}
              </h2>
              <p className="text-white/90 mb-6 line-clamp-2 drop-shadow">
                {projects[activeProject].description}
              </p>

              <a
                href={projects[activeProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-100 font-semibold group/link"
              >
                <span>Visit Live Site</span>
                <span className="transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Project List - Right Side */}
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Featured Projects
              </h3>
              <div className="text-sm text-primary/70 font-mono">
                {String(activeProject + 1).padStart(2, "0")}/
                {String(projects.length).padStart(2, "0")}
              </div>
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer p-6 rounded-2xl transition-all duration-500 border ${
                  index === activeProject
                    ? "bg-primary/10 border-l-4 border-blue-500"
                    : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/30"
                } shadow-sm hover:shadow-md`}
                onClick={() => setActiveProject(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeProject
                            ? "bg-blue-500 scale-125"
                            : "bg-primary/40"
                        }`}
                      ></div>
                      <h4
                        className={`text-xl font-semibold transition-colors ${
                          index === activeProject
                            ? "text-gray-900"
                            : "text-gray-800 group-hover:text-gray-900"
                        }`}
                      >
                        {project.title}
                      </h4>
                    </div>

                    <p
                      className={`text-sm transition-colors ${
                        index === activeProject
                          ? "text-gray-700"
                          : "text-gray-600 group-hover:text-gray-700"
                      } line-clamp-2`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`ml-4 transition-opacity ${
                      index === activeProject
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-blue-500">→</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 flex items-center justify-between transition-all duration-300 ${
                    index === activeProject ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project Details
                  </a>
                  <span className="text-xs text-primary/50 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}

            {/* View All Projects Button */}
            <div className="pt-8 border-t border-gray-200">
              <button className="group w-full py-4 px-6 bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 border border-gray-300 hover:border-blue-500/50 shadow-sm hover:shadow-md flex items-center justify-between">
                <span className="text-gray-800 font-medium">
                  View Complete Portfolio
                </span>
                <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar - Light version */}
        <div className="mt-32 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "3x", label: "ROI Average" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="h-px w-16 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-blue-500 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
