import type { Metadata } from "next";
import { solutionDetails } from "@/data/solutions";
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

export default function SolutionsPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Core Solutions &amp; Operational Capabilities
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-600">
            Six coordinated services from our Central Malaysia hub — freight,
            customs, QC inspection, supply chain, last-mile delivery, and
            courier — each with its own operational details.
          </p>
        </div>
      </section>

      {/* Six service detail sections */}
      {solutionDetails.map((service) => (
        <ServiceDetail key={service.slug} service={service} />
      ))}

      {/* QC inspection block */}
      <QCBlock />

      {/* Multi-region customs block */}
      <CustomsBlock />

      {/* Standard vs. value-added table */}
      <ValueAddedTable />

      {/* CTA banner */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">
            Need a reliable logistics and customs partner?
          </h2>
          <p className="mt-3 text-base text-gray-300">
            Request a quote today and our Central Malaysia desk will respond
            within 24 hours during business hours.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}