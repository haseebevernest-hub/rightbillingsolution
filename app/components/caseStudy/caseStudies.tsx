"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Internal Medicine",
    description:
      "Smart Billing Solutions successfully optimized the revenue cycle management process for an independent internal medicine practice in Fort Myers, Florida, USA. Through improved coding accuracy, denial management, and workflow efficiency, the practice experienced enhanced cash flow and operational clarity.",
  },
  {
    title: "Optometry Billing Services",
    description:
      "Smart Billing Solutions transformed the end-to-end billing operations for an optometry center in Texas. By implementing structured processes and targeted revenue cycle strategies, we significantly improved claim acceptance rates and reduced payment delays.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
          Featured Billing Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border border-green-100 rounded-2xl p-8 bg-linear-to-br from-white to-blue-50 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {study.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {study.description}
              </p>

              <button className="px-6 py-2 rounded-full bg-linear-to-r from-green-600 to-blue-600 text-white font-medium hover:opacity-90 transition">
                Download Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}