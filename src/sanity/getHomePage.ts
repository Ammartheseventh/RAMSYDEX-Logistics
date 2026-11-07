import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, SERVICES_QUERY, TRUST_STATS_QUERY, WORKFLOW_STEPS_QUERY } from "@/sanity/queries";
import type { PageCopy, SanityService, TrustStat, WorkflowStep } from "@/sanity/types";

export const getHomePage = cache(async () => {
  const [pageCopy, services, trustStats, workflowSteps] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
    sanityClient.fetch<TrustStat[]>(TRUST_STATS_QUERY),
    sanityClient.fetch<WorkflowStep[]>(WORKFLOW_STEPS_QUERY),
  ]);
  return { pageCopy, services, trustStats, workflowSteps };
});