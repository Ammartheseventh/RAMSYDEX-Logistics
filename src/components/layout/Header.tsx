"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { contact } from "@/data/contact";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Top strip: years of experience + dispatch phone */}
      <div className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <span>32 Years of Experience</span>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="hover:underline"
          >
            Dispatch: {contact.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo placeholder */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          RAMSYDEX
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 md:inline-block"
        >
          Request a Quote
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}