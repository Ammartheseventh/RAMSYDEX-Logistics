import { sanityClient } from "@/sanity/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { SiteSettings } from "@/sanity/types";

export async function getSiteSettings(): Promise<SiteSettings> {
  return await sanityClient.fetch<SiteSettings>(SITE_SETTINGS_QUERY);
}