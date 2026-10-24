import type { Metadata } from "next";
import NetworkMap from "@/components/sections/WorldMap";
import TradeCorridors from "@/components/sections/TradeCorridors";

export const metadata: Metadata = {
  title: "Global Network — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Trade lanes and customs coverage connected to our Central Malaysia hub. Focus countries and regions served by RAMSYDEX.",
};

export default function NetworkPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Global Network &amp; Focus Countries
          </h1>
          <p className="mt-4 max-w-3xl text-base text-gray-600">
            Trade lanes connected to Central Malaysia, with customs clearance
            experience across multiple regions. The map below highlights the
            countries and regions we currently serve.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            <span className="font-medium text-gray-700">
              [PLACEHOLDER — country list to be confirmed]
            </span>{" "}
            The highlighted countries are placeholders until the client confirms
            the real coverage list.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="rounded-lg border border-gray-200 bg-white p-4 md:p-8">
            <NetworkMap />
          </div>
        </div>
      </section>

      {/* Trade corridors */}
      <TradeCorridors />

      {/* Customs coverage */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Multi-Region Customs Coverage
            </h2>
            <p className="mt-3 text-base text-gray-600">
              We clear customs in multiple countries and regions, reducing the
              risk of port delays and duty surprises. Our Central Malaysia desk
              coordinates documentation and clearance across borders in a single
              process.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Countries and regions covered:{" "}
              <span className="font-medium text-gray-700">
                [PLACEHOLDER — to be confirmed]
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}