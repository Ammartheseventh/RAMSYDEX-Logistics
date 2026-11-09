import type { Metadata } from "next";
import { getGalleryPage } from "@/sanity/getGalleryPage";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Photos from our Central Malaysia hub, cargo operations, and last-mile delivery.",
};

export default async function GalleryPage() {
  const { pageCopy, images } = await getGalleryPage();

  return (
    <>
      <PageHero
        imageUrl={pageCopy.galleryHeroImageUrl}
        heading="Our Operations"
        variant="gallery"
      />

      <section className="bg-parchment-50">
        <div className="mx-auto max-w-300 px-4 py-12 md:py-16">
          {images.length === 0 ? (
            <div className="rounded-lg border border-dashed border-parchment-300 bg-parchment-100 p-12 text-center text-sm text-taupe-grey-500">
              Photos coming soon.
            </div>
          ) : (
            <GalleryGrid images={images} />
          )}
        </div>
      </section>

      <CtaBanner
        heading="Want to see our operations in person? Get in touch to schedule a visit."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}