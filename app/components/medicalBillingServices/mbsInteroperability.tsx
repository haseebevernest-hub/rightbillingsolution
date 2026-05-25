export default function MBSInteroperability() {
  const items = [
    "HL7/FHIR API Integration",
    "Automated ERA/EOB Processing",
    "Clearinghouse Optimization",
    "Real-Time Eligibility Verification",
    "Custom RCM Dashboards",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Medical Billing Services Built for EHR Interoperability
          </h2>
          <p className="text-slate-600 text-lg">
<b>Smart Billing Solution</b> integrates seamlessly into your workflow, ensuring <b>data integrity</b> and providing <b>real-time visibility. </b>          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center"
            >
              <h3 className="text-blue-600 font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
