"use client";

import { motion } from "framer-motion";

export default function ResourceCenterHero() {
  return (
    <section className="relative px-6 pt-20 pb-12 text-center overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)] pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        Resource Center
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 text-base md:text-lg text-blue-100 max-w-xl mx-auto"
      >
        Explore insights, in-depth research, and real-world success stories —
        curated to help you make better decisions and move faster.
      </motion.p>
    </section>
  );
}