"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function GradientButton({ children, className }) {
  return (
    <motion.button
      className={cn(
        "mt-4 px-8 py-3 w-64 bg-gradient-to-r from-primary to-primary/50 text-primary-foreground rounded-lg font-semibold border border-primary/20",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
