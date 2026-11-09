"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "@/sanity/types";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* CSS Multi-column layout for masonry effect */}
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((image, i) => (
          <button
            key={image.src || i}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-4 block w-full overflow-hidden rounded-lg bg-parchment-200 break-inside-avoid"
            aria-label={`Open image: ${image.caption || image.alt}`}
          >
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 800}
                height={image.height || 600}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
                priority={i < 4}
              />
            ) : (
              <div className="flex aspect-square h-full w-full items-center justify-center text-xs text-taupe-grey-500">
                No image
              </div>
            )}
            
            <span className="absolute inset-x-0 bottom-0 bg-black/50 px-2 py-1 text-left text-xs text-parchment-50 opacity-0 transition group-hover:opacity-100">
              {image.caption}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          title: img.caption,
        }))}
      />
    </>
  );
}