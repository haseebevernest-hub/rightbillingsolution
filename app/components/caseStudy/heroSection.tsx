"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
      >
        Medical Billing Case Studies
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
      
        At <span className="font-semibold text-green-600">Right Billing Solutions (SBS)</span>, 
        we partner with healthcare organizations to solve operational challenges 
        and drive measurable growth.
      </motion.p>
    </section>
  );
}