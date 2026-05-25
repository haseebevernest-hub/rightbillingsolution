export default function MBSWhySection() {
  const features = [
    {
      title: "Payer Variance Monitoring",
      desc: "We audit remittances against payer fee schedules to uncover underpayments and initiate recovery."
    },
    {
      title: "Multi-Location Scalability",
      desc: "Unified reporting, centralized AR management, and location-level performance tracking."
    },
    {
      title: "Accounts Receivable Recovery",
      desc: "Specialized recovery of aging AR (120+ days) previously written off internally."
    },
    {
      title: "Regulatory Compliance Expertise",
      desc: "Proactive monitoring of Medicare LCD changes and payer-specific authorization requirements."
    },
    {
      title: "EHR-Agnostic Integration",
      desc: "Seamless workflow integration across Epic, Cerner, Athena, AdvancedMD, and Allscripts."
    },
    {
      title: "Dedicated Account Management",
      desc: "Assigned Account Manager and specialty-specific billing experts."
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Why Multi-Specialty Groups Choose Smart Billing Solution?
          </h2>
          <p className="text-slate-600 text-lg">
Traditional billing firms focus on volume, while <b> Smart Billing Solution </b> emphasizes <b> Net Realized Revenue. </b>         </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-500 transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
