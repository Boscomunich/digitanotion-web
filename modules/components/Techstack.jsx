"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function TechStackCarousel({
  title = "Tech stack we teach & use",
  speed = 28,
}) {
  const items = useMemo(() => buildTechItems(), []);

  const glass =
    "relative rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-transparent backdrop-blur-xl shadow-[0_8px_30px_rgba(255,140,0,0.12)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className={`${glass} p-6 md:p-8`}
      aria-label="Technology stack carousel"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <span className="text-xs md:text-sm text-white/60">
          Frontend • Backend • DevOps • Cybersecurity
        </span>
      </div>

      {/* Single-row carousel for desktop/tablet, two for mobile */}
      <div className="block sm:hidden space-y-4">
        <CarouselRow
          items={items.slice(0, Math.ceil(items.length / 2))}
          speed={speed}
        />
        <CarouselRow
          items={items.slice(Math.ceil(items.length / 2))}
          speed={speed}
          reverse
        />
      </div>
      <div className="hidden sm:block">
        <CarouselRow items={items} speed={speed} />
      </div>
    </motion.div>
  );
}

function CarouselRow({ items, speed, reverse = false }) {
  const realSpeed = Math.max(9000, Math.round(speed * 1000 * 0.8));

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      spaceBetween={8}
      slidesPerView={3}
      breakpoints={{
        420: { slidesPerView: 3, spaceBetween: 8 },
        640: { slidesPerView: 4, spaceBetween: 10 },
        768: { slidesPerView: 6, spaceBetween: 12 },
        1024: { slidesPerView: 10, spaceBetween: 14 },
        1280: { slidesPerView: 14, spaceBetween: 16 },
      }}
      freeMode
      loop
      speed={realSpeed}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
        pauseOnMouseEnter: true,
      }}
      className="!py-2"
    >
      {items.map((t, i) => (
        <SwiperSlide key={t.key + i} className="!w-auto flex justify-center">
          <TechCard item={t} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function TechCard({ item }) {
  const isBadge = item.kind === "badge"; // shields.io style (long pill)
  const size = item.key === "shadcn" ? 40 : 28;
  return (
    <div
      className="group flex items-center gap-3 rounded-xl px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
      title={item.label}
    >
      {isBadge ? (
        // For badges, keep natural width so the text stays readable
        <img
          src={item.icon}
          alt={item.label}
          className="h-6 w-auto shrink-0"
          loading="lazy"
        />
      ) : (
        <img
          src={item.icon}
          width={size}
          height={size}
          alt={item.label}
          className="shrink-0 rounded-md"
          loading="lazy"
        />
      )}
      <span className="text-sm group-hover:text-orange-400 truncate max-w-[10rem]">
        {item.label}
      </span>
    </div>
  );
}

function buildTechItems() {
  const skill = (key) => `https://skillicons.dev/icons?i=${key}`;
  const badge = (label, logo, color = "111") => ({
    icon: `https://img.shields.io/badge/${encodeURIComponent(
      label
    )}-${color}?style=flat&logo=${encodeURIComponent(logo)}&logoColor=white`,
    kind: "badge",
  });

  return [
    // Frontend core
    { key: "react", label: "React", icon: skill("react") },
    { key: "nextjs", label: "Next.js", icon: skill("nextjs") },
    { key: "tailwind", label: "TailwindCSS", icon: skill("tailwind") },
    { key: "shadcn", label: "ShadCN/UI", ...badge("ShadCN/UI", "radixui") },
    { key: "zustand", label: "Zustand", ...badge("Zustand", "react") },
    {
      key: "framermotion",
      label: "Framer Motion",
      ...badge("Framer Motion", "framer"),
    },
    { key: "axios", label: "Axios", ...badge("Axios", "axios") },
    { key: "express", label: "Express", icon: skill("express") },
    { key: "node", label: "Node.js", icon: skill("nodejs") },
    { key: "firebase", label: "Firebase", icon: skill("firebase") },
    { key: "postman", label: "Postman", icon: skill("postman") },
    {
      key: "nmap",
      label: "Nmap",
      ...badge("Nmap", "securityscorecard", "0A66C2"),
    },
    {
      key: "burp",
      label: "Burp Suite",
      ...badge("Burp Suite", "bugcrowd", "FE7A16"),
    },
    {
      key: "wireshark",
      label: "Wireshark",
      ...badge("Wireshark", "wireshark", "007ACC"),
    },
    { key: "mongodb", label: "MongoDB", icon: skill("mongodb") },
    { key: "supabase", label: "Supabase", icon: skill("supabase") },
    { key: "git", label: "Git", icon: skill("git") },
    { key: "github", label: "GitHub", icon: skill("github") },
    { key: "vercel", label: "Vercel", icon: skill("vercel") },
    { key: "figma", label: "Figma", icon: skill("figma") },
    { key: "linux", label: "Linux", icon: skill("linux") },
    { key: "bash", label: "Bash", icon: skill("bash") },
    { key: "docker", label: "Docker", icon: skill("docker") },
    {
      key: "cloudinary",
      label: "Cloudinary",
      ...badge("Cloudinary", "cloudinary"),
    },
    { key: "redux", label: "Redux", icon: skill("redux") },
    { key: "graphql", label: "GraphQL", icon: skill("graphql") },

    // more badges that used to be tiny pills
    {
      key: "swagger",
      label: "OpenAPI/Swagger",
      ...badge("OpenAPI", "swagger"),
    },
    {
      key: "zap",
      label: "OWASP ZAP",
      ...badge("OWASP ZAP", "owasp", "000000"),
    },
    {
      key: "kali",
      label: "Kali Linux",
      ...badge("Kali Linux", "linux", "268BD2"),
    },
    { key: "render", label: "Render", ...badge("Render", "render") },
    { key: "railway", label: "Railway", ...badge("Railway", "railway") },
  ];
}
