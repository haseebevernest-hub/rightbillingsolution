"use client";
import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="py-28 px-6 text-center max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold tracking-tight"
      >
        Performance-Based RCM.
        <br />
        <span className="text-neutral-400">Aligned with Your EBITDA.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-neutral-400 max-w-3xl mx-auto"
      >
        We don’t simply process claims; <b>we optimize revenue yield</b>. Our <b>performance-based pricing models</b> are structured to lower
         your <b>total Cost-to-Collect</b> while maximizing <b>realized revenue</b>.
      </motion.p>
    </section>
  );
}
