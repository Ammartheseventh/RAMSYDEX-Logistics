import { sanityClient } from "@/sanity/client";
import { MAP_DATA_QUERY } from "@/sanity/queries";
import type { MapData } from "@/sanity/types";

export async function getMapData(): Promise<MapData> {
  return await sanityClient.fetch<MapData>(MAP_DATA_QUERY);
}