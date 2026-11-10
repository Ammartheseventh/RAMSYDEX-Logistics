import type { Metadata } from "next";
import { getNetworkPage } from "@/sanity/getNetworkPage";
import PageHero from "@/components/layout/PageHero";
import NetworkMapSection from "@/components/sections/NetworkMapSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Global Network — RAMSYDEX GLOBAL LOGISTICS",
  description: "Trade lanes, customs coverage, and corridor connectivity from our Central Malaysia hub.",
};

export default async function NetworkPage() {
  const { siteSettings, heroImages, mapData } = await getNetworkPage();

  return (
    <>
      <PageHero imageUrl={heroImages.networkHeroImage} heading="Global Network & Focus Countries" variant="network" />
      <NetworkMapSection countries={mapData?.countries || []} mapNote={siteSettings.networkMapNote} />
      <CtaBanner heading={siteSettings.ctaHeading} buttonText="Request a Quote" buttonHref="/contact" />
    </>
  );
}