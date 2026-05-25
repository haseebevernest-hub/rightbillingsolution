import PricingCard from "../components/pricing/pricingCard";
import PricingHero from "../components/pricing/pricingHero";
import RevenueCalculator from "../components/pricing/revenueCalculator";
import GuaranteeSection from "../components/pricing/guaranteeSection";
import PricingTiers from "../components/pricing/pricingTiers";
import CostComparison from "../components/pricing/costComparison";
import AuditSection from "../components/pricing/auditSection";
import ReviewCarousel from "../components/reviewCard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PricingPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Navbar/>
      <PricingHero />
      <CostComparison />
      <PricingTiers />
      <RevenueCalculator />
      <GuaranteeSection />
      <AuditSection />
      <ReviewCarousel/>
      <Footer/>
    </main>
  );
}
