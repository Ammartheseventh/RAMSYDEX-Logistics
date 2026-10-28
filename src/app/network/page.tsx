import type { Metadata } from "next";
import Link from "next/link";
import { getNetworkPage } from "@/sanity/getNetworkPage";
import WorldMap from "@/components/sections/WorldMap";
import { mapPins } from "@/data/networkData";

export const metadata: Metadata = {
  title: "Global Network — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Trade lanes, customs coverage, and corridor connectivity from our Central Malaysia hub.",
};

export default async function NetworkPage() {
  const page = await getNetworkPage();

  return (
    <>
      {/* Intro */}
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl text-taupe-grey-950 md:text-4xl">
            Global Network &amp; Focus Countries
          </h1>
          <p className="mt-3 max-w-3xl text-base text-taupe-grey-600">
            {page.intro}
          </p>
        </div>
      </section>

      {/* World map */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
          <WorldMap pins={mapPins} />
          <p className="mt-3 text-xs text-taupe-grey-500">{page.mapNote}</p>
        </div>
      </section>

      {/* Trade corridors */}
      <section className="border-t border-parchment-200 bg-parchment-100">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-2xl text-taupe-grey-950 md:text-3xl">
              Key Trade Corridors
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              The lanes we operate most frequently out of Central Malaysia.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.tradeCorridors.map((corridor) => (
              <div
                key={corridor.title}
                className="rounded-lg border border-parchment-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-taupe-grey-950">
                  {corridor.title}
                </h3>
                <p className="mt-2 text-sm text-taupe-grey-600">
                  {corridor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs coverage */}
      <section className="border-t border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-2xl text-taupe-grey-950 md:text-3xl">
              {page.customsHeading}
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              {page.customsBody}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {page.customsRegions.map((region) => (
                <li
                  key={region}
                  className="rounded-full border border-parchment-300 bg-parchment-100 px-4 py-1.5 text-sm font-medium text-taupe-grey-700"
                >
                  {region}
                </li>
              ))}
            </ul>

            {page.customsNote && (
              <p className="mt-4 text-xs text-taupe-grey-500">
                {page.customsNote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h2 className="text-2xl md:text-3xl">{page.ctaHeading}</h2>
          <p className="mt-3 text-base text-parchment-300">{page.ctaBody}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}