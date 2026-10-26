import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { getLegalPage } from "@/sanity/getLegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — RAMSYDEX GLOBAL LOGISTICS",
  description: "Website terms of use for RAMSYDEX GLOBAL LOGISTICS.",
};

export default async function TermsPage() {
  const page = await getLegalPage("terms");
  if (!page) notFound();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          {page.title}
        </h1>
        {page.note && (
          <p className="mt-2 text-xs text-gray-500">{page.note}</p>
        )}
        <div className="prose prose-sm mt-8 max-w-none text-gray-700">
          <PortableText value={page.body as never} />
        </div>
      </div>
    </section>
  );
}