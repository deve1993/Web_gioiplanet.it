import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Coins, Scale, Sparkles, Gavel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SERVIZI = [
  {
    title: "Compravendita",
    description:
      "Acquistiamo oro, argento, diamanti e pietre preziose alla migliore quotazione di mercato. Pagamento immediato in contanti.",
    link: "/compravendita",
    icon: Coins,
  },
  {
    title: "Stime e Perizie",
    description:
      "Valutazioni professionali certificate per eredità, assicurazioni, tribunali. Periti iscritti al Tribunale di Modena.",
    link: "/stime-perizie",
    icon: Scale,
  },
  {
    title: "Gioielli Ricondizionati",
    description:
      "Gioielli usati riportati al loro splendore originale. Tennis, bracciali, anelli e collane a prezzi vantaggiosi.",
    link: "/gioielli-ricondizionati",
    icon: Sparkles,
  },
  {
    title: "Assistenza Aste",
    description:
      "Ti assistiamo nella vendita all'asta dei tuoi gioielli, collegandoti con le migliori case d'asta.",
    link: "/aste",
    icon: Gavel,
  },
];

export default function Home() {
  return (
    <main>
      <Hero
        title="Acquistiamo Gioielli e Oggetti Preziosi"
        subtitle="Al miglior prezzo sul mercato. Pagamento immediato in contanti!"
        ctaText="Scopri i Nostri Servizi"
        ctaLink="/compravendita"
        backgroundImage="/herosection.jpg"
      />

      {/* Chi Siamo Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/store/store-01.png"
                  alt="GioiPlanet - Interno negozio"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group mt-8">
                <Image
                  src="/images/store/store-02.png"
                  alt="GioiPlanet - Vetrina gioielli"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/store/store-03.png"
                  alt="GioiPlanet - Esposizione preziosi"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group mt-8">
                <Image
                  src="/images/store/store-04.png"
                  alt="GioiPlanet - Area valutazione"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                Esperienza e Professionalità <br />
                <span className="bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent">
                  nel Settore dei Preziosi
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                GioiPlanet nasce dall&apos;esperienza pluriennale acquisita
                nell&apos;ambito della{" "}
                <strong className="text-slate-800">
                  Compravendita dei Metalli pregiati
                </strong>
                . Rappresentiamo un sicuro riferimento per Imprese e Privati che
                necessitano di un valido supporto per la{" "}
                <strong className="text-slate-800">
                  Stima, la Valorizzazione e la Commercializzazione
                </strong>{" "}
                dei propri preziosi.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Massima trasparenza e professionalità garantite in ogni
                operazione.
              </p>
              <div className="flex gap-4">
                <Link href="/dove-siamo">
                  <Button variant="secondary">Vieni a trovarci a Modena</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              I Nostri Servizi
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Offriamo una gamma completa di servizi per valorizzare i vostri
              preziosi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVIZI.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Gradient Slate to Sky */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Hai gioielli che non indossi più?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Portali da noi per una valutazione gratuita e senza impegno. Massima
            quotazione di mercato garantita.
          </p>
          <Link href="/contatti">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-white shadow-xl shadow-sky-500/30"
            >
              Contattaci Ora
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
