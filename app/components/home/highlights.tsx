"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    value: "$2.4B+",
    label: "Claims Processed Annually",
  },
  {
    value: "98.7%",
    label: "True Net Collection Ratio",
  },
  {
    value: "SOC 2",
    label: "Type II Certified",
  },
];

export default function Highlights() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {item.value}
              </h3>
              <p className="mt-3 text-gray-600 text-base md:text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
