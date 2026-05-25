"use client";
import { motion } from "framer-motion";

export default function SupportChannels() {
  const items = [
    "General Inquiries",
    "Billing Support",
    "Career Opportunities",
    "Free Billing Assessment",
    "Knowledge Base",
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">
          Standard Support & Career Inquiries
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-slate-950 border border-slate-800 rounded-xl cursor-pointer hover:border-blue-400 transition"
            >
              <p className="text-slate-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
