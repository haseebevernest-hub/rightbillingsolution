"use client";
import { motion } from "framer-motion";

export default function EnterpriseForm() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">

        {/* LEFT STRATEGIC PANEL */}
        <div className="lg:col-span-2 space-y-8 sticky top-32 h-fit">

          <div>
            <h2 className="text-3xl font-semibold">
              The CFO Priority Channel
            </h2>
            <p className="mt-4 text-slate-400">
              Strategic Revenue Briefings for Multi-Specialty Groups & Health Systems.
            </p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-sm text-slate-400">
              Reviewed by Lead RCM Principal
            </p>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
             Enterprise organizations are connected with a dedicated <b> RCM Principal </b>for a focused <b>15-minute Financial
              Yield Assessment</b>. No sales presentations. No pressure. Only actionable data
            </p>
          </div>

          <div className="p-6 bg-linear-to-br from-blue-900/40 to-emerald-900/40 border border-slate-800 rounded-xl">
            <p className="text-sm text-slate-400">
              Direct Line (Large Groups Only)
            </p>
            <p className="text-2xl font-semibold text-emerald-400 mt-2">
              (737) 302-4801
            </p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3 bg-slate-900 border border-slate-800 p-8 rounded-2xl"
        >

          {/* GRID INSIDE FORM */}
          <div className="grid md:grid-cols-2 gap-5">

            <Input label="Full Name *" />
            <Input label="Title / Role *" placeholder="CFO, Director of Revenue Ops" />

            <Input label="Organization Name *" />
            <Select label="Organization Type *" />

            <Select label="Provider Count *" />
            <Input label="Current EHR/PMS *" placeholder="Epic, Cerner, Athena..." />

            <Select label="Primary Financial Goal *" />
            <Input label="Business Email *" />

            <Input label="Phone Number *" />
          </div>

          {/* FULL WIDTH TEXTAREA */}
          <div className="mt-6">
            <label className="text-sm text-slate-400">
              Additional Context (Optional)
            </label>
            <textarea
              rows={4}
              className="mt-2 w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Share specific revenue challenges, payer mix complexity, denial trends..."
            />
          </div>

          <button className="mt-8 w-full py-3 rounded-lg bg-linear-to-r from-blue-500 to-emerald-400 font-medium text-black hover:opacity-90 transition">
            Initiate Strategic Diagnostic
          </button>

        </motion.form>
      </div>
    </section>
  );
}

function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="text-sm text-slate-400">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-2 w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function Select({ label }: any) {
  return (
    <div>
      <label className="text-sm text-slate-400">{label}</label>
      <select className="mt-2 w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
        <option>Select option</option>
      </select>
    </div>
  );
}
