"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechStackCarousel from "./Techstack";
import { GradientButton } from "../component/gradient-button";
import Link from "next/link";

const itemVariant = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeInOut" } },
};

export default function DigitanotionHeroFB() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Prevent horizontal scroll */}
      <section
        className="relative w-full min-h-[60vh] pt-10 flex items-center text-stone-950"
        role="banner"
        aria-label="Digital Notion - Digital Infrastructure and Talent Solutions"
      >
        {/* Background Image with Next.js Image for optimal SEO and performance */}
        <div className="absolute inset-0">
          <Image
            src="/images/tech6project1.jpg"
            alt="Welcome to Digitanotion - The #1 Cyber Security, Website, and App Development Company in Anambra State! We specialize in Building, Protecting, and Training. Visit our Awka office today for top-tier cyber security solutions and cutting-edge website and app development services."
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={90}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Tint overlay - adjust opacity as needed */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Optional gradient overlay for better text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-10 px-4 lg:px-16">
            <motion.div
              className="w-full md:w-auto"
              variants={itemVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.12 }}
            >
              <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug md:leading-tight text-white">
                Scaling Businesses with Secure Digital Infrastructure and Talent
              </h1>

              <p className="mt-5 w-full text-base md:text-lg text-white/90">
                We build resilience, skills, and competence by combining
                innovation, security, digital solution development,
                and talent growth.
              </p>

              <p className="mt-3 w-full text-base md:text-lg text-white/90">
                <strong className="text-blue-400 font-semibold">
                  We help businesses grow sustainably and impactfully
                </strong>
              </p>

              <div className="mt-6 w-full md:w-auto">
                <Link href="/services/software-development/request-quote">
                  <GradientButton aria-label="Start a new digital transformation project with Digital Notion">
                    Start a Project
                  </GradientButton>
                </Link>
              </div>
            </motion.div>

            {/* SEO-Optimized Content Section (visually hidden) */}
            <div className="sr-only" aria-hidden="false">
              <h2>Digital Notion Core Services</h2>
              <ul>
                <li>Skills Training (Digitanotion Academy)</li>
                <li>Cybersecurity Awareness Training</li>
                <li>
                  Security Operations Center, Vulnerability and Pentration
                  Testing, Incidence Response, DevSecOps
                </li>
                <li>Product (Website/App) Management</li>
                <li>Cybersecurity & Data Protection Solutions</li>
                <li>Digital Transformation Strategy & Consulting</li>
                <li>Custom Software Development</li>
                <li>Mobile Application</li>
                <li>Web Applicaton</li>
                <li>Desktop Application</li>
                <li>Digital Product Design and Management</li>
              </ul>

              <h3>Why Choose Digital Notion?</h3>
              <p>
                As a leading digital infrastructure and talent development
                company, we specialize in creating secure, scalable solutions
                that drive business growth while building internal capabilities.
              </p>
            </div>

            {/* Structured Data Container */}
            <motion.div
              className="w-full md:w-auto mt-8 md:mt-0"
              variants={itemVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.12 }}
            >
              {/* JSON-LD Structured Data for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Digital Infrastructure & Talent Solutions",
                    "description":
                      "Secure digital infrastructure development and talent growth services for business transformation",
                    "provider": {
                      "@type": "Organization",
                      "name": "DigitaNotion",
                      "url": "https://digitanotion.com.ng",
                    },
                    "serviceType": [
                      "Cyber security",
                      "Software development",
                      "Digital traning",
                      "Business Automation",
                    ],
                    "areaServed": [
                      {
                        "@type": "State",
                        "name": "Anambra",
                        "address": {
                          "@type": "PostalAddress",
                          "addressLocality": "Awka",
                          "addressRegion": "Southeast",
                          "addressCountry": "Nigeria",
                        },
                      },
                      {
                        "@type": "Country",
                        "name": "Nigeria",
                      },
                      {
                        "@type": "Country",
                        "name": "Global",
                      },
                    ],
                  }),
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <TechStackCarousel />
    </div>
  );
}
