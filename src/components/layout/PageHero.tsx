import Image from "next/image";
import {
  ContactHeroFg,
  GalleryHeroFg,
  NetworkHeroFg,
  SolutionsHeroFg,
} from "./HeroBackgrounds";

type Props = {
  imageUrl: string | null;
  heading: string;
  note?: string | null;
  variant?: "contact" | "gallery" | "network" | "solutions" | "default";
};

export default function PageHero({ 
  imageUrl, 
  heading, 
  note, 
  variant = "default" 
}: Props) {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-taupe-grey-900 text-parchment-50">
      
      {imageUrl ? (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-[rgba(19,17,17,0.85)] via-[rgba(19,17,17,0.6)] to-[rgba(19,17,17,0.45)]"
          />
        </div>
      ) : (
        <div className="absolute inset-0 mx-auto w-full max-w-300">
          {variant === "contact" && <ContactHeroFg />}
          {variant === "gallery" && <GalleryHeroFg />}
          {variant === "network" && <NetworkHeroFg />}
          {variant === "solutions" && <SolutionsHeroFg />}
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[rgba(19,17,17,0.85)] via-[rgba(19,17,17,0.6)] to-transparent pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-300 px-[clamp(20px,5vw,64px)] py-12 md:py-20">
        <h1 className="animate-fade-in-up max-w-250 whitespace-pre-line font-display text-[clamp(30px,4vw,52px)] leading-[1.15] tracking-tight">
          {heading}
        </h1>
        {note && (
          <p className="mt-4 text-sm text-parchment-300">{note}</p>
        )}
      </div>
    </section>
  );
}