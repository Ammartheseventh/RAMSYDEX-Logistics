"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";

type HeaderProps = {
  logoUrl: string | null;
  logoIconUrl: string | null;
  phone: string;
};

export default function Header({ logoUrl, logoIconUrl, phone }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const mobileLogo = logoIconUrl || logoUrl;
  const cleanPhone = phone.replace(/\s/g, "");

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-parchment-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Desktop Logo */}
        <Link href="/" className="hidden shrink-0 items-center lg:flex">
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="RAMSYDEX GLOBAL LOGISTICS Logo"
              width={200}
              height={48}
              className="h-12 w-auto object-contain mix-blend-multiply"
              priority
            />
          )}
        </Link>

        {/* Mobile Logo */}
        <Link href="/" className="flex shrink-0 items-center lg:hidden">
          {mobileLogo && (
            <Image
              src={mobileLogo}
              alt="RAMSYDEX GLOBAL LOGISTICS Logo"
              width={48}
              height={48}
              className="h-10 w-auto object-contain mix-blend-multiply"
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap border-b-2 py-2 text-[15px] font-semibold transition-colors ${
                isActive(link.href)
                  ? "border-brick-red-500 text-taupe-grey-950"
                  : "border-transparent text-taupe-grey-600 hover:text-taupe-grey-950"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Phone CTA */}
        <a
          href={`tel:${cleanPhone}`}
          className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-brick-red-500 px-5 py-2.5 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600 lg:inline-flex"
        >
          <PhoneIcon />
          {phone}
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="rounded-md border border-taupe-grey-200 p-2 text-taupe-grey-700 transition hover:bg-parchment-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-parchment-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`whitespace-nowrap rounded px-3 py-2.5 text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-parchment-100 text-taupe-grey-950"
                    : "text-taupe-grey-700 hover:bg-parchment-100 hover:text-taupe-grey-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href={`tel:${cleanPhone}`}
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brick-red-500 px-4 py-2.5 text-center text-base font-semibold text-parchment-50 hover:bg-brick-red-600"
            >
              <PhoneIcon />
              Call {phone}
            </a>
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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}