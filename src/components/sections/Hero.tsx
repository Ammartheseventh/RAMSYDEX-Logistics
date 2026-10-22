import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image placeholder — replace with real logistics photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/placeholder-hero.jpg')" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:py-32">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Connecting Global Markets with Reliable Supply Chain &amp;
          Distribution Solutions from Central Malaysia
        </h1>

        <p className="mt-6 max-w-2xl text-base text-gray-200 md:text-lg">
          Freight, customs clearance, quality control inspection, and last-mile
          delivery — handled end-to-end by a team with 32 years of logistics
          experience.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Request a Quote
          </Link>
          <Link
            href="/solutions"
            className="rounded-md border border-white px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white hover:text-gray-900"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}