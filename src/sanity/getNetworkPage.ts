import { cache } from "react";
import { getSiteSettings } from "./getSiteSettings";
import { getHeroImages } from "./getHeroImages";
import { getMapData } from "./getMapData";

export const getNetworkPage = cache(async () => {
  const [siteSettings, heroImages, mapData] = await Promise.all([
    getSiteSettings(),
    getHeroImages(),
    getMapData(),
  ]);
  return { siteSettings, heroImages, mapData };
});