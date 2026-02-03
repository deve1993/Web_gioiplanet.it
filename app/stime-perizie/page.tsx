import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Award,
  FileText,
  Key,
  Shield,
  Scale,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Stime e Perizie Preziosi | GioiPlanet",
  description:
    "Perizie professionali certificate per gioielli e preziosi. Periti iscritti al Tribunale di Modena. Valutazioni per eredità, assicurazioni e tribunali.",
};

const TIPOLOGIE_PERIZIE = [
  {
    icon: Scale,
    title: "Valutazioni per Tribunali",
    desc: "Perizie ufficiali valide per procedimenti legali, divisioni e contenziosi.",
  },
  {
    icon: Shield,
    title: "Perizie Assicurative",
    desc: "Documentazione valida ai fini assicurativi per la copertura dei vostri preziosi.",
  },
  {
    icon: FileText,
    title: "Successioni ed Eredità",
    desc: "Perizia scritta e riconosciuta per divisioni ereditarie e trasferimenti di proprietà.",
  },
  {
    icon: Key,
    title: "Apertura Cassette di Sicurezza",
    desc: "Assistenza tecnica per l'accesso a depositi bancari e inventario contenuti.",
  },
];

const BENEFITS = [
  "Perizie per eredità e divisioni patrimoniali",
  "Stime a fini assicurativi",
  "Certificazioni di autenticità pietre preziose",
  "Analisi gemmologica approfondita",
  "Inventari dettagliati per successioni",
  "Documentazione per notai e avvocati",
];

export default function StimePerizie() {
  return (
    <main>
      <Hero
        title="Stime e Perizie Preziosi"
        subtitle="Valutazioni professionali certificate per i tuoi beni più preziosi"
        backgroundImage="/herosection.jpg"
      />

      {/* Autorizzazione */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <Award className="w-10 h-10 text-[var(--color-primary)]" />
            <p className="text-lg text-[var(--color-primary)] font-medium">
              I nostri esperti sono{" "}
              <strong>
                regolarmente iscritti al Ruolo di Periti-Esperti del Tribunale
                di Modena
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                Il Valore della Chiarezza
              </h2>
              <p className="text-lg text-[var(--color-text-light)] mb-6 leading-relaxed">
                Sapere esattamente cosa si possiede è il primo passo per
                proteggere il proprio patrimonio. Offriamo servizi di{" "}
                <strong>perizia tecnica e commerciale</strong> su gioielli
                antichi e moderni, orologi di prestigio e argenteria.
              </p>
              <p className="text-lg text-[var(--color-text-light)] mb-8 leading-relaxed">
                Le nostre stime sono redatte da esperti qualificati e possono
                essere utilizzate per{" "}
                <strong>scopi legali, assicurativi o per successioni</strong>.
                Collaboriamo con istituti finanziari, assicurazioni e
                professionisti legali.
              </p>

              <ul className="space-y-3 mb-8">
                {BENEFITS.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[var(--color-text)] font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/contatti">
                <Button>Prenota un Appuntamento</Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-text)]">
                Come funziona il servizio?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Appuntamento in Sede</h4>
                    <p className="text-sm text-gray-600">
                      Fissa un incontro per portare i tuoi oggetti. Garantiamo
                      privacy e sicurezza.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Analisi Tecnica</h4>
                    <p className="text-sm text-gray-600">
                      Utilizzo di strumentazione avanzata per testare metalli e
                      pietre senza danneggiarli.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Rilascio Documento</h4>
                    <p className="text-sm text-gray-600">
                      Consegna della perizia scritta con foto e descrizione
                      dettagliata del valore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipologie Perizie */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[var(--color-text)] text-center">
            Tipologie di Perizie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIPOLOGIE_PERIZIE.map((tipo, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-4 rounded-full bg-blue-50 mb-6">
                  <tipo.icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[var(--color-text)]">
                  {tipo.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">
                  {tipo.desc}
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
            Hai Bisogno di una Perizia?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contattaci per fissare un appuntamento. I nostri periti sono a tua
            disposizione per valutazioni professionali e certificate.
          </p>
          <Link href="/contatti">
            <Button size="lg" variant="light">
              Prenota Appuntamento
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
