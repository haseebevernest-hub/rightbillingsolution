"use client"

import { motion } from "framer-motion"

export default function Infrastructure() {
  return (
    <section className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-900"
        >
          Global Scale. US Strategic Oversight.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-slate-600 text-lg"
        >
          Offshore teams manage <b>high-volume workflows</b>, while <b>U.S.-based principals</b>
           oversee <b> payer relationships</b>, handle <b>escalations</b>, and lead <b>audit defense</b>.
           Driven by <b>predictive AI denial analytics</b> and <b>24-hour claim submission</b> for continuous revenue cycle performance.
        </motion.p>
      </div>
    </section>
  )
}
