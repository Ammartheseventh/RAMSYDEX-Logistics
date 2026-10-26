import { sanityClient } from "@/sanity/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import type { HomePage } from "@/sanity/types";

export async function getHomePage(): Promise<HomePage> {
  return await sanityClient.fetch<HomePage>(HOME_PAGE_QUERY);
}