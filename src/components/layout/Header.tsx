"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-parchment-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo - Fixed Height, Auto Width */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.jpeg"
            alt="RAMSYDEX GLOBAL LOGISTICS Logo"
            width={200}
            height={48}
            className="h-12 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-medium text-taupe-grey-700 transition hover:text-brick-red-500 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden whitespace-nowrap rounded-full bg-brick-red-500 px-3 py-2 text-[12px] font-semibold text-parchment-50 transition hover:bg-brick-red-600 md:inline-block lg:px-4 lg:text-sm"
        >
          Request a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="rounded-md border border-taupe-grey-200 p-2 text-taupe-grey-700 transition hover:bg-parchment-100 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-parchment-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="whitespace-nowrap rounded px-2 py-2 text-sm font-medium text-taupe-grey-700 hover:bg-parchment-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 whitespace-nowrap rounded-md bg-brick-red-500 px-4 py-2 text-center text-sm font-semibold text-parchment-50 hover:bg-brick-red-600"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}