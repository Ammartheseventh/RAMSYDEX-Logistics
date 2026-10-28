"use client";

import { useState } from "react";
import type { InquiryTopic } from "@/sanity/types";

type Props = {
  inquiryTopics: InquiryTopic[];
  responsePromise: string;
  whatsapp: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // PLACEHOLDER

export default function QuoteForm({
  inquiryTopics,
  responsePromise,
  whatsapp,
}: Props) {
  const [activeTopic, setActiveTopic] = useState(inquiryTopics[0]?.slug ?? "");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const activeService =
    inquiryTopics.find((t) => t.slug === activeTopic)?.service ?? "";

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
        setActiveTopic(inquiryTopics[0]?.slug ?? "");
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium text-taupe-grey-950">
          What can we help with?
        </p>
        <div className="flex flex-wrap gap-2">
          {inquiryTopics.map((topic) => (
            <button
              key={topic.slug}
              type="button"
              onClick={() => setActiveTopic(topic.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeTopic === topic.slug
                  ? "border-brick-red-500 bg-brick-red-500 text-parchment-50"
                  : "border-taupe-grey-200 bg-white text-taupe-grey-700 hover:border-taupe-grey-400"
              }`}
            >
              {topic.label}
            </button>
          ))}
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
          className="block text-sm font-medium text-taupe-grey-950"
        >
          Your name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-taupe-grey-950"
        >
          Company name *
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-taupe-grey-950"
          >
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-taupe-grey-950"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="origin"
            className="block text-sm font-medium text-taupe-grey-950"
          >
            Origin
          </label>
          <input
            id="origin"
            name="origin"
            type="text"
            className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-taupe-grey-950"
          >
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cargo"
          className="block text-sm font-medium text-taupe-grey-950"
        >
          Cargo details / pallet count
        </label>
        <textarea
          id="cargo"
          name="cargo"
          rows={4}
          className="mt-1 block w-full rounded-md border border-taupe-grey-200 bg-white px-3 py-2 text-sm text-taupe-grey-950 focus:border-brick-red-500 focus:outline-none focus:ring-1 focus:ring-brick-red-500"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-taupe-grey-200 text-brick-red-500 focus:ring-brick-red-500"
        />
        <label htmlFor="consent" className="text-sm text-taupe-grey-700">
          I agree to be contacted about my enquiry. See{" "}
          <a
            href="/privacy"
            className="font-medium text-taupe-grey-950 underline hover:text-brick-red-500"
          >
            Privacy Policy
          </a>
          . *
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-md border border-brick-red-200 bg-brick-red-50 p-3 text-sm text-brick-red-800">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}