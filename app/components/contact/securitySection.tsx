"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SecuritySection() {
  const certifications = [
    {
      title: "SOC 2 Type II",
      image: "/certs/soc2.webp",
    },
    {
      title: "HIPAA Compliant",
      image: "/certs/hippa.jpg",
    },
    {
      title: "ISO 27001",
      image: "/certs/iso.png",
    },
    {
      title: "HITRUST Certified",
      image: "/certs/hitrust.webp",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Enterprise-Grade Security & Compliance
        </h2>

        <div className="mt-14 grid md:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-between"
            >
              {/* IMAGE CONTAINER */}
              <div className="h-16 flex items-center justify-center mb-6">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={80}
                  height={60}
                  className="object-contain opacity-90"
                />
              </div>

              {/* TITLE */}
              <p className="text-emerald-400 font-medium text-sm tracking-wide">
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
