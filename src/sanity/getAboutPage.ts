import { cache } from "react";
import { getSiteSettings } from "./getSiteSettings";
import { getHeroImages } from "./getHeroImages";

export const getAboutPage = cache(async () => {
  const [siteSettings, heroImages] = await Promise.all([
    getSiteSettings(),
    getHeroImages(),
  ]);
  return { siteSettings, heroImages };
});