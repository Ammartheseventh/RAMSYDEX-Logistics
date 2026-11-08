import Link from "next/link";
import Image from "next/image";
import type { PageCopy } from "@/sanity/types";

export default function Hero({ copy }: { copy: PageCopy }) {
  return (
    <section className="relative flex items-center overflow-hidden bg-taupe-grey-900 text-parchment-50">
      
      {/* Background Image Container */}
      {copy.heroImageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={copy.heroImageUrl}
            alt="RAMSYDEX Logistics Operations"
            fill
            className="object-cover object-[75%_25%]"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-[rgba(19,17,17,0.85)] via-[rgba(19,17,17,0.6)] to-[rgba(19,17,17,0.45)]"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative mx-auto w-full max-w-300 px-[clamp(20px,5vw,64px)] py-20 md:py-28">
        <h1 className="animate-fade-in-up max-w-195 whitespace-pre-line font-display text-[clamp(38px,5.6vw,72px)] leading-[1.15] tracking-tight">
          {copy.heroHeadline}
        </h1>

        <div className="animate-fade-in-up delay-150ms mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
          <Link
            href="/contact"
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-brick-red-500 px-8 text-lg font-semibold text-parchment-50 transition-colors hover:bg-brick-red-600"
          >
            {copy.heroCtaPrimary}
          </Link>
          <Link
            href="/solutions"
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-parchment-300 px-8 text-lg font-semibold text-parchment-50 transition hover:bg-parchment-100 hover:text-taupe-grey-950"
          >
            {copy.heroCtaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}