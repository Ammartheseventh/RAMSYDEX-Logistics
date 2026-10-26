import { sanityClient } from "@/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries";
import type { AboutPage } from "@/sanity/types";

export async function getAboutPage(): Promise<AboutPage> {
  return await sanityClient.fetch<AboutPage>(ABOUT_PAGE_QUERY);
}