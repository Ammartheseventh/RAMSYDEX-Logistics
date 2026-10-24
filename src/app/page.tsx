import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import WorkflowBar from "@/components/sections/WorkflowBar";
import NetworkTeaser from "@/components/sections/NetworkTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SolutionsGrid />
      <WorkflowBar />
      <NetworkTeaser />
    </>
  );
}