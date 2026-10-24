import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        This page could not be found.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        It may have been moved, or the link may be incorrect.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}