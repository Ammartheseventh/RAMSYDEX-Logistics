import type { Metadata } from "next";
import { getSolutionsPage } from "@/sanity/getSolutionsPage";
import PageHero from "@/components/layout/PageHero";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import QCBlock from "@/components/sections/QCBlock";
import CustomsBlock from "@/components/sections/CustomsBlock";
import ValueAddedTable from "@/components/sections/ValueAddedTable";
import CtaBanner from "@/components/sections/CtaBanner";

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
        variant="solutions"
      />

      <SolutionsShowcase services={services} />

      <CtaBanner
        heading="Not sure which service fits?"
        buttonText="Talk to our team"
        buttonHref="/contact"
      />

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
    </>
  );
}