import { sanityClient } from "@/sanity/client";
import { GALLERY_PAGE_QUERY } from "@/sanity/queries";
import type { GalleryPage } from "@/sanity/types";

export async function getGalleryPage(): Promise<GalleryPage> {
  return await sanityClient.fetch<GalleryPage>(GALLERY_PAGE_QUERY);
}