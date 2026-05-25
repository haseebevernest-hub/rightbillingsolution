"use client"

import { motion } from "framer-motion"

const specialties = [
  "Family Practice",
  "OB-GYN",
  "Optometry",
  "Dermatology",
  "Orthopedic",
  "ASC",
  "Wound Care",
]

export default function Centers() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
          Seven Centers of Excellence. One Revenue Partner.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-400 transition"
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
