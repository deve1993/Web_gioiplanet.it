import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { Sparkles, Watch, CircleDot, Link2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Gioielli Ricondizionati | GioiPlanet",
  description:
    "Scopri i nostri gioielli ricondizionati: Tennis, bracciali, anelli e collane in oro con diamanti a prezzi vantaggiosi. Aspetto pari al nuovo garantito.",
};

const CATEGORIE = [
  {
    title: "Tennis",
    description:
      "Tennis in oro bianco con diamanti, ricondizionati con cura per un aspetto identico al nuovo.",
    icon: Sparkles,
  },
  {
    title: "Bracciali",
    description:
      "Bracciali in oro bianco e giallo con pietre preziose o diamanti, perfettamente restaurati.",
    icon: Link2,
  },
  {
    title: "Anelli",
    description:
      "Vasta scelta di anelli in oro bianco, giallo, vintage e antichi, tutti ricondizionati.",
    icon: CircleDot,
  },
  {
    title: "Collane",
    description:
      "Collane, catene e pendenti con pietre preziose, riportati al loro splendore originale.",
    icon: Watch,
  },
];

export default function GioielliRicondizionatiPage() {
  return (
    <main>
      <Hero
        title="Gioielli Ricondizionati"
        subtitle="Eleganza senza tempo a prezzi accessibili"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Cos&apos;è il Ricondizionamento?
          </h2>
          <p className="text-[var(--color-text-light)] text-lg leading-relaxed text-center mb-8">
            Il <strong>Ricondizionamento</strong> è un processo che consente ai{" "}
            <strong>gioielli usati</strong> di acquisire un aspetto analogo ai
            gioielli nuovi. Dopo il trattamento, i pezzi ricondizionati non
            presentano differenze estetiche o economiche rispetto agli articoli
            nuovi in gioielleria.
          </p>
          <p className="text-[var(--color-text-light)] text-lg leading-relaxed text-center">
            Ogni gioiello viene sottoposto a un accurato processo di pulizia,
            lucidatura e, se necessario, riparazione, per garantire la massima
            qualità e brillantezza.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-12 text-center">
            Le Nostre Categorie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIE.map((categoria) => (
              <div
                key={categoria.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <categoria.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-primary)] mb-3">
                  {categoria.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {categoria.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] mb-8 text-center">
            Perché Scegliere i Ricondizionati?
          </h2>
          <ul className="space-y-4 text-[var(--color-text-light)] text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">✓</span>
              <span>
                <strong>Risparmio garantito</strong>: prezzi inferiori rispetto
                al nuovo, con la stessa qualità
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">✓</span>
              <span>
                <strong>Aspetto impeccabile</strong>: trattamenti professionali
                che restituiscono lo splendore originale
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">✓</span>
              <span>
                <strong>Sostenibilità</strong>: una scelta ecologica che dà
                nuova vita a pezzi preziosi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold">✓</span>
              <span>
                <strong>Unicità</strong>: pezzi vintage e antichi con carattere
                e storia
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Vieni a Scoprire la Nostra Collezione
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Visita il nostro negozio a Modena per vedere di persona i nostri
            gioielli ricondizionati e trovare il pezzo perfetto per te.
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
