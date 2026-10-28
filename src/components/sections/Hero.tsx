import Link from "next/link";
import type { HomePage } from "@/sanity/types";

export default function Hero({ page }: { page: HomePage }) {
  return (
    <section className="relative bg-taupe-grey-950 text-parchment-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={
          page.heroImageUrl
            ? { backgroundImage: `url('${page.heroImageUrl}')` }
            : undefined
        }
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:py-32">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          {page.heroHeadline}
        </h1>

        <p className="mt-6 max-w-2xl text-base text-gray-200 md:text-lg">
          {page.heroSubheading}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-brick-red-500 px-6 py-3 text-center text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            {page.heroCtaPrimary}
          </Link>
          <Link
            href="/solutions"
            className="rounded-md border border-parchment-300 px-6 py-3 text-center text-sm font-semibold text-parchment-50 hover:bg-parchment-100 hover:text-taupe-grey-950"
          >
            {page.heroCtaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}