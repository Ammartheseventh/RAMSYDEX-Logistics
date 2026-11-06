import type { Metadata } from "next";
import { getGalleryPage } from "@/sanity/getGalleryPage";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Photos from our Central Malaysia hub, cargo operations, and last-mile delivery.",
};

export default async function GalleryPage() {
  const { images } = await getGalleryPage();

  return (
    <>
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl text-taupe-grey-950 md:text-4xl">
            Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-base text-taupe-grey-600">
            A look at our operations — cargo handling, QC inspection, hub sorting, and delivery.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}