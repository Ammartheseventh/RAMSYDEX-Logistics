import type { Metadata } from "next";
import { getGalleryPage } from "@/sanity/getGalleryPage";
import ResponsiveDriftWall from "@/components/ui/ResponsiveDriftWall";

export const metadata: Metadata = {
  title: "Gallery — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Photos from our Central Malaysia hub, cargo operations, and last-mile delivery.",
};

export default async function GalleryPage() {
  const { images } = await getGalleryPage();

  const items = images.map((img) => {
    // Sanity CDN optimization to make downloads instant
    const optimizedUrl = img.src.includes('?') 
      ? `${img.src}&w=600&auto=format&q=80` 
      : `${img.src}?w=600&auto=format&q=80`;

    return {
      image: optimizedUrl,
      lqip: img.lqip,
      title: img.caption || img.alt,
      href: undefined,
    };
  });

  return (
    <>
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl text-taupe-grey-950 md:text-4xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-base text-taupe-grey-600">
            A look at our operations — cargo handling, QC inspection, hub sorting, and delivery.
          </p>
        </div>
      </section>

      <section className="bg-parchment-50">
        <div className="mx-auto max-w-7xl ">
          <div className="relative h-125 md:h-175 lg:h-200 w-full overflow-hidden">
            <ResponsiveDriftWall items={items} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-parchment-50/40 to-transparent z-10" />
          </div>
        </div>
      </section>
    </>
  );
}