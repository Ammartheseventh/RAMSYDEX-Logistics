import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { getLegalPage } from "@/sanity/getLegalPage";
import { getHeroImages } from "@/sanity/getHeroImages";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions — RAMSYDEX GLOBAL LOGISTICS",
  description: "Website terms of use for RAMSYDEX GLOBAL LOGISTICS.",
};

export default async function TermsPage() {
  const { page } = await getLegalPage("terms");
  const { termsHeroImage } = await getHeroImages();
  if (!page || !page.body) notFound();

  return (
    <>
      <PageHero
        imageUrl={termsHeroImage}
        heading="Terms & Conditions"
        note={page.note}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <div className="prose prose-sm max-w-none text-taupe-grey-700">
            <PortableText value={page.body as never} />
          </div>
        </div>
      </section>
    </>
  );
}