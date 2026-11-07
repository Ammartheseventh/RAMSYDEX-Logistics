import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, VALUE_PILLARS_QUERY, HUB_ADVANTAGES_QUERY, CREDENTIALS_QUERY } from "@/sanity/queries";
import type { PageCopy, ValuePillar, HubAdvantage, Credential } from "@/sanity/types";

export const getAboutPage = cache(async () => {
  const [pageCopy, valuePillars, hubAdvantages, credentials] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<ValuePillar[]>(VALUE_PILLARS_QUERY),
    sanityClient.fetch<HubAdvantage[]>(HUB_ADVANTAGES_QUERY),
    sanityClient.fetch<Credential[]>(CREDENTIALS_QUERY),
  ]);
  return { pageCopy, valuePillars, hubAdvantages, credentials };
});