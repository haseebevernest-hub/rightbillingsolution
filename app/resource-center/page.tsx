import ContactBillingForm from "../components/contactBillingForm";
import ResourceCenterHero from "../components/resourceCenter/resourceCenterHero";
import ResourceGrid from "../components/resourceCenter/resourceGrid";
import ReviewCarousel from "../components/reviewCard";

export default function ResourceCenterPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-emerald-900 text-white">
      <ResourceCenterHero />
      <ResourceGrid />
      <ReviewCarousel/>
      <ContactBillingForm/>
    </main>
  );
}