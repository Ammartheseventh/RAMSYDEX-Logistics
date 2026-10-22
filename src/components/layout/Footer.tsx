import Link from "next/link";
import { navLinks } from "@/data/nav";
import { contact } from "@/data/contact";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        {/* Summary */}
        <div className="md:col-span-1">
          <p className="text-lg font-bold text-gray-900">RAMSYDEX</p>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Global Logistics
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Freight, customs clearance, QC inspection, and last-mile delivery
            from Central Malaysia.
          </p>
        </div>

        {/* Navigation */}
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

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>{contact.address}</li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-gray-900">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-gray-900"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                WhatsApp
              </a>
            </li>
            <li>{contact.hours}</li>
          </ul>
        </div>

        {/* Legal / registration */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-900">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="pt-2 text-xs text-gray-500">
              SSM Registration: [PLACEHOLDER]
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500">
          © {year} RAMSYDEX GLOBAL LOGISTICS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}