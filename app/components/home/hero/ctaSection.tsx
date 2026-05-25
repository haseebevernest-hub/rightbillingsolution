"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./secondaryButton";

export default function CTASection() {
  return (
    <section className="w-full bg-blue-600 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Stop Outsourcing. Start Optimizing.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-blue-100 leading-relaxed"
        >
         Skip the sales pitch. Book a 15-minute strategic briefing with one of our <b>RCM Principals</b> to 
         review your organization’s specific <b>revenue cycle challenges</b> and financial performance gaps.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          <PrimaryButton
            href="/schedule-briefing"
            label="Schedule Principal Briefing"
          />
          <SecondaryButton
            href="/rcm-assessment-guide"
            label="Download RCM Assessment Guide"
          />
        </motion.div>

      </div>
    </section>
  );
}
