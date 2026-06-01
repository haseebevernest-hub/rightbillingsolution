export default function MBSComprehensiveServices() {
  const services = [
    {
      title: "Charge Capture & Entry",
      desc: "Automated HL7/FHIR EHR integration with real-time CPT/ICD-10 validation."
    },
    {
      title: "Medical Coding Services",
      desc: "Certified coders (CPC, CCS, COC) optimizing modifier usage and LCD/NCD compliance."
    },
    {
      title: "Claims Submission & Clearinghouse Management",
      desc: "99%+ clean claim rate with proactive specialty-based scrubbing protocols."
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "Automated ERA/EOB posting with reimbursement variance alerts."
    },
    {
      title: "Denial Management & Appeals",
      desc: "Root-cause analysis to eliminate recurring denials and recover lost AR."
    },
    {
      title: "Accounts Receivable Follow-Up",
      desc: "Focused collections strategy for balances exceeding 90 days."
    },
    {
      title: "Patient Billing & Collections",
      desc: "HIPAA-compliant, patient-centered communication strategy."
    },
    {
      title: "Credentialing & Enrollment",
      desc: "CAQH management, payer enrollments, re-credentialing cycles, and roster updates."
    },
    {
      title: "RCM Analytics & Reporting",
      desc: "Real-time dashboards tracking Days in AR, Net Collection Rate, and denial categories."
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Medical Billing Services for Modern Healthcare Organizations
          </h2>
          <p className="text-slate-600 text-lg">
Standard vendors simply submit claims; <b>Right Billing Solution</b> enforces <b>revenue integrity. </b>         </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-500 transition"
            >
              <h3 className="text-blue-600 font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
