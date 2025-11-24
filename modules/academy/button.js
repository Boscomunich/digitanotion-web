"use client"

import { motion } from "framer-motion";

export default function Button({text, extraStyles}) {
	return(
		<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={"py-1 px-15 border border-white/50 bg-[rgba(255,255,255,0.3)] rounded-full " + extraStyles}>
			{text}
		</motion.button>
	)
}