"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "5.6%",
    label: "Usual Hidden Variance Leakage",
  },
  {
    value: "~75%",
    label: "Groups Don't Track NCR",
  },
  {
    value: "$180K",
    label: "Average Annual Loss Per Provider",
  },
];

export default function RiskAlert() {
  return (
    <section className="w-full bg-red-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Alert Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Critical Risk Alert
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            The RCM Battle of 2026: Providers vs. Payer Algorithms
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Many large healthcare organizations are forfeiting 4–7% of their yearly revenue due to 
            <b> algorithmic downcoding</b>. While your internal team reports high <b> clean claim rates </b>, insurance payers deploy advanced <b> NLP</b> tools to analyze clinical documentation and automatically deny claims based on<b> medical necessity</b>.
          </p>

          <p className="mt-4 text-xl font-semibold text-red-700">
You’re not simply facing denials, you’re being outperformed by smarter algorithms.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-white border border-red-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                {stat.value}
              </h3>
              <p className="mt-3 text-gray-600 text-base md:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
