import { sanityClient } from "@/sanity/client";
import { NETWORK_PAGE_QUERY } from "@/sanity/queries";
import type { NetworkPage } from "@/sanity/types";

export async function getNetworkPage(): Promise<NetworkPage> {
  return await sanityClient.fetch<NetworkPage>(NETWORK_PAGE_QUERY);
}