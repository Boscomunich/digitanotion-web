"use client";
import { FiCode } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { GradientButton } from "../component/gradient-button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ServicesSection() {
  const router = useRouter();

  // Reordered as requested: Cybersecurity first, Software Development second, Academy third
  const services = [
    {
      icon: <BsShieldCheck className="text-4xl" />,
      title: "Cybersecurity Services",
      subtitle: "Protect your business before threats strike",
      description:
        "From penetration testing to threat monitoring and incident response, we help you stay a step ahead of cyberattacks. Our solutions keep your systems safe, compliant, and resilient 24/7.",
      color: "from-blue-600 to-blue-400",
      hoverColor: "from-blue-500 to-blue-300",
      link: "/services/cyber-security",
    },
    {
      icon: <FiCode className="text-4xl" />,
      title: "Custom Software Development",
      subtitle: "Build the exact solution your business needs",
      description:
        "We create secure, high-performance web and mobile applications tailored to your goals. Every product is designed to be scalable, reliable, and easy for your team to use.",
      color: "from-purple-600 to-purple-400",
      hoverColor: "from-purple-500 to-purple-300",
      link: "/services/software-development",
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Tech Training Academy",
      subtitle: "Building Nigeria's next generation of tech professionals",
      description:
        "Join our flagship training programs to learn cybersecurity, software development, and digital skills. We offer hands-on training, internships, and certification for aspiring developers and security experts.",
      color: "from-green-600 to-green-400",
      hoverColor: "from-green-500 to-green-300",
      link: "/academy",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full bg-background pb-24 overflow-hidden px-4 lg:px-16"
      role="region"
      aria-label="Our Services - Cybersecurity, Software Development, and Tech Training"
    >
      {/* SEO: Structured Data in background - invisible to users */}
      <div style={{ display: "none" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Digitanotion Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Cybersecurity Services",
                  "description":
                    "From penetration testing to threat monitoring and incident response, we help you stay a step ahead of cyberattacks. Our solutions keep your systems safe, compliant, and resilient 24/7.",
                  "serviceType": "Cybersecurity",
                  "provider": {
                    "@type": "Organization",
                    "name": "Digitanotion",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Awka",
                      "addressRegion": "Anambra State",
                      "addressCountry": "Nigeria",
                    },
                  },
                },
                {
                  "@type": "Service",
                  "position": 2,
                  "name": "Custom Software Development",
                  "description":
                    "We create secure, high-performance web and mobile applications tailored to your goals. Every product is designed to be scalable, reliable, and easy for your team to use.",
                  "serviceType": "Software Development",
                  "provider": {
                    "@type": "Organization",
                    "name": "Digitanotion",
                  },
                },
                {
                  "@type": "Service",
                  "position": 3,
                  "name": "Tech Training Academy",
                  "description":
                    "Join our flagship training programs to learn cybersecurity, software development, and digital skills. We offer hands-on training, internships, and certification for aspiring developers and security experts.",
                  "serviceType": "Education & Training",
                  "provider": {
                    "@type": "Organization",
                    "name": "Digitanotion",
                  },
                },
              ],
            }),
          }}
        />
      </div>

      {/* SEO: Hidden content for search engines only */}
      <div className="sr-only" aria-hidden="false">
        <h1>
          Digitanotion Services - Cybersecurity, Software Development, Tech
          Training
        </h1>
        <h2>Services available in Awka, Anambra State, Nigeria</h2>
        <p>
          Professional cybersecurity services, custom software development, and
          tech training programs in Southeast Nigeria.
        </p>
      </div>

      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-6 text-foreground">
            Secure. Scalable. Simple. Your partner for reliable, future-proof
            technology.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
            We help organizations reduce risks, improve performance, and
            accelerate growth through secure systems, modern products, and
            world-class digital skills.
          </p>

          <Link href="/services/software-development/request-quote">
            <GradientButton aria-label="Get started with Digitanotion's cybersecurity, software development, and tech training services">
              Get Started
            </GradientButton>
          </Link>
        </motion.div>

        {/* Service Cards - All original content preserved */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              // SEO: Adding item scope for structured data
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 to-card/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

              <div className="relative h-full bg-card border border-border/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                {/* Icon Container with gradient background */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center text-white shadow-lg glow-effect`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content - All original text preserved */}
                <div className="space-y-3">
                  <h3
                    className="text-2xl font-bold text-foreground"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-primary tracking-wide">
                    {service.subtitle}
                  </p>

                  <p
                    className="text-muted-foreground leading-relaxed"
                    itemProp="description"
                  >
                    {service.description}
                  </p>
                </div>

                {/* SEO: Hidden meta data */}
                <meta itemProp="serviceType" content={service.title} />
                <div style={{ display: "none" }}>
                  <span itemProp="areaServed">
                    Awka, Anambra State, Nigeria
                  </span>
                  <span itemProp="areaServed">Southeast Nigeria</span>
                  <span itemProp="areaServed">Global</span>
                </div>

                {/* Animated bottom accent line */}
                <motion.div
                  className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />

                {/* Arrow indicator */}
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold cursor-pointer"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => router.push(service.link)}
                  // SEO: Adding accessible label
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO: Additional location context in hidden element */}
        <div className="sr-only" aria-hidden="false">
          <p>
            Digitanotion is a cybersecurity, software development, and tech
            training company based in Awka, Anambra State, Nigeria. We serve
            clients across Southeast Nigeria and globally with our expertise in
            digital solutions.
          </p>
          <address>
            Suite 6, Mgbajiaka Area, Digitanotion Limited, Along Onisha - Enugu
            Expy, Opposite East-End Hotel, Awka.
            <br />
            Phone: +234 80 7373 5836
            <br />
            Email: hello@digitanotion.com.ng
          </address>
        </div>
      </div>
    </section>
  );
}
