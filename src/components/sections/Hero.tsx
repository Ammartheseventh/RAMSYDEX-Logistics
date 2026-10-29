import Link from "next/link";
import Image from "next/image";
import type { HomePage } from "@/sanity/types";

export default function Hero({ page }: { page: HomePage }) {
  return (
    <section className="relative bg-taupe-grey-950 text-parchment-50">
      {/* Background Image Container */}
      {page.heroImageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={page.heroImageUrl}
            alt="RAMSYDEX Logistics Operations"
            fill
            className="object-cover object-[75%_25%]"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-taupe-grey-950 via-taupe-grey-950/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-taupe-grey-950/50 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-4 py-20 md:min-h-[60vh] md:py-28">
        
        <h1 className="animate-fade-in-up font-display max-w-5xl whitespace-pre-line text-4xl leading-[1.05] sm:text-6xl">
          {page.heroHeadline}
        </h1>

        <div className="animate-fade-in-up delay-150ms mt-10 flex flex-col gap-4 sm:flex-row md:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600 sm:text-base"
          >
            {page.heroCtaPrimary}
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full border border-parchment-300 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-parchment-100 hover:text-taupe-grey-950 sm:text-base"
          >
            {page.heroCtaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}