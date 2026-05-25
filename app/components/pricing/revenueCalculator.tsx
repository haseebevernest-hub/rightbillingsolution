"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RevenueCalculator() {
  const [revenue, setRevenue] = useState(20000000);

  const leakage = revenue * 0.04;
  const addedEBITDA = leakage * 0.5;

  return (
    <section className="py-24 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Stop Looking at Fees. Start Looking at Leaks.
        </h2>

        <div className="mt-10">
          <input
            type="range"
            min="5000000"
            max="100000000"
            step="1000000"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full"
          />

          <p className="mt-6 text-lg text-neutral-400">
            Annual Gross Revenue:{" "}
            <span className="text-white font-semibold">
              ${(revenue / 1000000).toFixed(1)}M
            </span>
          </p>

          <motion.div
            key={leakage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-8 bg-neutral-800 rounded-xl"
          >
            <p className="text-neutral-400">Estimated Revenue Leakage (4%)</p>
            <p className="text-3xl font-semibold text-red-400">
              ${leakage.toLocaleString()}
            </p>

            <p className="mt-4 text-neutral-400">
              Estimated EBITDA Added (Year One)
            </p>
            <p className="text-3xl font-semibold text-emerald-400">
              ${addedEBITDA.toLocaleString()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
