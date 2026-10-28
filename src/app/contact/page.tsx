import type { Metadata } from "next";
import { getContactPage } from "@/sanity/getContactPage";
import { getSiteSettings } from "@/sanity/getSiteSettings";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Quote — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Request a quote from our Central Malaysia desk. Freight, customs clearance, QC inspection, supply chain, and last-mile delivery.",
};

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  return (
    <>
      <section className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-bold text-taupe-grey-950 md:text-4xl">
            {page.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-taupe-grey-600">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:py-16">
          <div className="md:col-span-2">
            <QuoteForm
              inquiryTopics={page.inquiryTopics}
              responsePromise={settings.responsePromise}
              whatsapp={settings.whatsapp}
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-parchment-200 bg-parchment-100 p-6">
              <h2 className="text-lg font-semibold text-taupe-grey-950">
                {page.hubHeading}
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-taupe-grey-950">Address</dt>
                  <dd className="text-taupe-grey-600">{settings.address}</dd>
                </div>
                <div>
                  <dt className="font-medium text-taupe-grey-950">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${settings.phone.replace(/\s/g, "")}`}
                      className="text-taupe-grey-600 hover:text-brick-red-500"
                    >
                      {settings.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-taupe-grey-950">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-taupe-grey-600 hover:text-brick-red-500"
                    >
                      {settings.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-taupe-grey-950">Hours</dt>
                  <dd className="text-taupe-grey-600">{settings.hours}</dd>
                </div>
              </dl>

              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-md bg-[#25D366] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#1faa52]"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="rounded-lg border border-tuscan-sun-200 bg-tuscan-sun-50 p-4">
              <p className="text-sm text-tuscan-sun-900">
                {settings.responsePromise}
              </p>
            </div>

            <div className="aspect-square w-full overflow-hidden rounded-lg border border-parchment-200 bg-parchment-100">
              <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-taupe-grey-500">
                {page.mapNote}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}