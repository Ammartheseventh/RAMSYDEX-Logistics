import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — RAMSYDEX GLOBAL LOGISTICS",
  description: "Photos from our Central Malaysia hub, cargo operations, and last-mile delivery.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            A look at our operations — cargo handling, QC inspection, hub sorting, and delivery.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            [All images are placeholders — client to supply real, non-AI photos]
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}