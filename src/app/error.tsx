"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-parchment-50 px-4 text-center">
      <h1 className="font-display text-5xl text-taupe-grey-950">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-base text-taupe-grey-600">
        We couldn&apos;t load this page. Please try again. If the problem
        persists, contact us directly.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-taupe-grey-400">
          Reference: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
        >
          Try again
        </button>
        <Link
          href="/contact"
          className="rounded-md border border-taupe-grey-200 px-6 py-3 text-sm font-semibold text-taupe-grey-700 transition hover:bg-parchment-100"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}