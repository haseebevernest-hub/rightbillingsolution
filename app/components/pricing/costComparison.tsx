"use client";
import { motion } from "framer-motion";

export default function CostComparison() {
  return (
    <section className="py-20 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 bg-neutral-800 rounded-2xl border border-neutral-700"
        >
          <h3 className="text-xl font-medium mb-4">Internal Cost-to-Collect</h3>
          <p className="text-4xl font-semibold text-red-400 mb-4">12–14%</p>
          <p className="text-neutral-400">
            Fixed overhead, staffing risk, technology debt, compliance exposure.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 bg-linear-to-br from-emerald-600 to-emerald-800 rounded-2xl"
        >
          <h3 className="text-xl font-medium mb-4">MBC Optimized Yield</h3>
          <p className="text-4xl font-semibold mb-4">4–8%</p>
          <p className="text-emerald-100">
            Variable cost model, predictable EBITDA protection, zero operational risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
