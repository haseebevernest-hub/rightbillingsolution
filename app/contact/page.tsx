import ContactHero from "../components/contact/contactHero";
import EnterpriseForm from "../components/contact/enterpriseForm";
import SupportChannels from "../components/contact/supportChannels";
import SecuritySection from "../components/contact/securitySection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar/>
      <ContactHero />
      <EnterpriseForm />
      <SupportChannels />
      <SecuritySection />
      <Footer/>
    </main>
  );
}
