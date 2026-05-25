import MBSHero from "@/app/components/medicalBillingServices/mbsHero";
import MBSStats from "@/app/components/medicalBillingServices/mbsStats";
import MBSInteroperability from "@/app/components/medicalBillingServices/mbsInteroperability";
import MBSWhySection from "@/app/components/medicalBillingServices/mbsWhy";
import MBSComprehensiveServices from "@/app/components/medicalBillingServices/mbsComprehensiveService";



export const metadata = {
  title: "Medical Billing Services | Smart Billing Solution",
  description:
    "Full-cycle medical billing services optimized for enterprise revenue performance.",
};

export default function MedicalBillingServicesPage() {
  return (
    <main className="bg-slate-50">
      <MBSHero />
      <MBSStats />
      <MBSWhySection />
      <MBSInteroperability />
      <MBSComprehensiveServices />
    </main>
  );
}
