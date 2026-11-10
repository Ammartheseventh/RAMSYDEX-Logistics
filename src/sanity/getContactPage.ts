import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { SERVICES_QUERY } from "@/sanity/queries";
import { getSiteSettings } from "./getSiteSettings";
import { getHeroImages } from "./getHeroImages";
import type { SanityService, InquiryTopic } from "@/sanity/types";

export const getContactPage = cache(async () => {
  const [siteSettings, heroImages, services] = await Promise.all([
    getSiteSettings(),
    getHeroImages(),
    sanityClient.fetch<SanityService[]>(SERVICES_QUERY),
  ]);

  const inquiryTopics: InquiryTopic[] = (services || []).map((service) => ({
    label: service.title,
    service: service.slug,
  }));

  inquiryTopics.push({ label: "General Inquiry", service: "general" });

  return { siteSettings, heroImages, inquiryTopics };
});