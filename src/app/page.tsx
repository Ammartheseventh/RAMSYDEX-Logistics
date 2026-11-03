import { getHomePage } from "@/sanity/getHomePage";
import { getServices } from "@/sanity/getServices";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WorkflowBar from "@/components/sections/WorkflowBar";
import MapTeaser from "@/components/sections/MapTeaser"; // <-- Import

export default async function Home() {
  const [page, services] = await Promise.all([
    getHomePage(),
    getServices(),
  ]);

  return (
    <>
      <Hero page={page} />
      <TrustBar stats={page.trustStats} />
      <SolutionsGrid
        heading={page.solutionsHeading}
        intro={page.solutionsIntro}
        services={services}
      />
      
      <MapTeaser />

      <WorkflowBar
        heading={page.workflowHeading}
        steps={page.workflowSteps}
      />
    </>
  );
}