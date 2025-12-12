"use client";

import { motion } from "framer-motion";
import { GradientButton } from "../component/gradient-button";
import Link from "next/link";

export default function LeftContent() {
  return (
    <motion.div
      className="w-full py-12 max-w-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold tracking-widest mb-4">
          WHY CHOOSE US?
        </p>
      </div>

      <h1 className="text-5xl font-bold text-primary mb-8 leading-tight">
        Custom Software Development Solutions
      </h1>

      <p className="text-lg leading-relaxed mb-12">
        We build powerful, scalable, and intuitive software solutions tailored
        to your specific business needs. From mobile and web applications to
        desktop software, we create digital experiences that drive growth and
        efficiency.
      </p>

      {/* Services Overview */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="font-medium">Mobile Applications</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="font-medium">Web Applications</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="font-medium">Desktop Applications</span>
        </div>
      </div>

      <Link href="/services/software-development/request-quote">
        <GradientButton>Request a Quote</GradientButton>
      </Link>
    </motion.div>
  );
}
