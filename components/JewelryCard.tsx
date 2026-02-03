"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { JewelryItem } from "@/lib/mockData";

interface JewelryCardProps {
  item: JewelryItem;
}

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

export function JewelryCard({ item }: JewelryCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const conditionColor =
    CONDITION_COLORS[item.condition] || "bg-gray-100 text-gray-800";

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      href={`/shop/${item.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={item.images[0].endsWith(".svg")}
        />

        {/* Badge categoria */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[var(--color-text)] capitalize">
          {item.category}
        </div>

        {/* Badge condizione */}
        <div
          className={`absolute top-4 right-14 px-3 py-1 rounded-full text-xs font-medium ${conditionColor}`}
        >
          {item.condition}
        </div>

        {/* Pulsante Preferiti */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? "bg-red-500 text-white scale-110"
              : "bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-white"
          }`}
          aria-label={
            isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
        >
          <Heart
            className={`w-4 h-4 transition-all ${isFavorite ? "fill-current" : ""}`}
          />
        </button>

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
          {item.title}
        </h3>

        <p className="text-sm text-[var(--color-text-light)] line-clamp-2 mb-4 min-h-[2.5rem]">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-[var(--color-text)]">
            {formatPrice(item.price)}
          </span>
          <span className="text-xs text-gray-400">{item.material}</span>
        </div>
      </div>
    </Link>
  );
}
