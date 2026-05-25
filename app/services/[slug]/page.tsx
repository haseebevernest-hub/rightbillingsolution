import { services } from "@/data/services";
import { serviceContent } from "@/data/serviceContent";
import { notFound } from "next/navigation";
import Banner from "@/app/components/banner";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamicParams = false;

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const contentBlocks = serviceContent[slug];

  return (
    <>
      <Banner
        title={service.name}
        subtitle={service.description}
        bgImage="/banner/generalSp.jpg"
      />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {/* If structured content exists → render it */}
        {contentBlocks ? (
          contentBlocks.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2 key={index} className="text-2xl font-semibold text-gray-900">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside space-y-2 text-gray-700"
                >
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })
        ) : (
          // Fallback if no structured content
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.description}
          </p>
        )}
      </section>
    </>
  );
}
