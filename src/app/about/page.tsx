import type { Metadata } from "next";
import { getAboutPage } from "@/sanity/getAboutPage";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Us — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "A dedicated logistics and supply chain partner based in Central Malaysia. Learn about our history, our team, and our commitment to reliable freight.",
};

export default async function AboutPage() {
  const { pageCopy } = await getAboutPage();

  return <AboutContent heroImageUrl={pageCopy.aboutHeroImageUrl} />;
}