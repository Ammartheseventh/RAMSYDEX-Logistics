import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, SERVICES_QUERY } from "@/sanity/queries";
import type { PageCopy, SanityService, InquiryTopic } from "@/sanity/types";

export const getContactPage = cache(async () => {
  const [pageCopy, services] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
  ]);

  // Map the services directly to the form pills
  const inquiryTopics: InquiryTopic[] = (services || []).map((service) => ({
    label: service.title,    // e.g. "Freight & Transportation"
    service: service.slug,   // e.g. "freight-transportation"
  }));

  // Hardcode General Inquiry at the end
  inquiryTopics.push({
    label: "General Inquiry",
    service: "general",
  });

  return { pageCopy, inquiryTopics };
});