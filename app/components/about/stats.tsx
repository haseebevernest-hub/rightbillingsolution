"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "97%", label: "Net Collection Rate" },
  { value: "99.2%", label: "Clean Claim Rate" },
  { value: "<28", label: "Days in A/R" },
  { value: "24/7", label: "Follow the Sun Model" },
]

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6 md:px-0 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-green-600">
              {stat.value}
            </h3>
            <p className="mt-2 text-slate-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
