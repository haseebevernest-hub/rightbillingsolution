import Banner from "@/app/components/banner";
import { states } from "@/data/state";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


export default async function StatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const state = states.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!state) return notFound();

  return (
    <>
      <Banner
        title={state.content.heroTitle}
        subtitle={state.content.heroSubtitle}
        bgImage="/banner/stMain.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        {state.content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {section.title}
            </h2>

            {section.paragraphs.map((para, i) => (
              <p
                key={i}
                className="mt-4 text-gray-700 text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
