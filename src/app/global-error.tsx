"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-parchment-50 font-sans">
        <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-normal tracking-tight text-taupe-grey-950">
            Something went wrong
          </h1>
          <p className="mt-4 max-w-md text-base text-taupe-grey-600">
            The site couldn&apos;t load. Please try again in a moment.
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-taupe-grey-400">
              Reference: {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            className="mt-8 rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  );
}