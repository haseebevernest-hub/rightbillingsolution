import { services } from "@/data/services";
import ServiceCard from "./serviceCard";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            name={service.name}
            slug={service.slug}
          />
        ))}
      </div>
    </section>
  );
}
