import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { APP_SETTINGS } from "@/lib/mockData";
import { MapPin, Phone, Mail, Clock, Smartphone } from "lucide-react";

export const metadata = {
  title: "Contatti | GioiPlanet",
  description:
    "Contatta GioiPlanet a Modena per informazioni, appuntamenti e valutazioni. Tel: 059 8771943 - Email: info@gioiplanet.it",
};

export default function Contatti() {
  return (
    <main>
      <Hero
        title="Contattaci"
        subtitle="Siamo a tua disposizione per qualsiasi informazione o per fissare un appuntamento"
        backgroundImage="/herosection.jpg"
      />

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
              Inviaci un messaggio
            </h2>
            <ContactForm />
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
              Recapiti
            </h2>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dove Siamo</h3>
                  <p className="text-gray-600">
                    {APP_SETTINGS.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefono</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${APP_SETTINGS.contact.phone}`}
                      className="hover:text-[var(--color-primary)]"
                    >
                      {APP_SETTINGS.contact.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cellulare</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${APP_SETTINGS.contact.mobile}`}
                      className="hover:text-[var(--color-primary)]"
                    >
                      {APP_SETTINGS.contact.mobile}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href={`mailto:${APP_SETTINGS.contact.email}`}
                      className="hover:text-[var(--color-primary)]"
                    >
                      {APP_SETTINGS.contact.email}
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    PEC: {APP_SETTINGS.contact.pec}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-[var(--color-primary)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Orari</h3>
                  <p className="text-gray-600">
                    {APP_SETTINGS.contact.openingHours}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Sabato: {APP_SETTINGS.contact.saturdayHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5!2d10.925!3d44.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fe9a9a85d4e6b%3A0x1234567890abcdef!2sVia%20Jacopo%20Barozzi%2C%20102%2C%2041126%20Modena%20MO!5e0!3m2!1sit!2sit!4v1704500000000!5m2!1sit!2sit"
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
        </div>
      </section>
    </main>
  );
}
