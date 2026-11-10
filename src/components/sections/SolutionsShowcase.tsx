"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import type { SanityService } from "@/sanity/types";

export default function SolutionsShowcase({ services }: { services: SanityService[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  if (!active) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-taupe-grey-500">
        Services coming soon.
      </div>
    );
  }

  return (
    <section className="border-t border-parchment-200 bg-parchment-50">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 lg:py-20">
        
        {/* Mobile Scrollable Pills */}
        <div className="relative mb-8 min-w-0 lg:hidden">
          <div className="flex w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => (
              <button
                key={service._id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 snap-start rounded-full border px-6 py-3 text-base font-semibold transition ${
                  i === activeIndex
                    ? "border-brick-red-500 bg-brick-red-500 text-parchment-50"
                    : "border-parchment-300 bg-parchment-50 text-taupe-grey-700 hover:border-taupe-grey-400"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          {/* Gradient Fade Indicator */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-parchment-50 to-transparent" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                Services
              </p>
              <nav className="flex flex-col gap-1">
                {services.map((service, i) => (
                  <button
                    key={service._id}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-md px-3 py-2 text-left text-sm font-semibold transition ${
                      i === activeIndex
                        ? "bg-parchment-200 text-taupe-grey-950"
                        : "text-taupe-grey-600 hover:bg-parchment-100 hover:text-taupe-grey-950"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-parchment-200">
                  {active.image ? (
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-taupe-grey-500">
                      Image coming soon
                    </div>
                  )}
                </div>

                <h2 className="mt-6 text-2xl text-taupe-grey-950 md:text-3xl">
                  {active.title}
                </h2>
                <p className="mt-3 text-base text-taupe-grey-600">
                  {active.detailIntro ?? active.description}
                </p>

                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                      Cargo types
                    </dt>
                    <dd className="mt-1 text-sm text-taupe-grey-700">
                      {active.cargoTypes ?? "[PLACEHOLDER]"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                      Vehicle types
                    </dt>
                    <dd className="mt-1 text-sm text-taupe-grey-700">
                      {active.vehicleTypes ?? "[PLACEHOLDER]"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                      Operating areas
                    </dt>
                    <dd className="mt-1 text-sm text-taupe-grey-700">
                      {active.operatingAreas ?? "[PLACEHOLDER]"}
                    </dd>
                  </div>
                </dl>

                {active.bullets && active.bullets.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {active.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-taupe-grey-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-red-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/contact?service=${active.slug}`}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
                >
                  Request a quote &rarr;
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}