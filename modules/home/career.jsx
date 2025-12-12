"use client";

import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const sectionItems = [
  {
    icon: FiTarget,
    title: "Explore New Skills",
    content:
      "Unlock hands-on learning in Software Development and Cybersecurity with world-class tutors at Digitanotion.",
  },
  {
    icon: BsAward,
    title: "Earn Recognized Certifications",
    content:
      "Boost your career with industry-standard certifications that validate your expertise and help you stand out.",
  },
  {
    icon: FaRegStar,
    title: "Learn by Doing",
    content:
      "Work on real-world projects, sharpen your problem-solving skills, and build a portfolio that gets you hired.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hover: {
    y: -8,
    rotate: 10,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export default function Careers() {
  return (
    <section
      className="bg-primary/10 py-10 lg:px-16 px-4"
      role="region"
      aria-label="Career Development and Training"
    >
      {/* SEO: Structured Data for Career Training */}
      <div style={{ display: "none" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              "name": "Digitanotion Tech Training Programs",
              "description":
                "Career development programs in software development and cybersecurity",
              "startDate": "2024-01-01",
              "endDate": "2024-12-31",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode":
                "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Digitanotion Training Center",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress":
                    "Suite 6, Mgbajiaka Area, Digitanotion Limited",
                  "addressLocality": "Awka",
                  "addressRegion": "Anambra State",
                  "addressCountry": "Nigeria",
                },
              },
              "organizer": {
                "@type": "Organization",
                "name": "Digitanotion",
                "url": "https://digitanotion.com",
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "0",
                "priceCurrency": "NGN",
              },
            }),
          }}
        />
      </div>

      {/* SEO: Hidden content for search engines */}
      <div className="sr-only" aria-hidden="false">
        <h1>Career Development at Digitanotion</h1>
        <h2>Tech Training in Awka, Anambra State</h2>
        <p>
          Professional career training programs in software development and
          cybersecurity with hands-on learning and industry certifications.
        </p>
        <ul>
          <li>Software Development Training in Awka</li>
          <li>Cybersecurity Career Training in Anambra State</li>
          <li>Industry-Recognized Certifications</li>
          <li>Real-World Project Experience</li>
          <li>Tech Internships and Placements</li>
        </ul>
      </div>

      <motion.h1
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Invest in your career
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {sectionItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start justify-between gap-4 py-6 text-left mx-4"
            variants={itemVariants}
            whileHover={{ y: -4 }}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {/* SEO: List position */}
            <meta itemProp="position" content={(index + 1).toString()} />

            <motion.div variants={iconVariants} whileHover="hover">
              <item.icon size={36} />
            </motion.div>

            <h2 className="text-lg font-semibold" itemProp="name">
              {item.title}
            </h2>

            <p className="text-base font-medium" itemProp="description">
              {item.content}
            </p>

            {/* SEO: Hidden structured data for each career benefit */}
            <div style={{ display: "none" }}>
              <div
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                <span itemProp="credentialCategory">
                  Professional Certification
                </span>
                <span itemProp="competencyRequired">{item.title}</span>
                <span itemProp="educationalLevel">Continuing Education</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SEO: Additional hidden context */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Digitanotion offers career advancement opportunities through our Tech
          Training Academy in Awka, Anambra State. Our programs include the
          flagship #tech6project training, internships, and professional
          development in cybersecurity and software development for aspiring
          tech professionals in Southeast Nigeria.
        </p>
        <address>
          Training Location: Digitanotion Tech Hub, Awka, Anambra State, Nigeria
        </address>
      </div>
    </section>
  );
}
