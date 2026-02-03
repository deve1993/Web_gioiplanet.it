import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { Gavel, Users, FileCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Assistenza Vendite all'Asta | GioiPlanet",
  description:
    "Servizio completo di assistenza per la vendita all'asta di gioielli e oggetti preziosi. Collegamento con le migliori case d'asta italiane e internazionali.",
};

const STEPS = [
  {
    step: "01",
    title: "Valutazione Iniziale",
    description:
      "Analizziamo i tuoi gioielli per determinare se la vendita all'asta è la scelta migliore e stimiamo il valore di mercato.",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Selezione Casa d'Asta",
    description:
      "Ti guidiamo nella scelta della casa d'asta più adatta in base al tipo di oggetto e al mercato di riferimento.",
    icon: Users,
  },
  {
    step: "03",
    title: "Preparazione e Invio",
    description:
      "Ci occupiamo di tutta la documentazione, della fotografia professionale e dell'invio sicuro degli oggetti.",
    icon: Gavel,
  },
  {
    step: "04",
    title: "Monitoraggio e Vendita",
    description:
      "Seguiamo l'andamento dell'asta e ti assistiamo fino alla conclusione della vendita e al ricevimento del pagamento.",
    icon: TrendingUp,
  },
];

export default function AstePage() {
  return (
    <main>
      <Hero
        title="Assistenza Vendite all'Asta"
        subtitle="Il tuo partner per valorizzare i tuoi preziosi"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Vendita all&apos;Asta con Esperti al Tuo Fianco
          </h2>
          <p className="text-[var(--color-text-light)] text-lg leading-relaxed text-center mb-6">
            GioiPlanet offre un servizio di <strong>assistenza completa</strong>{" "}
            per la vendita all&apos;asta di{" "}
            <strong>gioielli e oggetti preziosi</strong>. Grazie alla nostra
            esperienza pluriennale, ti guidiamo in ogni fase del processo.
          </p>
          <p className="text-[var(--color-text-light)] text-lg leading-relaxed text-center">
            Collaboriamo con le principali case d&apos;asta italiane e
            internazionali per garantirti la massima visibilità e le migliori
            opportunità di vendita per i tuoi preziosi.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-12 text-center">
            Come Funziona il Nostro Servizio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {STEPS.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <span className="text-5xl font-bold text-[var(--color-accent)] absolute -top-4 -left-2">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 mt-4">
                    <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-serif text-lg text-[var(--color-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Auction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-8 text-center">
            Perché Vendere all&apos;Asta?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary)] font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                  Massimizzazione del Valore
                </h3>
                <p className="text-[var(--color-text-light)]">
                  Le aste attraggono collezionisti e appassionati disposti a
                  pagare il giusto prezzo per pezzi unici e di qualità.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary)] font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                  Visibilità Internazionale
                </h3>
                <p className="text-[var(--color-text-light)]">
                  I tuoi gioielli vengono esposti a un pubblico globale di
                  acquirenti qualificati.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[var(--color-primary)] font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                  Trasparenza del Processo
                </h3>
                <p className="text-[var(--color-text-light)]">
                  Le aste sono un sistema di vendita trasparente dove il prezzo
                  finale è determinato dal mercato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Hai Gioielli da Vendere all&apos;Asta?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contattaci per una valutazione gratuita e scopri se la vendita
            all&apos;asta è la scelta giusta per i tuoi preziosi.
          </p>
          <Link href="/contatti">
            <Button size="lg" variant="light">
              Richiedi Informazioni
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
