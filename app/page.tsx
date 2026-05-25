import Footer from "./components/footer";
import CTASection from "./components/home/hero/ctaSection";
import EnterpriseSection from "./components/home/hero/enterpriseSection";
import FrameworkSection from "./components/home/hero/frameworkSection";
import Hero from "./components/home/hero/hero";
import Highlights from "./components/home/highlights";
import RiskAlert from "./components/home/riskAlert";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="mt-20">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <RiskAlert/>
      <FrameworkSection/>
      <EnterpriseSection/>
      <CTASection/>
      <Footer/>
      </div>
  );
}
