import type { Metadata } from "next";
import { getContactPage } from "@/sanity/getContactPage";
import { getSiteSettings } from "@/sanity/getSiteSettings";
import PageHero from "@/components/layout/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import CopyButton from "@/components/ui/CopyButton";

export const metadata: Metadata = {
  title: "Contact & Quote — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Request a quote from our Central Malaysia desk. Freight, customs clearance, QC inspection, supply chain, and last-mile delivery.",
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialService = params.service ?? null;

  const [{ pageCopy, inquiryTopics }, settings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  const mapQuery = settings.address?.trim() || "Kuala Lumpur, Malaysia";

  return (
    <>
      <PageHero
        imageUrl={pageCopy.contactHeroImageUrl}
        heading={pageCopy.contactHeading}
        variant="contact"
      />

      <section className="bg-parchment-100 py-20 md:py-28">
        <div className="mx-auto max-w-300 px-4">
          
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            
            <div className="min-w-0 lg:col-span-8">
              <div className="mb-12">
                <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.15] tracking-tight text-taupe-grey-950">
                  Request a Quote
                </h2>
                <p className="mt-4 text-lg text-taupe-grey-600">
                  Fill out the form below and our Central Malaysia desk will review your details.
                </p>
              </div>

              <QuoteForm
                inquiryTopics={inquiryTopics}
                responsePromise={settings.responsePromise}
                whatsapp={settings.whatsapp}
                initialService={initialService}
              />
            </div>

            <div className="flex min-w-0 flex-col lg:col-span-4">
              <div className="sticky top-24">
                
                <dl className="divide-y divide-parchment-200 border-t border-parchment-200">
                  <div className="py-6">
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
                      Address
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-taupe-grey-900">
                      {settings.address}
                    </dd>
                  </div>
                  
                  <div className="py-6">
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
                      Direct Phone
                    </dt>
                    <dd className="mt-2 flex w-full items-center justify-between gap-4 text-base font-medium text-taupe-grey-900">
                      <a
                        href={`tel:${settings.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-brick-red-500"
                      >
                        {settings.phone}
                      </a>
                      <CopyButton text={settings.phone} />
                    </dd>
                  </div>

                  <div className="py-6">
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
                      Dispatch Email
                    </dt>
                    <dd className="mt-2 flex w-full items-center justify-between gap-4 text-base font-medium text-taupe-grey-900">
                      <a
                        href={`mailto:${settings.email}`}
                        className="break-all transition-colors hover:text-brick-red-500"
                      >
                        {settings.email}
                      </a>
                      <CopyButton text={settings.email} />
                    </dd>
                  </div>

                  <div className="py-6">
                    <dt className="text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
                      Operating Hours
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-taupe-grey-900">
                      {settings.hours}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 border-l-2 border-tuscan-sun-500 pl-4">
                  <p className="text-sm font-medium leading-relaxed text-taupe-grey-800">
                    {settings.responsePromise}
                  </p>
                </div>

                {/* Centered WhatsApp Button */}
                <div className="mt-8 flex justify-center">
                  <a
                    href={`https://wa.me/${settings.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#1faa52]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-t border-parchment-200 bg-parchment-100">
        <div className="mx-auto w-full max-w-300">
          <div className="h-[400px] w-full md:h-[500px]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RAMSYDEX Central Malaysia Hub"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}