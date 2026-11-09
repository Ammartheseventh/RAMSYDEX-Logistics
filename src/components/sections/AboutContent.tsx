"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutHeroBg } from "@/components/layout/HeroBackgrounds";
import CtaBanner from "@/components/sections/CtaBanner";

type Props = {
  heroImageUrl: string | null;
};

export default function AboutContent({ heroImageUrl }: Props) {
  const [openHub, setOpenHub] = useState<number | null>(0);

  const hubAdvantages = [
    {
      title: "Regional seaports",
      desc: "Direct highway connectivity to Port Klang and Penang Port for rapid ocean freight clearance and minimal port dwell time.",
    },
    {
      title: "International airports",
      desc: "Minutes from KLIA and Subang SkyPark, ensuring time-critical air cargo is processed and dispatched without delay.",
    },
    {
      title: "Major highways",
      desc: "Direct access to the North-South Expressway, connecting our cross-border trucking fleet seamlessly to Singapore and Thailand.",
    },
  ];

  return (
    <div className="bg-parchment-50">
      {/* TALL HERO SECTION */}
      <section className="relative flex min-h-[clamp(560px,88vh,780px)] items-center overflow-hidden bg-taupe-grey-900 text-white">
        {heroImageUrl ? (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroImageUrl}
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
          <>
            <AboutHeroBg />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-[rgba(19,17,17,0.85)] via-[rgba(19,17,17,0.6)] to-transparent pointer-events-none"
            />
          </>
        )}

        <div className="relative mx-auto w-full max-w-300 px-[clamp(20px,5vw,64px)] py-24">
          <h1 className="max-w-225 font-display text-[clamp(38px,5.6vw,72px)] leading-[1.15] tracking-tight">
            Connecting global markets, from the heart of Central Malaysia
          </h1>
          <p className="mt-7 max-w-140 text-[clamp(18px,1.6vw,22px)] leading-[1.55] text-taupe-grey-100">
            We build secure, efficient supply chains for importers, exporters and manufacturers, backed by 32 years of experience in logistics.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-parchment-50 px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]">
        <div className="mx-auto grid max-w-300 gap-14 md:grid-cols-2 md:gap-x-24">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-tuscan-sun-700">
              Our Mission
            </p>
            <p className="font-display text-[clamp(24px,2.6vw,34px)] leading-[1.3] tracking-tight">
              Connecting global markets by providing secure and efficient supply chain infrastructure.
            </p>
          </div>
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-brick-red-600">
              Our Vision
            </p>
            <p className="font-display text-[clamp(24px,2.6vw,34px)] leading-[1.3] tracking-tight">
              Supporting business growth, from logistics planning to end delivery.
            </p>
          </div>
        </div>
      </section>

      {/* EXPANDED HUB ADVANTAGE */}
      <section className="border-y border-parchment-200 bg-parchment-100 px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]">
        <div className="mx-auto flex max-w-300 flex-wrap items-start gap-x-24 gap-y-12">
          <div className="flex-1 basis-95 lg:sticky lg:top-24">
            <h2 className="font-display text-[clamp(30px,3.6vw,46px)] leading-[1.15]">
              The Central Malaysia hub advantage
            </h2>
            <p className="mt-5 max-w-120 text-xl leading-[1.55] text-taupe-grey-600">
              Our central location gives fast, direct access to the regional gateways your cargo depends on, reducing transit times and enabling tighter coordination.
            </p>
          </div>

          <div className="flex-1 basis-80">
            {hubAdvantages.map((hub, index) => {
              const isOpen = openHub === index;
              return (
                <div key={hub.title} className="border-b border-parchment-300 py-5">
                  <button
                    onClick={() => setOpenHub(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[clamp(26px,3vw,36px)] leading-none">
                      {hub.title}
                    </span>
                    <svg
                      className={`h-6 w-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-relaxed text-taupe-grey-600">
                        {hub.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PEOPLE */}
      <section className="bg-parchment-50 px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]">
        <div className="mx-auto max-w-300">
          <h2 className="max-w-160 font-display text-[clamp(30px,3.6vw,46px)] leading-[1.15]">
            The people behind the cargo
          </h2>
          <p className="mb-14 mt-5 max-w-140 text-xl leading-[1.55] text-taupe-grey-600">
            Meet the senior team who run our operations, customs and delivery desks.
          </p>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div
                  role="img"
                  aria-label="Placeholder for staff photo"
                  className="flex h-35 w-35 items-center justify-center rounded-full bg-parchment-200"
                >
                  <svg
                    aria-hidden="true"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5e523b"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                </div>
                <h3 className="mb-1.5 mt-5 text-xl font-semibold">[FULL NAME]</h3>
                <p className="text-[17px] font-medium text-tuscan-sun-700">
                  [ROLE / TITLE]
                </p>
                <p className="mt-2 text-base leading-[1.5] text-taupe-grey-600">
                  [One line on experience or years with the company]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENCES & MEMBERSHIPS */}
      <section className="border-t border-parchment-200 bg-parchment-100 px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,120px)]">
        <div className="mx-auto max-w-300">
          <h2 className="font-display text-[clamp(30px,3.6vw,46px)] leading-[1.15]">
            Licences &amp; memberships
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Customs agent licence", "FIATA / MAFFA membership", "ISO certificates", "Insurance"].map((title) => (
              <div key={title} className="border-t border-parchment-300 pt-5">
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-[17px] text-tuscan-sun-700">[TO CONFIRM]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Need a reliable logistics and customs partner? Request a quote today."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </div>
  );
}