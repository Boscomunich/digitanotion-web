"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaHeadset,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaClock,
  FaShieldAlt,
  FaSync,
  FaSmile,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function MobileAppDevelopmentExperience() {
  const sectionRef = useRef(null);
  const rightContentRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!isDesktop || !rightContentRef.current) return;

    const rightHeight = rightContentRef.current.scrollHeight;
    const screenHeight = window.innerHeight;
    const totalHeight = screenHeight + (rightHeight - screenHeight);

    if (sectionRef.current) {
      sectionRef.current.style.minHeight = `${totalHeight}px`;
    }
  }, [isDesktop]);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current || !rightContentRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const rightContentHeight = rightContentRef.current.scrollHeight;
      const containerHeight = window.innerHeight;
      const maxScroll = rightContentHeight - containerHeight;

      if (sectionRect.top <= 0 && sectionRect.bottom > window.innerHeight) {
        const distanceFromTop = Math.abs(sectionRect.top);
        const scrollAmount = Math.min(distanceFromTop, maxScroll);
        setTranslateY(-scrollAmount);
      } else if (sectionRect.top > 0) {
        setTranslateY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full px-8 lg:px-16"
        style={{
          minHeight: isDesktop ? "calc(100vh + 800px)" : "auto",
        }}
      >
        <div className="flex flex-col items-start lg:flex-row lg:sticky lg:top-8 lg:h-screen overflow-visible">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 lg:h-screen flex items-start justify-center border-b lg:border-r">
            <LeftContent />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 lg:h-screen flex items-start justify-center ">
            <div
              ref={rightContentRef}
              className="flex-1"
              style={{
                transform: isDesktop ? `translateY(${translateY}px)` : "none",
                transition: "none",
              }}
            >
              <RightContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LeftContent() {
  return (
    <motion.div
      className="w-full py-12 max-w-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="lg:text-6xl text-4xl font-bold text-primary mb-8 leading-tight">
        What we Bring?
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        We're not just developers, we're your partners in creating successful
        mobile experiences. From your initial idea to post-launch success, we're
        with you every step of the way.
      </p>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-white border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white shadow-sm">
              <FaSmile className="text-2xl text-blue-500" />
            </div>
            <h3 className="font-bold text-xl text-gray-800">
              Client Success Stories
            </h3>
          </div>
          <p className="text-gray-600">
            "Digitanotion transformed our concept into a beautiful, functional
            app that our users love. Their collaborative approach made the
            entire process seamless." - Sarah, Startup Founder
          </p>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="text-4xl font-bold text-blue-500">95%</div>
          <div className="text-gray-600">
            <div className="font-medium">Client Satisfaction Rate</div>
            <div className="text-sm">Based on post-project reviews</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RightContent() {
  return (
    <div className="w-full py-12 max-w-xl mx-auto">
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="py-8 px-2 border-b border-gray-100 last:border-b-0"
        >
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="text-5xl flex-shrink-0 size-18 rounded-full border-2 border-blue-100 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 shadow-sm">
              <service.icon className="text-[#1E56F1]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {service.description}
              </p>

              {service.benefits && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const services = [
  {
    icon: FaLightbulb,
    title: "From Idea to App Store",
    description:
      "We guide you from concept to launch with a clear, step-by-step process. Our structured approach ensures your vision becomes reality without the technical overwhelm.",
    benefits: [
      "Clear Roadmap",
      "Regular Milestones",
      "Progress Tracking",
      "Transparent Pricing",
    ],
  },
  {
    icon: FaHandshake,
    title: "Partnership, Not Just Service",
    description:
      "We become an extension of your team, invested in your success. We don't just build what you ask for—we collaborate to build what your business truly needs.",
    benefits: [
      "Dedicated Team",
      "Strategic Input",
      "Business Alignment",
      "Shared Goals",
    ],
  },
  {
    icon: FaUsers,
    title: "User-Centric Design Approach",
    description:
      "We design apps that people love to use. Our focus on intuitive interfaces and seamless experiences ensures your app engages users and drives retention.",
    benefits: [
      "Intuitive UX",
      "Beautiful UI",
      "User Testing",
      "Accessibility Focus",
    ],
  },
  {
    icon: FaSync,
    title: "Seamless Development Process",
    description:
      "Weekly updates, regular demos, and open communication keep you informed every step of the way. You'll see your app evolve in real-time, not just at delivery.",
    benefits: [
      "Weekly Demos",
      "Real-time Progress",
      "Flexible Changes",
      "No Surprises",
    ],
  },
  {
    icon: FaChartLine,
    title: "Results-Driven Development",
    description:
      "We build apps that achieve business goals. Whether it's increasing engagement, driving sales, or improving operations, we focus on measurable outcomes.",
    benefits: [
      "Goal-Oriented",
      "Analytics Integration",
      "Performance Metrics",
      "ROI Focused",
    ],
  },
  {
    icon: FaClock,
    title: "Faster Time to Market",
    description:
      "Our efficient processes and cross-platform expertise mean your app launches on both iOS and Android simultaneously, reaching your audience faster.",
    benefits: [
      "Dual Launch",
      "Efficient Process",
      "Reduced Timelines",
      "Market Advantage",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Quality You Can Trust",
    description:
      "Rigorous testing across devices and platforms ensures your app performs flawlessly. We deliver polished, reliable apps that build user confidence.",
    benefits: [
      "Comprehensive Testing",
      "Device Compatibility",
      "Performance Optimization",
      "Bug-Free Delivery",
    ],
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after launch. We provide maintenance, updates, and enhancements to keep your app successful in the long term.",
    benefits: [
      "Post-Launch Support",
      "Regular Updates",
      "Performance Monitoring",
      "Feature Evolution",
    ],
  },
  {
    icon: FaRocket,
    title: "App Store Success",
    description:
      "We navigate the complexities of Apple App Store and Google Play Store submissions, ensuring your app launches successfully and gains visibility.",
    benefits: [
      "Store Compliance",
      "Optimized Listings",
      "Review Navigation",
      "Launch Strategy",
    ],
  },
];
