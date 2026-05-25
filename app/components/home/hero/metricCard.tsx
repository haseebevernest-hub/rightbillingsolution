import MetricItem from "./metricItem";

const metrics = [
  {
    label: "Realized Yield",
    value: "+$1.2M",
    color: "text-green-600",
  },
  {
    label: "Cost-to-Collect",
    value: "-18%",
    color: "text-blue-600",
  },
  {
    label: "Payer Variance",
    value: "-4.2%",
    color: "text-purple-600",
  },
];

export default function MetricsCard() {
  return (
    <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6">
      {metrics.map((metric) => (
        <MetricItem
          key={metric.label}
          label={metric.label}
          value={metric.value}
          color={metric.color}
        />
      ))}
    </div>
  );
}
