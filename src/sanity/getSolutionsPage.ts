// getSolutionsPage.ts
import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { SERVICES_QUERY } from "@/sanity/queries";
import { getSiteSettings } from "./getSiteSettings";
import { getHeroImages } from "./getHeroImages";
import type { SanityService } from "@/sanity/types";

export const getSolutionsPage = cache(async () => {
  const [siteSettings, heroImages, services] = await Promise.all([
    getSiteSettings(),
    getHeroImages(),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
  ]);
  return { siteSettings, heroImages, services };
});