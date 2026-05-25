"use client";
import PricingCard from "./pricingCard";

export default function PricingTiers() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        <PricingCard
          title="Emerging Group"
          subtitle="Growth & Cash Flow"
          target="Target: 5–20 Providers"
          features={[
            "Full-cycle revenue management",
            "Basic payer variance analysis",
            "Monthly dashboards (NCR/DCR)",
            "Standard EHR integration",
            "Quarterly business reviews"
          ]}
          cta="Request Quote"
        />

        <PricingCard
          title="Multi-Specialty Enterprise"
          subtitle="Yield & Integration Excellence"
          target="Target: 21–100 Providers"
          highlighted
          features={[
            "Advanced payer variance analysis",
            "AI-powered appeal automation (78% overturn)",
            "EHR-agnostic integration",
            "Real-time BI dashboards",
            "Dedicated Revenue Performance Manager",
            "Quarterly portfolio risk reviews"
          ]}
          cta="Schedule Yield Audit"
        />

        <PricingCard
          title="Enterprise"
          subtitle="Risk, Compliance & EBITDA"
          target="100+ Providers / Hospitals"
          features={[
            "Dedicated RCM Principal",
            "RAC/ZPIC audit defense",
            "Predictive modeling analytics",
            "Custom executive dashboards",
            "Multi-entity consolidation",
            "Board-ready financial reporting"
          ]}
          cta="Request Strategic Consultation"
        />
      </div>
    </section>
  );
}
