interface MetricItemProps {
  label: string;
  value: string;
  color: string;
}

export default function MetricItem({
  label,
  value,
  color,
}: MetricItemProps) {
  return (
    <div className="text-center md:text-left">
      <p className="text-sm uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className={`mt-2 text-3xl md:text-4xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  );
}
