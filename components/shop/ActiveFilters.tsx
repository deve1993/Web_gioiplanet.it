"use client";

import { X } from "lucide-react";
import { JEWELRY_CATEGORIES } from "@/lib/mockData";
import type { FilterState } from "./ShopFilters";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

interface ActiveFiltersProps {
  filters: FilterState;
  activeCategory: string;
  onRemoveMaterial: (material: string) => void;
  onRemoveCondition: (condition: string) => void;
  onRemoveCategory: () => void;
  onRemovePriceFilter?: () => void;
  onClearAll: () => void;
  priceMin?: number;
  priceMax?: number;
}

export function ActiveFilters({
  filters,
  activeCategory,
  onRemoveMaterial,
  onRemoveCondition,
  onRemoveCategory,
  onRemovePriceFilter,
  onClearAll,
  priceMin = 0,
  priceMax = 100000,
}: ActiveFiltersProps) {
  const hasPriceFilter =
    filters.priceRange &&
    (filters.priceRange[0] > priceMin || filters.priceRange[1] < priceMax);

  const hasFilters =
    activeCategory !== "all" ||
    filters.materials.length > 0 ||
    filters.conditions.length > 0 ||
    hasPriceFilter;

  if (!hasFilters) return null;

  const categoryLabel =
    JEWELRY_CATEGORIES.find((c) => c.id === activeCategory)?.label || "";

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm text-[var(--color-text-light)]">
        Filtri attivi:
      </span>

      {activeCategory !== "all" && (
        <button
          onClick={onRemoveCategory}
          className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-sm rounded-full hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-colors"
        >
          {categoryLabel}
          <X className="w-3 h-3" />
        </button>
      )}

      {hasPriceFilter && onRemovePriceFilter && (
        <button
          onClick={onRemovePriceFilter}
          className="inline-flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-700 text-sm rounded-full hover:bg-sky-200 transition-colors"
        >
          {formatPrice(filters.priceRange[0])} -{" "}
          {formatPrice(filters.priceRange[1])}
          <X className="w-3 h-3" />
        </button>
      )}

      {filters.materials.map((material) => (
        <button
          key={material}
          onClick={() => onRemoveMaterial(material)}
          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-[var(--color-text)] text-sm rounded-full hover:bg-gray-200 transition-colors"
        >
          {material}
          <X className="w-3 h-3" />
        </button>
      ))}

      {filters.conditions.map((condition) => (
        <button
          key={condition}
          onClick={() => onRemoveCondition(condition)}
          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-[var(--color-text)] text-sm rounded-full hover:bg-gray-200 transition-colors"
        >
          {condition}
          <X className="w-3 h-3" />
        </button>
      ))}

      <button
        onClick={onClearAll}
        className="text-sm text-[var(--color-primary)] hover:underline ml-2"
      >
        Rimuovi tutti
      </button>
    </div>
  );
}
