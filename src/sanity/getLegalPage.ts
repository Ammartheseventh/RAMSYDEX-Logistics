import { sanityClient } from "@/sanity/client";
import { LEGAL_PAGE_QUERY } from "@/sanity/queries";
import type { LegalPage } from "@/sanity/types";

export async function getLegalPage(slug: string): Promise<LegalPage | null> {
  return await sanityClient.fetch<LegalPage | null>(LEGAL_PAGE_QUERY, { slug });
}