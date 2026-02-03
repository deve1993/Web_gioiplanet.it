import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { APP_SETTINGS } from "@/lib/mockData";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "Compravendita", href: "/compravendita" },
  { name: "Stime e Perizie", href: "/stime-perizie" },
  { name: "Gioielli Ricondizionati", href: "/gioielli-ricondizionati" },
  { name: "Assistenza Aste", href: "/aste" },
  { name: "Shop", href: "/shop" },
  { name: "Contatti", href: "/contatti" },
  { name: "Dove Siamo", href: "/dove-siamo" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt={APP_SETTINGS.siteName}
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Compravendita preziosi, stime professionali e gioielli
              ricondizionati a Modena.
            </p>
            <div className="flex gap-3">
              <a
                href={APP_SETTINGS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su YouTube"
                className="bg-slate-700 p-2.5 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={APP_SETTINGS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Facebook"
                className="bg-slate-700 p-2.5 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={APP_SETTINGS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Instagram"
                className="bg-slate-700 p-2.5 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Servizi</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Link Utili
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contatti</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{APP_SETTINGS.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <a
                    href={`tel:${APP_SETTINGS.contact.phone}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {APP_SETTINGS.contact.phone}
                  </a>
                  <span className="mx-1">/</span>
                  <a
                    href={`tel:${APP_SETTINGS.contact.mobile}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {APP_SETTINGS.contact.mobile}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${APP_SETTINGS.contact.email}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {APP_SETTINGS.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span>{APP_SETTINGS.contact.openingHours}</span>
                  <br />
                  <span className="text-xs text-slate-500">
                    Sab: {APP_SETTINGS.contact.saturdayHours}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} {APP_SETTINGS.legal.companyName}
              . Tutti i diritti riservati.
            </p>
            <p>
              P.IVA: {APP_SETTINGS.legal.vatNumber} | REA:{" "}
              {APP_SETTINGS.legal.rea}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
