import { sanityClient } from "@/sanity/client";
import { SERVICES_QUERY } from "@/sanity/queries";
import type { SanityService } from "@/sanity/types";

export async function getServices(): Promise<SanityService[]> {
  return await sanityClient.fetch<SanityService[]>(SERVICES_QUERY);
}