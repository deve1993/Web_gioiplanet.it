import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import {
  Search,
  Scale,
  Handshake,
  CircleDollarSign,
  Gem,
  Banknote,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Compravendita Preziosi | GioiPlanet",
  description:
    "Acquistiamo oro, argento, diamanti e pietre preziose al miglior prezzo di mercato. Pagamento immediato in contanti a Modena.",
};

const STEPS = [
  {
    icon: Search,
    title: "1. Prima Valutazione",
    desc: "Porta i tuoi preziosi in negozio. I nostri esperti effettueranno una prima analisi visiva per determinare caratura e autenticità.",
  },
  {
    icon: Scale,
    title: "2. Pesatura Certificata",
    desc: "Utilizziamo bilance di precisione omologate e visibili al cliente per garantirti la massima trasparenza sul peso effettivo.",
  },
  {
    icon: CircleDollarSign,
    title: "3. Quotazione",
    desc: "Applichiamo la migliore quotazione di mercato del giorno, aggiornata in tempo reale in base al fixing dell'oro.",
  },
  {
    icon: Handshake,
    title: "4. Pagamento Immediato",
    desc: "Concludiamo la compravendita con pagamento immediato in CONTANTI (nei limiti di legge) e rilascio di regolare ricevuta.",
  },
];

const MATERIALI = [
  {
    icon: Banknote,
    title: "Oro Usato",
    desc: "Acquistiamo il tuo oro usato in contanti al prezzo migliore sul mercato. Qualsiasi forma: gioielli, lingotti, monete.",
  },
  {
    icon: Scale,
    title: "Argento",
    desc: "Oggetti e gioielli in argento usato. Valutiamo e acquistiamo qualsiasi articolo in argento.",
  },
  {
    icon: Gem,
    title: "Diamanti",
    desc: "Diamanti sfusi o montati in qualsiasi forma e dimensione. Valutazione professionale certificata.",
  },
  {
    icon: Gem,
    title: "Pietre Preziose",
    desc: "Smeraldi, zaffiri, rubini e altre pietre preziose. Valutazione gemmologica accurata.",
  },
];

export default function Compravendita() {
  return (
    <main>
      <Hero
        title="Acquistiamo Gioielli e Oggetti Preziosi"
        subtitle="Al miglior prezzo sul mercato. Pagamento immediato in CONTANTI!"
        backgroundImage="/herosection.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
              Perché scegliere GioiPlanet?
            </h2>
            <p className="text-lg text-[var(--color-text-light)]">
              La compravendita di preziosi non è solo una transazione economica,
              ma un atto di fiducia. Garantiamo ai nostri clienti{" "}
              <strong>massima trasparenza</strong>,{" "}
              <strong>professionalità</strong> e le{" "}
              <strong>migliori valutazioni di Modena</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Materiali Accettati */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[var(--color-text)] text-center">
            Cosa Acquistiamo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MATERIALI.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-4 rounded-full bg-blue-50 mb-6">
                  <mat.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">
                  {mat.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[var(--color-text-light)]">
            Acquistiamo anche gioielli da privati, stock da aste e giacenze di
            magazzino.
          </p>
        </div>
      </section>

      {/* Il Nostro Processo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[var(--color-text)] text-center">
            Come Funziona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-background)] p-8 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-4 rounded-full bg-white mb-6 shadow-sm">
                  <step.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Vieni a Trovarci per una Valutazione Gratuita
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Porta i tuoi preziosi nel nostro negozio a Modena. La valutazione è
            sempre gratuita e senza impegno.
          </p>
          <Link href="/dove-siamo">
            <Button size="lg" variant="light">
              Dove Trovarci
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
