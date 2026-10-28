import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { getLegalPage } from "@/sanity/getLegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — RAMSYDEX GLOBAL LOGISTICS",
  description:
    "How RAMSYDEX GLOBAL LOGISTICS collects, uses, and protects personal data under Malaysia's PDPA.",
};

export default async function PrivacyPage() {
  const page = await getLegalPage("privacy");
  if (!page) notFound();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl text-taupe-grey-950 md:text-4xl">
          {page.title}
        </h1>
        {page.note && (
          <p className="mt-2 text-xs text-taupe-grey-500">{page.note}</p>
        )}
        <div className="prose prose-sm mt-8 max-w-none text-taupe-grey-700">
          <PortableText value={page.body as never} />
        </div>
      </div>
    </section>
  );
}