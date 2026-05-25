"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = {
  title: string;
  value: number;
  suffix?: string;
  description: string;
};

/* ============================= */
/* ========= DATA ============== */
/* ============================= */

const claimsProcessing: Metric[] = [
  {
    title: "First Pass Resolution Rate",
    value: 95,
    suffix: "%",
    description:
      "Percentage of claims paid on the first submission.",
  },
  {
    title: "Average Days to Payment",
    value: 21,
    suffix: " Days",
    description:
      "Average number of days it takes for claims to be paid.",
  },
];

const financialMetrics: Metric[] = [
  {
    title: "Net Collection Rate",
    value: 90,
    suffix: "%",
    description:
      "Percentage of total charges that are collected.",
  },
  {
    title: "Average Denial Resolution Time",
    value: 30,
    suffix: " Days",
    description:
      "Average number of days taken to fix and resolve a denied claim.",
  },
];

const operationalMetrics: Metric[] = [
  {
    title: "Average Claims Submitted Per Month",
    value: 100,
    suffix: "%",
    description: "Volume of claims submitted.",
  },
  {
    title: "Staff Productivity Rate",
    value: 98,
    suffix: "%",
    description:
      "Claims processed per biller per day.",
  },
];

/* ============================= */
/* ===== ANIMATED NUMBER ======= */
/* ============================= */

function AnimatedNumber({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span className="text-5xl font-bold bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
      {display}
      {suffix}
    </span>
  );
}

/* ============================= */
/* ===== CIRCULAR PROGRESS ===== */
/* ============================= */

function CircularProgress({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) {
  const size = 180;
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = isInView ? value : 0;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="-rotate-90"
    >
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e0f2fe"
        strokeWidth={stroke}
        fill="none"
      />

      {/* Animated circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradient)"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 2, ease: "easeOut" }}
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ============================= */
/* ===== METRIC CARD =========== */
/* ============================= */

function MetricCard({ metric }: { metric: Metric }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white border border-blue-100 rounded-3xl p-10 shadow-md hover:shadow-xl transition flex flex-col items-center text-center min-h-105"
    >
      {/* Circle Area */}
      <div className="relative w-45 h-45 flex items-center justify-center mb-8">
        {metric.suffix === "%" && (
          <div className="absolute">
            <CircularProgress
              value={metric.value}
              isInView={isInView}
            />
          </div>
        )}

        <AnimatedNumber
          value={metric.value}
          suffix={metric.suffix}
          isInView={isInView}
        />
      </div>

      <h3 className="text-xl font-semibold text-blue-700 mb-3">
        {metric.title}
      </h3>

      <p className="text-sm text-gray-500 max-w-xs">
        {metric.description}
      </p>
    </motion.div>
  );
}

/* ============================= */
/* ===== SECTION WRAPPER ======= */
/* ============================= */

function Section({
  title,
  metrics,
}: {
  title: string;
  metrics: Metric[];
}) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>
    </div>
  );
}

/* ============================= */
/* ===== MAIN COMPONENT ======== */
/* ============================= */

export default function MedicalBillingMetrics() {
  return (
    <section className="py-24 px-6 bg-linear-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          Medical Billing At A Glance
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover the key metrics that demonstrate our dedication to <b>accurate coding</b> and <b>maximized reimbursement</b>.
        </p>
      </div>

      <Section
        title="Claims Processing Metrics"
        metrics={claimsProcessing}
      />

      <Section
        title="Financial Metrics"
        metrics={financialMetrics}
      />

      <Section
        title="Operational Metrics"
        metrics={operationalMetrics}
      />
    </section>
  );
}
