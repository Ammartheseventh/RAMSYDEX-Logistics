import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { HERO_IMAGES_QUERY } from "@/sanity/queries";
import type { HeroImages } from "@/sanity/types";

const FALLBACK_HERO_IMAGES: HeroImages = {
  homeHeroImage: null,
  solutionsHeroImage: null,
  networkHeroImage: null,
  aboutHeroImage: null,
  contactHeroImage: null,
  galleryHeroImage: null,
  privacyHeroImage: null,
  termsHeroImage: null,
};

export const getHeroImages = cache(async (): Promise<HeroImages> => {
  try {
    const data = await sanityClient.fetch<Partial<HeroImages> | null>(
      HERO_IMAGES_QUERY
    );

    if (!data) return FALLBACK_HERO_IMAGES;

    const cleaned = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== null && v !== undefined)
    ) as Partial<HeroImages>;

    return { ...FALLBACK_HERO_IMAGES, ...cleaned };
  } catch (err) {
    console.error("Failed to fetch hero images:", err);
    return FALLBACK_HERO_IMAGES;
  }
});