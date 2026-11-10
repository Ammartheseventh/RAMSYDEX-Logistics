import { getHomePage } from "@/sanity/getHomePage";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WorkflowBar from "@/components/sections/WorkflowBar";
import MapTeaser from "@/components/sections/MapTeaser";

export default async function Home() {
  const { siteSettings, heroImages, services } = await getHomePage();

  return (
    <>
      <Hero copy={siteSettings} imageUrl={heroImages.homeHeroImage} />
      <TrustBar stats={siteSettings.trustStats} />
      <SolutionsGrid
        heading={siteSettings.solutionsHeading}
        intro=""
        services={services}
      />
      <MapTeaser />
      <WorkflowBar heading="How Your Cargo Moves" />
    </>
  );
}