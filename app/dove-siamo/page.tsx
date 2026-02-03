import { Hero } from "@/components/Hero";
import { APP_SETTINGS } from "@/lib/mockData";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dove Siamo | GioiPlanet",
  description:
    "Trova GioiPlanet a Modena in Via Jacopo Barozzi 102. Orari: Lun-Ven 9:30-13:00 / 15:30-19:00. Sabato su appuntamento.",
};

export default function DoveSiamo() {
  return (
    <main>
      <Hero
        title="Dove Siamo"
        subtitle="Vieni a trovarci nel nostro negozio a Modena"
        backgroundImage="/herosection.jpg"
      />

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 text-[var(--color-text)]">
              La Nostra Sede
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Indirizzo</h3>
                  <p className="text-lg text-gray-600">
                    {APP_SETTINGS.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Orari di Apertura</h3>
                  <p className="text-lg text-gray-600">
                    {APP_SETTINGS.contact.openingHours}
                  </p>
                  <p className="text-gray-500">
                    Sabato: {APP_SETTINGS.contact.saturdayHours}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Contatti</h3>
                  <p className="text-lg text-gray-600">
                    Tel:{" "}
                    <a
                      href={`tel:${APP_SETTINGS.contact.phone}`}
                      className="hover:text-[var(--color-primary)]"
                    >
                      {APP_SETTINGS.contact.phone}
                    </a>
                  </p>
                  <p className="text-lg text-gray-600">
                    Cell:{" "}
                    <a
                      href={`tel:${APP_SETTINGS.contact.mobile}`}
                      className="hover:text-[var(--color-primary)]"
                    >
                      {APP_SETTINGS.contact.mobile}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold mb-4">Come Raggiungerci</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Siamo situati in Via Jacopo Barozzi a Modena, facilmente
                raggiungibili sia in auto che con i mezzi pubblici. La zona è
                ben servita e dispone di parcheggi nelle vicinanze.
              </p>
              <Link
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(APP_SETTINGS.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white px-6 py-3 rounded-lg font-medium hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Ottieni Indicazioni Stradali
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Via+Jacopo+Barozzi+102,+41126+Modena,+Italy&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa GioiPlanet Modena"
            />
          </div>
        </div>
      </section>

      {/* Info Aziendali */}
      <section className="py-12 bg-[var(--color-background)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[var(--color-text-light)]">
            <strong>{APP_SETTINGS.legal.companyName}</strong> | P.IVA:{" "}
            {APP_SETTINGS.legal.vatNumber} | REA: {APP_SETTINGS.legal.rea}
          </p>
        </div>
      </section>
    </main>
  );
}
