"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { InquiryTopic } from "@/sanity/types";

type Props = {
  inquiryTopics: InquiryTopic[];
  responsePromise: string;
  whatsapp: string;
  initialService?: string | null;
};

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

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

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_KEY environment variable");
      setErrorMessage("Form configuration error. Please contact us directly.");
      setStatus("error");
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
            "Form submission failed. Please contact us by phone or WhatsApp for now."
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
      <div className="flex flex-col items-start py-8 md:py-12">
        
        {/* Animated Checkmark Graphic */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.1 
          }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brick-red-500 text-parchment-50 shadow-lg"
        >
          <svg 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </motion.div>

        {/* Large Typography */}
        <h3 className="font-display text-4xl leading-[1.1] tracking-tight text-taupe-grey-950 md:text-5xl">
          Enquiry Received.
        </h3>
        
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-taupe-grey-600">
          {responsePromise}
        </p>

        {/* WhatsApp Callout */}
        <div className="mt-12 w-full max-w-lg border-t border-parchment-300 pt-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
            Need a faster response?
          </p>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#1faa52]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 min-w-0">
      <div className="min-w-0">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-taupe-grey-500">
          What can we help with?
        </p>
        
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
          minLength={2}
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
          minLength={2}
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
            pattern="^\+?[0-9\s\-()]{7,20}$"
            title="Please enter a valid phone number (at least 7 digits)."
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