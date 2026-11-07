import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { MAP_DATA_QUERY } from "@/sanity/queries";
import type { MapData } from "@/sanity/types";

export const getMapData = cache(async (): Promise<MapData> => {
  return await sanityClient.fetch<MapData>(MAP_DATA_QUERY);
});