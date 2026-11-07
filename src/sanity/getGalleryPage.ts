import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { PAGE_COPY_QUERY, GALLERY_IMAGES_QUERY } from "@/sanity/queries";
import type { PageCopy, GalleryImage } from "@/sanity/types";

export const getGalleryPage = cache(async () => {
  const [pageCopy, images] = await Promise.all([
    sanityClient.fetch<PageCopy>(PAGE_COPY_QUERY),
    sanityClient.fetch<GalleryImage[]>(GALLERY_IMAGES_QUERY),
  ]);
  return { pageCopy, images };
});