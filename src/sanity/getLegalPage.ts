import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { LEGAL_PAGE_QUERY, PAGE_COPY_QUERY } from "@/sanity/queries";
import type { LegalPage, PageCopy } from "@/sanity/types";

export const getLegalPage = cache(async (slug: string) => {
  const [page, pageCopy] = await Promise.all([
    sanityClient.fetch<LegalPage | null>(LEGAL_PAGE_QUERY, { slug }),
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
  ]);
  return { page, pageCopy };
});