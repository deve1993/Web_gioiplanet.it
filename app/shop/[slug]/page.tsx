import { MOCK_JEWELRY } from "@/lib/mockData";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Formatta il prezzo in euro
function formatPrice(price: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Colori badge condizione
const CONDITION_COLORS: Record<string, string> = {
  Nuovo: "bg-green-100 text-green-800",
  Ricondizionato: "bg-blue-100 text-blue-800",
  Vintage: "bg-amber-100 text-amber-800",
};

export async function generateStaticParams() {
  return MOCK_JEWELRY.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = MOCK_JEWELRY.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const conditionColor =
    CONDITION_COLORS[item.condition] || "bg-gray-100 text-gray-800";

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="pt-24 container mx-auto px-4 mb-8">
        <Link
          href="/shop"
          className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
        >
          &larr; Torna allo Shop
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg bg-gray-50 border border-gray-100">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover"
                priority
                unoptimized={item.images[0].endsWith(".svg")}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {item.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity border border-gray-100"
                >
                  <Image
                    src={img}
                    alt={`${item.title} detail ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized={img.endsWith(".svg")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info & Form */}
          <div>
            <div className="mb-8 border-b border-gray-100 pb-8">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[var(--color-primary)] rounded-full text-sm font-semibold capitalize">
                  {item.category}
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${conditionColor}`}
                >
                  {item.condition}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--color-text)]">
                {item.title}
              </h1>

              {/* Prezzo */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-[var(--color-primary)]">
                  {formatPrice(item.price)}
                </span>
              </div>

              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-col gap-2 text-sm text-[var(--color-text)] font-medium bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-500">Materiale:</span>
                  <span>{item.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Condizione:</span>
                  <span>{item.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Codice:</span>
                  <span>{item.id}</span>
                </div>
              </div>
            </div>

            {/* Inline Inquiry Form */}
            <div className="bg-[var(--color-background)] p-6 lg:p-8 rounded-xl border border-[var(--color-border)]">
              <h3 className="text-lg font-bold mb-4">Richiedi Informazioni</h3>
              <p className="text-sm text-gray-500 mb-6">
                Compila il modulo per prenotare una visione in negozio o
                richiedere ulteriori dettagli.
              </p>

              <form className="space-y-4" action="#">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
                />
                <textarea
                  rows={3}
                  placeholder="Messaggio..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 resize-none"
                  defaultValue={`Salve, vorrei maggiori informazioni su: ${item.title} (${item.id}) - Prezzo: ${formatPrice(item.price)}.`}
                ></textarea>

                <Button className="w-full justify-center">
                  Invia Richiesta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
