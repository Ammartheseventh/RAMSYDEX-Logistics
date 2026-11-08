import Image from "next/image";
import {
  HeroBaseBg,
  ContactHeroFg,
  GalleryHeroFg,
  NetworkHeroFg,
  SolutionsHeroFg,
} from "./HeroBackgrounds";

type Props = {
  imageUrl: string | null;
  heading: string;
  subheading?: string | null;
  note?: string | null;
  variant?: "contact" | "gallery" | "network" | "solutions" | "default";
};

export default function PageHero({ 
  imageUrl, 
  heading, 
  subheading,
  note, 
  variant = "default" 
}: Props) {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-taupe-grey-900 text-parchment-50">
      
      {/* 1. Full-bleed Background Layer */}
      <div className="absolute inset-0">
        {imageUrl ? (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          variant !== "default" && <HeroBaseBg />
        )}
      </div>

      {/* 2. Foreground Layer (Constrained to max-w-300 so it stops moving right) */}
      {!imageUrl && variant !== "default" && (
        <div className="absolute inset-0 mx-auto w-full max-w-300">
          {variant === "contact" && <ContactHeroFg />}
          {variant === "gallery" && <GalleryHeroFg />}
          {variant === "network" && <NetworkHeroFg />}
          {variant === "solutions" && <SolutionsHeroFg />}
        </div>
      )}

      {/* 3. Gradient Overlay (Ensures text is readable) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[rgba(19,17,17,0.85)] via-[rgba(19,17,17,0.6)] to-transparent pointer-events-none"
      />

      {/* 4. Text Content */}
      <div className="relative z-10 mx-auto w-full max-w-300 px-[clamp(20px,5vw,64px)] py-20 md:py-28">
        <h1 className="animate-fade-in-up max-w-225 whitespace-pre-line font-display text-[clamp(38px,5.6vw,72px)] leading-[1.15] tracking-tight">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-7 max-w-140 text-[clamp(18px,1.6vw,22px)] leading-[1.55] text-taupe-grey-100">
            {subheading}
          </p>
        )}
        {note && (
          <p className="mt-4 text-sm text-parchment-300">{note}</p>
        )}
      </div>
    </section>
  );
}