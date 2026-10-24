import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — RAMSYDEX GLOBAL LOGISTICS",
  description: "Website terms of use for RAMSYDEX GLOBAL LOGISTICS.",
};

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-xs text-gray-500">
          [PLACEHOLDER DRAFT — pending legal review. If the company has standard
          trading terms (e.g. MFAA STC), link to them here instead.]
        </p>

        <div className="prose prose-sm mt-8 max-w-none text-gray-700">
          <h2>1. Acceptance</h2>
          <p>
            By using this website, you agree to these terms. If you do not agree,
            please do not use the site.
          </p>

          <h2>2. Services</h2>
          <p>
            RAMSYDEX GLOBAL LOGISTICS provides freight, customs clearance, QC
            inspection, supply chain, last-mile delivery, and courier services.
            Service terms are confirmed in individual quotes and contracts.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All content on this site — text, images, and logos — is owned by
            RAMSYDEX GLOBAL LOGISTICS or its licensors. You may not reproduce it
            without permission.
          </p>

          <h2>4. Limitation of liability</h2>
          <p>
            [PLACEHOLDER — liability terms to be confirmed with legal counsel.]
          </p>

          <h2>5. Governing law</h2>
          <p>
            These terms are governed by the laws of Malaysia. Disputes will be
            resolved in Malaysian courts.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Your use of this site is also governed by our{" "}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}