import Banner from "@/app/components/banner";
import { services } from "@/data/services";
import ServiceCard from "@/app/components/services/serviceCard";

export default function ServicesPage() {
  return (
    <>
      {/* Banner at the top */}
      <Banner
        title="Our Services"
        subtitle="Explore our services"
        bgImage="/banner/generalSp.jpg"
      />

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
          name='Medical Billing Service'
          key='Medical Billing Service'
          slug='medicalBillingServices'
          />
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              slug={service.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
