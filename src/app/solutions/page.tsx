import type { Metadata } from "next";
import { getSolutionsPage } from "@/sanity/getSolutionsPage";
import { getServices } from "@/sanity/getServices";
import ServiceDetail from "@/components/sections/ServiceDetail";
import QCBlock from "@/components/sections/QCBlock";
import CustomsBlock from "@/components/sections/CustomsBlock";
import ValueAddedTable from "@/components/sections/ValueAddedTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Freight, customs clearance, QC inspection, supply chain, last-mile delivery, and courier services from Central Malaysia.",
};

export default async function SolutionsPage() {
  const [page, services] = await Promise.all([
    getSolutionsPage(),
    getServices(),
  ]);

  return (
    <>
      {/* Intro */}
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h1 className="text-3xl font-bold text-taupe-grey-950 md:text-4xl">
            {page.introHeading}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-taupe-grey-600">
            {page.introBody}
          </p>
        </div>
      </section>

      {/* Six service detail sections */}
      {services.map((service) => (
        <ServiceDetail key={service._id} service={service} />
      ))}

      {/* QC inspection block */}
      <QCBlock
        heading={page.qcHeading}
        body={page.qcBody}
        checks={page.qcChecks}
      />

      {/* Multi-region customs block */}
      <CustomsBlock
        heading={page.customsHeading}
        body={page.customsBody}
        note={page.customsNote}
      />

      {/* Standard vs. value-added table */}
      <ValueAddedTable
        heading={page.tableHeading}
        intro={page.tableIntro}
        standardServices={page.standardServices}
        valueAddedServices={page.valueAddedServices}
      />

      {/* CTA banner */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">{page.ctaHeading}</h2>
          <p className="mt-3 text-base text-parchment-300">{page.ctaBody}</p>
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