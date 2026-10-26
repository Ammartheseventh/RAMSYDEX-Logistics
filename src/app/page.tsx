import { getHomePage } from "@/sanity/getHomePage";
import { getServices } from "@/sanity/getServices";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WorkflowBar from "@/components/sections/WorkflowBar";
import NetworkTeaser from "@/components/sections/NetworkTeaser";

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
      <WorkflowBar
        heading={page.workflowHeading}
        intro={page.workflowIntro}
        steps={page.workflowSteps}
      />
      <NetworkTeaser
        heading={page.networkTeaserHeading}
        body={page.networkTeaserBody}
        imageUrl={page.networkTeaserImageUrl}
      />
    </>
  );
}