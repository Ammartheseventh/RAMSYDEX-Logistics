import type { Metadata } from "next";
import { getNetworkPage } from "@/sanity/getNetworkPage";
import { getMapData } from "@/sanity/getMapData";
import PageHero from "@/components/layout/PageHero";
import NetworkMapSection from "@/components/sections/NetworkMapSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Global Network — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Trade lanes, customs coverage, and corridor connectivity from our Central Malaysia hub.",
};

export default async function NetworkPage() {
  // Only fetch what we actually need now (pageCopy and mapData)
  const [{ pageCopy }, mapData] = await Promise.all([
    getNetworkPage(),
    getMapData(),
  ]);

  return (
    <>
      <PageHero
        imageUrl={pageCopy.networkHeroImageUrl}
        heading="Global Network & Focus Countries"
        variant="network"
      />

      <NetworkMapSection
        countries={mapData?.countries || []}
        mapNote={pageCopy.networkMapNote}
      />

      <CtaBanner
        heading={pageCopy.ctaHeading || "Ready to expand your reach?"}
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}