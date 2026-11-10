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
  description: "Freight, customs clearance, QC inspection, supply chain, last-mile delivery, and courier services from Central Malaysia.",
};

export default async function SolutionsPage() {
  const { siteSettings, heroImages, services } = await getSolutionsPage();

  return (
    <>
      <PageHero imageUrl={heroImages.solutionsHeroImage} heading="Our Solutions" variant="solutions" />
      <SolutionsShowcase services={services} />
      <CtaBanner heading="Not sure which service fits?" buttonText="Talk to our team" buttonHref="/contact" />
      <QCBlock heading={siteSettings.qcHeading} body="" checks={siteSettings.qcChecks} />
      <CustomsBlock heading={siteSettings.customsHeading} body="" note="" regions={siteSettings.customsRegions.map((name) => ({ name }))} />
      <ValueAddedTable heading={siteSettings.tableHeading} intro="" standardServices={siteSettings.standardServices} valueAddedServices={siteSettings.valueAddedServices} />
    </>
  );
}