"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Button({ data }) {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={
        "px-15 rounded-full bg-green-800/90 hover:bg-green-800 w-full py-3 md:w-80 text-white border border-white/20"
      }
      onClick={() =>
        router.push(
          `/academy/register?course=${encodeURIComponent(JSON.stringify(data))}`
        )
      }
    >
      Register
    </motion.button>
  );
}
