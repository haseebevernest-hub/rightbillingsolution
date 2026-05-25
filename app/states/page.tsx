import Banner from "../components/banner";
import StateCard from "../components/states/statesCard";
import { states } from "@/data/state";

export default function StatesPage() {
  return (
    <>
      <Banner
        title="States We Serve Across USA"
        subtitle="Click on a state to explore more"
        bgImage="/banner/generalSt.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore Our Coverage
        </h2>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We provide medical services across multiple states in the USA.
          Select your state below to learn more about our availability,
          services, and support in your region.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {states.map((state) => (
            <StateCard key={state.code} state={state} />
          ))}
        </div>
      </section>
    </>
  );
}
