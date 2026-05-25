import Hero from "../components/about/stats"
import Stats from "../components/about/stats"
import Philosophy from "../components/about/philosophy"
import Centers from "../components/about/centers"
import Infrastructure from "../components/about/infastructure"
import CTA from "../components/about/cta"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <Navbar/>
      <Hero />
      <Stats />
      <Philosophy />
      <Centers />
      <Infrastructure />
      <CTA />
      <Footer/>
    </main>
  )
}
