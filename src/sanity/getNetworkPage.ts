import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, TRADE_CORRIDORS_QUERY, CUSTOMS_REGIONS_QUERY } from "@/sanity/queries";
import type { PageCopy, TradeCorridor, CustomsRegion } from "@/sanity/types";

export const getNetworkPage = cache(async () => {
  const [pageCopy, tradeCorridors, customsRegions] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<TradeCorridor[]>(TRADE_CORRIDORS_QUERY),
    sanityClient.fetch<CustomsRegion[]>(CUSTOMS_REGIONS_QUERY),
  ]);
  return { pageCopy, tradeCorridors, customsRegions };
});