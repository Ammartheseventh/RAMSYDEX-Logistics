import Link from "next/link";
import { navLinks } from "@/data/nav";
import { getSiteSettings } from "@/sanity/getSiteSettings";

export default async function Footer() {
  const settings = await getSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-lg font-bold text-gray-900">
            {settings.companyShortName}
          </p>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {settings.tagline}
          </p>
          <p className="mt-4 text-sm text-gray-600">{settings.footerSummary}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Navigate</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>{settings.address}</li>
            <li>
              <a href={`mailto:${settings.email}`} className="hover:text-gray-900">
                {settings.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="hover:text-gray-900"
              >
                {settings.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${settings.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                WhatsApp
              </a>
            </li>
            <li>{settings.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/privacy" className="hover:text-gray-900">
                {settings.privacyLabel}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-900">
                {settings.termsLabel}
              </Link>
            </li>
            <li className="pt-2 text-xs text-gray-500">
              SSM Registration: {settings.ssmNumber}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500">
          © {year} {settings.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}