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
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={`${image.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
            aria-label={`Open image: ${image.caption}`}
          >
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                No image
              </div>
            )}
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
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          title: img.caption,
        }))}
      />
    </>
  );
}