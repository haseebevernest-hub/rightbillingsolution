"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-28 px-6 text-center max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-semibold tracking-tight"
      >
        Enterprise Revenue Intelligence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto"
      >
        Start a <b> Strategic Revenue Diagnostic</b>. Directors or CFOs of multi-specialty groups
         (20+ providers) can access the <b> Enterprise Priority Channel</b> below.
      </motion.p>
    </section>
  );
}
