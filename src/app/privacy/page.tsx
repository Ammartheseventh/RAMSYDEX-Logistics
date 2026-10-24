import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — RAMSYDEX GLOBAL LOGISTICS",
  description: "How RAMSYDEX GLOBAL LOGISTICS collects, uses, and protects personal data under Malaysia's PDPA.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs text-gray-500">
          [PLACEHOLDER DRAFT — pending legal review and client confirmation. Must be
          provided in Bahasa Malaysia and English per PDPA requirements.]
        </p>

        <div className="prose prose-sm mt-8 max-w-none text-gray-700">
          <h2>1. What we collect</h2>
          <p>
            When you submit the quote form, we collect: your name, company name,
            phone number, email address, service needed, origin and destination,
            and any cargo details you provide.
          </p>

          <h2>2. Why we collect it</h2>
          <p>
            To respond to your enquiry, prepare a quote, and coordinate logistics
            services. We do not use your data for marketing without your consent.
          </p>

          <h2>3. How long we keep it</h2>
          <p>
            [PLACEHOLDER — retention period to be confirmed. PDPA requires data
            not be kept longer than necessary.]
          </p>

          <h2>4. Who we share it with</h2>
          <p>
            [PLACEHOLDER — third parties such as customs agents, freight partners,
            or the form processing service. To be confirmed.]
          </p>

          <h2>5. Your rights</h2>
          <p>
            Under Malaysia&apos;s Personal Data Protection Act 2010, you have the right
            to access and correct your personal data. To exercise these rights,
            contact us at [PLACEHOLDER EMAIL].
          </p>

          <h2>6. Security</h2>
          <p>
            We take practical steps to protect personal data from loss, misuse,
            and unauthorised access. [PLACEHOLDER — security measures to be
            detailed.]
          </p>

          <h2>7. Contact</h2>
          <p>
            [PLACEHOLDER — company address, email, and phone for privacy enquiries.]
          </p>
        </div>
      </div>
    </section>
  );
}