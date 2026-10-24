"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "@/data/gallery";

export default function GalleryGrid() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
            aria-label={`Open image: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/50 px-2 py-1 text-left text-xs text-white opacity-0 transition group-hover:opacity-100">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt, title: img.caption }))}
      />
    </>
  );
}