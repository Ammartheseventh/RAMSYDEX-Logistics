"use client";

import { useState } from "react";
import type { InquiryTopic } from "@/sanity/types";

type Props = {
  inquiryTopics: InquiryTopic[];
  responsePromise: string;
  whatsapp: string;
  initialService?: string | null;
};

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // PLACEHOLDER

export default function QuoteForm({
  inquiryTopics,
  responsePromise,
  whatsapp,
  initialService,
}: Props) {
  const [activeTopic, setActiveTopic] = useState(() => {
    if (initialService) {
      const match = inquiryTopics.find((t) => t.service === initialService);
      if (match) return match.label;
    }
    
    const general = inquiryTopics.find((t) => t.service === "general");
    if (general) return general.label;

    return inquiryTopics[0]?.label ?? "";
  });
  
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const activeService =
    inquiryTopics.find((t) => t.label === activeTopic)?.service ?? "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        
        const general = inquiryTopics.find((t) => t.service === "general");
        setActiveTopic(general ? general.label : (inquiryTopics[0]?.label ?? ""));
      } else {
        setErrorMessage(
          data?.message ||
            "Form submission is not yet connected. Please contact us by phone or WhatsApp for now."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-tuscan-sun-200 bg-tuscan-sun-50 p-6">
        <h3 className="text-lg font-semibold text-tuscan-sun-900">
          Thank you — your enquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-tuscan-sun-800">{responsePromise}</p>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1faa52]"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 min-w-0">
      <div className="min-w-0">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
          What can we help with?
        </p>
        
        {/* Relative wrapper for the fade effect */}
        <div className="relative">
          <div className="flex w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {inquiryTopics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                onClick={() => setActiveTopic(topic.label)}
                className={`shrink-0 snap-start rounded-full border px-6 py-3 text-base font-semibold transition sm:px-5 sm:py-2 sm:text-sm ${
                  activeTopic === topic.label
                    ? "border-brick-red-500 bg-brick-red-500 text-parchment-50"
                    : "border-parchment-300 bg-parchment-50 text-taupe-grey-700 hover:border-taupe-grey-400"
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
          
          {/* Gradient fade indicator for mobile scrolling */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-parchment-100 to-transparent sm:hidden" />
        </div>
      </div>

      <input type="hidden" name="service" value={activeService} />

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
        >
          Your name <span className="text-brick-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
        >
          Company name <span className="text-brick-red-500">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      <div className="grid min-w-0 gap-8 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
          >
            Phone <span className="text-brick-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
        <div className="min-w-0">
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
          >
            Email <span className="text-brick-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
      </div>

      <div className="grid min-w-0 gap-8 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="origin"
            className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
          >
            Origin
          </label>
          <input
            id="origin"
            name="origin"
            type="text"
            placeholder="e.g., Port Klang"
            className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
        <div className="min-w-0">
          <label
            htmlFor="destination"
            className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
          >
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            placeholder="e.g., Singapore"
            className="mt-2 block w-full max-w-full border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cargo"
          className="block text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500"
        >
          Cargo details / pallet count
        </label>
        <textarea
          id="cargo"
          name="cargo"
          rows={3}
          placeholder="e.g., 10 pallets, 2000kg, electronics"
          className="mt-2 block w-full max-w-full resize-none border-0 border-b-2 border-parchment-300 bg-transparent px-0 py-2 text-lg text-taupe-grey-950 placeholder:text-taupe-grey-300 focus:border-brick-red-500 focus:outline-none focus:ring-0 transition-colors"
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <div className="relative flex items-center mt-0.5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="peer h-5 w-5 shrink-0 appearance-none rounded border-2 border-taupe-grey-300 bg-parchment-50 checked:border-brick-red-500 checked:bg-brick-red-500 focus:outline-none focus:ring-2 focus:ring-brick-red-500 focus:ring-offset-2 transition-colors cursor-pointer"
          />
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-parchment-50 opacity-0 peer-checked:opacity-100 transition-opacity"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <label htmlFor="consent" className="text-sm text-taupe-grey-700 leading-tight pt-0.5">
          I agree to be contacted about my enquiry. See{" "}
          <a
            href="/privacy"
            className="font-medium text-taupe-grey-950 underline hover:text-brick-red-500"
          >
            Privacy Policy
          </a>
          . <span className="text-brick-red-500">*</span>
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-md border border-brick-red-200 bg-brick-red-50 p-3 text-sm text-brick-red-800">
          {errorMessage}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-brick-red-500 px-6 py-4 text-base font-bold text-parchment-50 transition hover:bg-brick-red-600 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Enquiry"}
        </button>
        <p className="mt-3 text-xs text-taupe-grey-500">
          Fields marked with <span className="text-brick-red-500 font-bold">*</span> are required.
        </p>
      </div>
    </form>
  );
}