"use client";
import { motion } from "framer-motion";

export default function AuditSection() {
  return (
    <section className="py-28 px-6 bg-linear-to-br from-emerald-700 to-emerald-900 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-semibold"
      >
        We Don’t Bid. We Audit.
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-emerald-100">
       For organizations with <b>20+ providers</b>, we conduct a <b>complimentary 90-day AR
        diagnostic</b> to uncover <b>revenue leakage points,
        payer variance trends, denial root causes</b>, and projected <b>recovery potential.</b>
      </p>

      <button className="mt-10 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition">
        Request Your 90-Day AR Diagnostic
      </button>
    </section>
  );
}
