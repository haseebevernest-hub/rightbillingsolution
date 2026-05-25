"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Zero Startup Fees",
    desc: "No onboarding costs, no implementation charges for qualified groups.",
  },
  {
    title: "Uncapped Denial Appeals",
    desc: "We pursue every dollar until administrative remedies are exhausted.",
  },
  {
    title: "No-Cost EHR Integration",
    desc: "Epic, Cerner, Athena, eCW — seamless integration included.",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
