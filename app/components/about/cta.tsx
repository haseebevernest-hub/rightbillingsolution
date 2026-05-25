"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-24 bg-linear-to-r from-blue-900 to-green-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Experience the Smart Billing Solution Standard
      </motion.h2>

      <p className="mt-6 text-lg opacity-90">
Designed for <b> physician groups</b> generating <b>$150K+ in monthly collections</b>.      </p>

      <Link
        href="/contact"
        className="inline-block mt-8 bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition"
      >
        Schedule a Strategy Call
      </Link>
    </section>
  )
}
