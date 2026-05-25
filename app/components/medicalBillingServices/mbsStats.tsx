export default function MBSStats() {
  const stats = [
    { value: "25+", label: "Years" },
    { value: "1200+", label: "Providers Served" },
    { value: "99.1%", label: "Clean Claim Rate" },
    { value: "20+", label: "Medical Specialties" },
    { value: "✓", label: "HIPAA Certified" },
  ];

  return (
    <section className="bg-white py-14 shadow-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-bold text-blue-600">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
