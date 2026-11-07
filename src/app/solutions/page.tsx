import type { Metadata } from "next";
import Link from "next/link";
import { getSolutionsPage } from "@/sanity/getSolutionsPage";
import PageHero from "@/components/layout/PageHero";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import QCBlock from "@/components/sections/QCBlock";
import CustomsBlock from "@/components/sections/CustomsBlock";
import ValueAddedTable from "@/components/sections/ValueAddedTable";

export const metadata: Metadata = {
  title: "Solutions — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Freight, customs clearance, QC inspection, supply chain, last-mile delivery, and courier services from Central Malaysia.",
};

export default async function SolutionsPage() {
  const { pageCopy, services } = await getSolutionsPage();

  return (
    <>
      <PageHero
        imageUrl={pageCopy.solutionsHeroImageUrl}
        heading={pageCopy.solutionsPageIntroHeading}
        subheading={pageCopy.solutionsPageIntroBody}
      />

      <SolutionsShowcase services={services} />

      {/* Mid-page CTA */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center md:py-16">
          <h2 className="font-display text-2xl md:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="mt-3 text-base text-parchment-300">
            Tell us what you need to move and we&apos;ll recommend the right approach.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brick-red-500 px-8 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            Talk to our team →
          </Link>
        </div>
      </section>

      <QCBlock
        heading={pageCopy.qcHeading}
        body={pageCopy.qcBody}
        checks={pageCopy.qcChecks ?? []}
      />

      <CustomsBlock
        heading={pageCopy.customsHeading}
        body={pageCopy.customsBody}
        note={pageCopy.customsNote}
      />

      <ValueAddedTable
        heading={pageCopy.tableHeading}
        intro={pageCopy.tableIntro}
        standardServices={pageCopy.standardServices ?? []}
        valueAddedServices={pageCopy.valueAddedServices ?? []}
      />

      {/* Bottom CTA */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h2 className="font-display text-2xl md:text-3xl">{pageCopy.ctaHeading}</h2>
          <p className="mt-3 text-base text-parchment-300">{pageCopy.ctaBody}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}