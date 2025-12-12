"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function RotatingCard({ image, text }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-64 cursor-pointer"
      style={{ perspective: "1200px" }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card
            className="
              w-full h-full px-4 py-6 flex flex-col items-center justify-center 
              rounded-2xl bg-white 
              shadow-[0_20px_40px_rgba(0,0,0,0.25)]
            "
          >
            <Image
              src={image}
              width={400}
              height={400}
              alt="initiative"
              className=" object-cover"
            />
          </Card>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rotate-y-180"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card
            className="
              w-full h-full p-6 flex flex-col items-center justify-center text-center
              rounded-2xl 
              bg-primary text-white 
              shadow-[0_25px_50px_rgba(0,0,0,0.3)]
            "
          >
            <p className="text-sm leading-relaxed">{text}</p>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
