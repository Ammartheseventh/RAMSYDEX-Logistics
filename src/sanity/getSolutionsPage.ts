import { sanityClient } from "@/sanity/client";
import { SOLUTIONS_PAGE_QUERY } from "@/sanity/queries";
import type { SolutionsPage } from "@/sanity/types";

export async function getSolutionsPage(): Promise<SolutionsPage> {
  return await sanityClient.fetch<SolutionsPage>(SOLUTIONS_PAGE_QUERY);
}