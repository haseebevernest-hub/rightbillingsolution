import Banner from "../components/banner";
import MultiCard from "../components/specialties/multiCard";
import { specialties } from "@/data/specialties";

export default function StatesPage() {
  return (
    <>
      <Banner
        title="Our Speciality"
        subtitle="Explore our advanced RCM solutions for medical practices"
        bgImage="/banner/spMain.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Why Our Speciality Matters
        </h2>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We deliver industry-leading <b> revenue cycle management (RCM) solutions</b> designed specifically
           for <b>specialty practices</b>. Our AI-powered technology maximizes <b> realized yield</b>,
           minimizes hidden <b>payer variance</b>, and safeguards compliance across every payer interaction.
        </p>

        <div className="mt-12 flex items-center justify-center">
          <MultiCard items={specialties} />
        </div>
      </section>
    </>
  );
}
