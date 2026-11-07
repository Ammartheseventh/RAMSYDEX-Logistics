import { getHomePage } from "@/sanity/getHomePage";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WorkflowBar from "@/components/sections/WorkflowBar";
import MapTeaser from "@/components/sections/MapTeaser";

export default async function Home() {
  const { pageCopy, services, trustStats, workflowSteps } = await getHomePage();

  return (
    <>
      <Hero copy={pageCopy} />
      <TrustBar stats={trustStats} />
      <SolutionsGrid
        heading={pageCopy.solutionsHeading}
        intro={pageCopy.solutionsIntro}
        services={services}
      />
      <MapTeaser />
      <WorkflowBar
        heading="How Your Cargo Moves"
        steps={workflowSteps}
      />
    </>
  );
}