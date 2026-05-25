import Banner from "@/app/components/banner";
import { specialties, Specialty } from "@/data/specialties";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Required in Next 16+
  const { slug } = await params;

  const specialty: Specialty | undefined = specialties.find(
    (item) => item.slug === slug
  );

  if (!specialty) {
    notFound();
  }

  return (
    <>
      {/* Banner */}
      <Banner
        title={specialty.title}
        subtitle={specialty.description}
        bgImage="/banner/generalSp.jpg"
      />

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          {specialty.title}
        </h2>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          {specialty.description}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialty.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold text-gray-900">
                {section.heading}
              </h3>

              <p className="mt-2 text-gray-700 whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative w-full h-100">
            <Image
              src={specialty.whyChooseUs.image}
              alt={`${specialty.title} why choose us`}
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Us
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {specialty.whyChooseUs.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
