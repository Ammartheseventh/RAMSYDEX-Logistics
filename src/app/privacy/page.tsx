import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { getLegalPage } from "@/sanity/getLegalPage";
import { getHeroImages } from "@/sanity/getHeroImages";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "How RAMSYDEX GLOBAL LOGISTICS collects, uses, and protects personal data under Malaysia's PDPA.",
};

export default async function PrivacyPage() {
  const { page } = await getLegalPage("privacy");
  const { privacyHeroImage } = await getHeroImages();
  if (!page || !page.body) notFound();

  return (
    <>
      <PageHero
        imageUrl={privacyHeroImage}
        heading="Privacy Policy"
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