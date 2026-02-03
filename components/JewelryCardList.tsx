"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { JewelryItem } from "@/lib/mockData";

interface JewelryCardListProps {
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

export function JewelryCardList({ item }: JewelryCardListProps) {
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
      className="group flex bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-48 h-48 shrink-0 bg-gray-50 overflow-hidden">
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="192px"
          unoptimized={item.images[0].endsWith(".svg")}
        />

        {/* Pulsante Preferiti */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
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
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full text-xs font-medium text-[var(--color-text)] capitalize">
              {item.category}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${conditionColor}`}
            >
              {item.condition}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-[var(--color-text-light)] line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-[var(--color-text)]">
            {formatPrice(item.price)}
          </span>
          <span className="text-xs text-gray-400">{item.material}</span>
        </div>
      </div>
    </Link>
  );
}
