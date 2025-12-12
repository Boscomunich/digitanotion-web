"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaShieldAlt,
  FaDesktop,
  FaBug,
  FaExclamationTriangle,
  FaCode,
  FaGlobe,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CyBouncerSecurityServices() {
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
      className="w-full py-12 max-w-lg flex flex-col gap-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="lg:text-6xl text-4xl font-bold text-primary leading-tight">
        CyBouncer Cybersecurity Services
      </h1>
      <p className="text-lg text-gray-600">
        We provide comprehensive cybersecurity solutions designed to protect
        your digital assets, educate your workforce, and ensure your business
        remains resilient against evolving threats.
      </p>

      <div className="relative h-64 rounded-xl overflow-hidden border border-gray-200">
        <Image
          src="https://res.cloudinary.com/dnitzkowt/image/upload/v1761034195/clint-patterson-dYEuFB8KQJk-unsplash_w4fzrp.jpg"
          alt="Security Operations Center Dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-medium">24/7 Security Monitoring</p>
          <p className="text-xs">Real-time threat detection and response</p>
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
            <div className="text-4xl flex-shrink-0 size-16 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center">
              <service.icon className="text-[#1E56F1]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600 mb-4">
                {service.description}
              </p>

              {service.features && (
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {feature}
                    </span>
                  ))}
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
    icon: FaUsers,
    title: "Cybersecurity Awareness Training",
    description:
      "Comprehensive security education programs that transform your employees into your strongest defense. We equip your team with the knowledge to recognize and respond to security threats effectively.",
    features: [
      "Phishing Simulations",
      "Security Best Practices",
      "Compliance Training",
      "Behavioral Analytics",
    ],
  },
  {
    icon: FaDesktop,
    title: "Security Operations Center (SOC)",
    description:
      "24/7 security monitoring and incident response services. Our SOC provides continuous threat detection, analysis, and rapid response to security incidents across your entire digital environment.",
    features: [
      "24/7 Monitoring",
      "Real-time Alerts",
      "Incident Response",
      "Threat Intelligence",
    ],
  },
  {
    icon: FaBug,
    title: "Vulnerability & Penetration Testing",
    description:
      "Proactive security testing that identifies and exploits vulnerabilities before attackers do. We simulate real-world attacks to assess your security posture and provide actionable remediation plans.",
    features: [
      "Network Penetration",
      "Web App Testing",
      "API Security",
      "Social Engineering",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "Incident Response",
    description:
      "Rapid response and recovery services for security incidents. We help you contain threats, investigate root causes, and restore operations quickly to minimize business impact.",
    features: [
      "Emergency Response",
      "Forensic Analysis",
      "Data Recovery",
      "Post-Incident Review",
    ],
  },
  {
    icon: FaCode,
    title: "DevSecOps",
    description:
      "Integrate security throughout your software development lifecycle. We help build secure development practices, automated security testing, and continuous compliance into your DevOps pipeline.",
    features: [
      "Security Automation",
      "CI/CD Integration",
      "Code Analysis",
      "Container Security",
    ],
  },
  {
    icon: FaGlobe,
    title: "Product Security Management",
    description:
      "End-to-end security for your websites and applications. We implement security controls, conduct security reviews, and ensure your digital products meet industry security standards.",
    features: [
      "Web Application Security",
      "Mobile App Security",
      "API Protection",
      "Third-party Risk",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Security Consulting & Strategy",
    description:
      "Strategic cybersecurity guidance aligned with your business objectives. We help design security frameworks, assess risks, and develop comprehensive security programs tailored to your organization.",
    features: [
      "Risk Assessment",
      "Policy Development",
      "Compliance Planning",
      "Security Architecture",
    ],
  },
  {
    icon: FaChartLine,
    title: "Continuous Security Improvement",
    description:
      "Ongoing security optimization and maturity assessment. We provide regular security reviews, metrics reporting, and improvement recommendations to ensure your security posture evolves with emerging threats.",
    features: [
      "Security Metrics",
      "Maturity Assessments",
      "Improvement Roadmaps",
      "Vendor Security",
    ],
  },
];
