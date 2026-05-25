"use client";

import { motion } from "framer-motion";
import FrameworkCard from "./frameworkCard";

const pillars = [
  {
    title: "Financial Performance",
    description: (
    <>
      Beyond <strong>Days in AR</strong>: We measure{" "}
      <strong>Net Collection Ratio (NCR)</strong> and{" "}
      <strong>Payer Variance</strong> to confirm you receive{" "}
      <strong>100% of your contracted reimbursement</strong> — 
      not merely 100% of what a payer “approves.”
    </>
  ),
    items: [
      "True Realized Yield Tracking",
      "Payer Variance Analytics",
      "Cost-to-Collect Optimization",
    ],
  },
  {
    title: "Risk Mitigation",
    description: (
    <>
      <strong>Audit-Ready Infrastructure</strong>: Our proactive{" "}
      <strong>RAC Audit Defense</strong> and{" "}
      <strong>Payer Variance</strong> strategy and internal{" "}
      compliance scrubbing safeguard your organization against federal clawbacks and
      <strong> No Surprises Act </strong>penalties
    </>
  ),
      items: [
      "RAC Audit Defense Protocol",
      "No Surprises Act Compliance",
      "Pre-Submission Quality Gates",
    ],
  },
  {
    title: "Technological Efficiency",
    description: (
    <>
     <b> EHR-Agnostic Interoperability:</b> We enhance your existing systems,
       not replace them. Our AI-driven <b> Appeal Bots</b> integrate seamlessly
        with Epic Systems, Cerner, and Athenahealth to remove manual 
        middleware.
    </>
  ),    items: [
      "AI-Powered Appeal Automation",
      "Multi-EHR Integration",
      "Real-Time Denial Prediction",
    ],
  },
];

export default function FrameworkSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The MBC Revenue Integrity Framework
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Three strategic pillars that distinguish <b> operational efficiency </b> from 
            true <b> financial dominance</b>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <FrameworkCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              items={pillar.items}
              delay={index * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
