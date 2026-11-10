import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { GALLERY_IMAGES_QUERY } from "@/sanity/queries";
import { getSiteSettings } from "./getSiteSettings";
import { getHeroImages } from "./getHeroImages";
import type { GalleryImage } from "@/sanity/types";

export const getGalleryPage = cache(async () => {
  const [siteSettings, heroImages, images] = await Promise.all([
    getSiteSettings(),
    getHeroImages(),
    sanityClient.fetch<GalleryImage[]>(GALLERY_IMAGES_QUERY),
  ]);
  return { siteSettings, heroImages, images };
});