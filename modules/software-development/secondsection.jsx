"use client";

import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <section className="relative w-full bg-primary/30 py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            What Comes Next
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            After the split-scroll experience, explore our additional services
            and success stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/40 transition-colors"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Service {item}
              </h3>
              <p className="text-gray-300">
                Explore our comprehensive solutions tailored to your business
                needs and goals.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
