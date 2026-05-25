"use client"

import { motion } from "framer-motion"

export default function Philosophy() {
  return (
    <section className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
Shifting the RCM Paradigm: From Volume to Revenue Yield        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-slate-600 text-lg leading-relaxed"
        >
          Most <b>RCM companies</b> focus on volume. <b> Smart Billing Solution</b> focuses on
           <b>revenue yield</b>. Our Total Revenue Integrity model integrates <b> clinical coding expertise, predictive denial analytics,
           </b>and <b>contract intelligence</b> to help ensure every contracted dollar is fully collected.
        </motion.p>
      </div>
    </section>
  )
}
