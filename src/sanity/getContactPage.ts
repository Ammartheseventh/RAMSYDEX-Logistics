import { sanityClient } from "@/sanity/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/queries";
import type { ContactPage } from "@/sanity/types";

export async function getContactPage(): Promise<ContactPage> {
  return await sanityClient.fetch<ContactPage>(CONTACT_PAGE_QUERY);
}