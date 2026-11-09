import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, SERVICES_QUERY, CUSTOMS_REGIONS_QUERY } from "@/sanity/queries";
import type { PageCopy, SanityService, CustomsRegion } from "@/sanity/types";

export const getSolutionsPage = cache(async () => {
  const [pageCopy, services, customsRegions] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
    sanityClient.fetch<CustomsRegion[]>(CUSTOMS_REGIONS_QUERY),
  ]);
  return { pageCopy, services, customsRegions };
});