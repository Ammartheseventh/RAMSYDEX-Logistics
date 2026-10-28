import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-parchment-50 px-4 text-center">
      <h1 className="text-6xl text-taupe-grey-950">404</h1>
      <p className="mt-4 text-lg text-taupe-grey-600">
        This page could not be found.
      </p>
      <p className="mt-2 text-sm text-taupe-grey-500">
        It may have been moved, or the link may be incorrect.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
        >
          Back to Home
        </Link>
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