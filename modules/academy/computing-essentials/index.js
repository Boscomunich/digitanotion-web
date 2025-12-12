import FAQ from "./faq";
import Image from "next/image";
import Button from "../button";

import { RiPoliceBadgeFill } from "react-icons/ri";
import { HiBadgeCheck } from "react-icons/hi";
import { Details } from "../details";

export default function ComputingEssentials() {
  return (
    <div className="box-border overflow-x-hidden">
      <Hero />
      <Learn />
      <Skills />
      <Details />
      <FAQ />
    </div>
  );
}

function Hero() {
  const data = {
    course: "computing essentials",
    price: "60000",
  };
  return (
    <div className="box-border flex flex-col gap-1 relative min-h-[500px]">
      {/* Background Image */}
      <Image
        src="/images/computing-essentials.jpg"
        alt="background"
        fill={true}
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 pb-10 w-full max-w-[1500px] mx-auto px-4">
        <h1 className="text-white text-[40px] font-bold mb-4 md:text-[55px] md:leading-tight">
          Computing Essentials Specialization
        </h1>

        <div className="flex flex-col gap-6 md:justify-between md:items-start w-full">
          <div className="w-full md:w-1/2">
            <h3 className="text-white/90 md:text-xl mb-4">
              Learn fundamental computing skills that will prepare you for the
              digital world.
            </h3>
            <div>
              <h2 className="text-white/90 md:text-xl">
                Master{" "}
                <span className="font-bold text-white">
                  Computing Essentials
                </span>{" "}
                and build a solid foundation for your tech career in 3 Months.
              </h2>
            </div>
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-auto">
            <Button data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Learn() {
  const topics = [
    {
      id: 1,
      title: "Computer Mastery and Digital Tools",
      points: "Computer mastery, the internet, and everyday digital tools.",
    },
    {
      id: 2,
      title: "Workplace and Productivity Tools",
      points:
        "Trending workplace and productivity tools, covering both cloud and on-premise solutions.",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      points: "Artificial intelligence for smart results.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-10 px-8 lg:px-32 box-border bg-bg-secondary">
      <div>
        <h1 className="text-brand text-3xl font-bold">What you'll learn</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-between w-full">
        {topics.map((topic, index) => (
          <LearnCard header={topic.title} text={topic.points} key={index} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    "Computer Basics",
    "Microsoft Office",
    "Internet Basics",
    "Digital Literacy",
    "File Management",
    "Online Safety",
    "Email Communication",
    "Basic Troubleshooting",
    "Software Installation",
    "Cloud Storage",
    "Social Media Basics",
    "Digital Documentation",
  ];

  return (
    <div className="flex flex-col gap-8 py-12 px-8 lg:px-32 box-border bg-gradient-to-b from-white to-primary/5">
      {/* Enhanced Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/40"></div>
          <span className="font-medium text-sm tracking-wider uppercase">
            Essential Digital Skills
          </span>
          <div className="w-8 h-px bg-gradient-to-r from-primary/40 to-transparent"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text">Skills You'll Master</span>
        </h1>
        <p className="text-primary/70 max-w-2xl mx-auto text-lg">
          Foundational computer literacy and digital proficiency through
          practical learning
        </p>
      </div>

      {/* Skills Grid with Enhanced Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent"></div>
            </div>

            {/* Skill Content */}
            <div className="relative z-10 flex items-center gap-4">
              {/* Enhanced Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <HiBadgeCheck className="text-2xl text-primary" />
              </div>

              {/* Skill Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-black text-lg">{skill}</h3>
                <div className="flex items-center gap-2 mt-1">
                  {/* Progress Indicator Dots - Adjusted for foundational level */}
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full bg-primary`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-blue-600 font-medium">
                    Expert Level
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Info */}
            <div className="mt-4 pt-4 border-t border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm text-primary/60">
                Practical training and guided exercises in {skill.toLowerCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LearnCard({ header, text }) {
  return (
    <div className="shade flex gap-4 border border-gray-300 rounded-xl p-6 w-full sm:w-[47%] lg:w-[30%] bg-background hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <h1 className="text-xl font-bold py-1">{header}</h1>
        <p className="text-gray-700">{text}</p>
      </div>
      <div className="flex-shrink-0">
        <RiPoliceBadgeFill className="text-[60px] text-brand" />
      </div>
    </div>
  );
}
