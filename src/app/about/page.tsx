import type { Metadata } from "next";
import Link from "next/link";
import { getAboutPage } from "@/sanity/getAboutPage";

export const metadata: Metadata = {
  title: "About Us — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "32 years of logistics experience, a Central Malaysia operational hub, and end-to-end supply chain services for importers, exporters, and manufacturers.",
};

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <>
      {/* Intro */}
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold text-taupe-grey-950 md:text-4xl">
            About RAMSYDEX GLOBAL LOGISTICS
          </h1>
          <p className="mt-3 max-w-3xl text-base text-taupe-grey-600">
            {page.intro}
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-taupe-grey-500">
                Experience
              </p>
              <h2 className="mt-2 text-3xl font-bold text-taupe-grey-950 md:text-4xl">
                {page.experienceHeadline}
              </h2>
              <p className="mt-4 text-base text-taupe-grey-600">
                {page.experienceStatement}
              </p>
              {page.experienceNote && (
                <p className="mt-3 text-xs text-taupe-grey-500">
                  {page.experienceNote}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center rounded-lg bg-taupe-grey-950 p-12 text-parchment-50">
              <div className="text-center">
                <p className="text-6xl font-bold text-tuscan-sun-400 md:text-7xl">
                  32+
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-parchment-300">
                  Years of Logistics Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-t border-parchment-200 bg-parchment-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
                Our Mission
              </h2>
              <p className="mt-3 text-base text-taupe-grey-600">
                {page.mission}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
                Our Vision
              </h2>
              <p className="mt-3 text-base text-taupe-grey-600">
                {page.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="border-t border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              Three principles that shape how we handle every shipment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.valuePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-parchment-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-taupe-grey-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-taupe-grey-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub advantage */}
      <section className="border-t border-parchment-200 bg-parchment-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
              The Central Malaysia Hub Advantage
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              Our location gives fast, direct access to regional seaports,
              airports, and major highways — reducing transit times and enabling
              tighter coordination across freight, customs, and last-mile
              delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.hubAdvantages.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-parchment-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-taupe-grey-950">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-taupe-grey-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
              Credentials &amp; Memberships
            </h2>
            <p className="mt-3 text-base text-taupe-grey-600">
              Licences, certifications and industry memberships.
            </p>
            <p className="mt-2 text-xs text-taupe-grey-500">
              [All credentials below are placeholders — client to confirm and
              supply logos]
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-center gap-3 rounded-lg border border-dashed border-parchment-300 bg-parchment-50 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-parchment-200 text-xs font-semibold text-taupe-grey-500">
                  LOGO
                </span>
                <span className="text-sm text-taupe-grey-700">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-taupe-grey-950 text-parchment-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">
            Work with a logistics partner you can trust.
          </h2>
          <p className="mt-3 text-base text-parchment-300">
            Request a quote and our Central Malaysia desk will respond within 24
            hours during business hours.
          </p>
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