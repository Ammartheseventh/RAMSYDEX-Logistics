import type { Metadata } from "next";
import Link from "next/link";
import { getNetworkPage } from "@/sanity/getNetworkPage";
import { getMapData } from "@/sanity/getMapData";
import NetworkMapSection from "@/components/sections/NetworkMapSection";

export const metadata: Metadata = {
  title: "Global Network — RAMSYDEX GLOBAL LOGISTICS",
  description: "Trade lanes, customs coverage, and corridor connectivity from our Central Malaysia hub.",
};

export default async function NetworkPage() {
  const [{ pageCopy, tradeCorridors, customsRegions }, mapData] = await Promise.all([
    getNetworkPage(),
    getMapData(),
  ]);

  return (
    <>
      {/* Intro */}
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <h1 className="font-display text-4xl text-taupe-grey-950 md:text-5xl">
            Global Network &amp; Focus Countries
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-taupe-grey-600">
            {pageCopy.networkIntro}
          </p>
        </div>
      </section>

      {/* The Interactive Split-View Map */}
      <NetworkMapSection 
        countries={mapData?.countries || []} 
        mapNote={pageCopy.networkMapNote} 
      />

      {/* Trade Corridors */}
      <section className="border-t border-parchment-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
              Key Trade Corridors
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              The lanes we operate most frequently out of Central Malaysia.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tradeCorridors.map((corridor) => (
              <div
                key={corridor.title}
                className="group relative flex flex-col rounded-2xl border border-parchment-200 bg-parchment-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brick-red-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-taupe-grey-950 text-parchment-50 transition-colors group-hover:bg-brick-red-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-taupe-grey-950">
                  {corridor.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe-grey-600">
                  {corridor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs Coverage */}
      <section className="border-t border-parchment-200 bg-parchment-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
                Multi-Region Customs Coverage
              </h2>
              <p className="mt-4 text-base leading-relaxed text-taupe-grey-600">
                We have experience clearing customs across multiple international
                borders — reducing the risk of port delays and duty surprises.
              </p>
            </div>

            <div className="rounded-3xl border border-parchment-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-taupe-grey-400">
                Clearance Coverage
              </h3>
              <ul className="flex flex-wrap gap-3">
                {customsRegions.map((region) => (
                  <li
                    key={region.name}
                    className="flex items-center gap-2 rounded-full border border-parchment-200 bg-parchment-50 px-4 py-2 text-sm font-semibold text-taupe-grey-700 transition-colors hover:border-brick-red-300 hover:text-brick-red-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brick-red-500" />
                    {region.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl md:text-4xl">{pageCopy.ctaHeading}</h2>
          <p className="mt-4 text-base text-parchment-300">{pageCopy.ctaBody}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brick-red-500 px-10 py-4 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}