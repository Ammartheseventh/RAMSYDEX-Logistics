import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, SERVICES_QUERY } from "@/sanity/queries";
import type { PageCopy, SanityService } from "@/sanity/types";

export const getSolutionsPage = cache(async () => {
  const [pageCopy, services] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
  ]);
  return { pageCopy, services };
});