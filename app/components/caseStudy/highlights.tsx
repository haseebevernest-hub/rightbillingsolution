"use client";

import { motion } from "framer-motion";

const highlights = [
  "Precise and reliable information to resolve billing issues quickly",
  "Proven strategies to reduce Accounts Receivable (AR) days",
  "100% audit compliance with streamlined workflow management",
  "Consistent improvements in revenue cycle performance",
];

export default function Highlights() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-green-500 to-blue-500 mb-4" />
            <p className="text-gray-700">{item}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center text-gray-600 max-w-3xl mx-auto">
        Our case studies highlight real-world examples of the quality,
        efficiency, and results we deliver to our clients.
      </div>
    </section>
  );
}