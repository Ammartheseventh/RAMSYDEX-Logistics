import Link from "next/link";
import Image from "next/image"; // <--- Import Image
import { navLinks } from "@/data/nav";
import { getSiteSettings } from "@/sanity/getSiteSettings";

export default async function Footer() {
  const settings = await getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-taupe-grey-800 text-parchment-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.jpeg"
              alt={`${settings.companyShortName} Logo`}
              width={64}
              height={64}
              className="h-14 w-auto rounded bg-white object-contain p-1"
            />
          </Link>
          <p className="mt-4 text-xs uppercase tracking-wide text-tuscan-sun-400">
            {settings.tagline}
          </p>
          <p className="mt-2 text-sm text-parchment-300">
            {settings.footerSummary}
          </p>
        </div>

        {/* ... The rest of the columns remain exactly the same ... */}
        <div>
          <h3 className="text-sm font-semibold text-parchment-50">Navigate</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-parchment-300 transition hover:text-tuscan-sun-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-parchment-50">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-parchment-300">
            <li>{settings.address}</li>
            <li>
              <a
                href={`mailto:${settings.email}`}
                className="transition hover:text-tuscan-sun-400"
              >
                {settings.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="transition hover:text-tuscan-sun-400"
              >
                {settings.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-tuscan-sun-400"
              >
                WhatsApp
              </a>
            </li>
            <li>{settings.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-parchment-50">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-parchment-300">
            <li>
              <Link
                href="/privacy"
                className="transition hover:text-tuscan-sun-400"
              >
                {settings.privacyLabel}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="transition hover:text-tuscan-sun-400"
              >
                {settings.termsLabel}
              </Link>
            </li>
            <li className="pt-2 text-xs text-parchment-400">
              SSM Registration: {settings.ssmNumber}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-taupe-grey-700">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-parchment-400">
          © {year} {settings.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}