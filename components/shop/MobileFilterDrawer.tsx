"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { ShopFilters, type FilterState } from "./ShopFilters";

interface MobileFilterDrawerProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  materialCounts?: Record<string, number>;
  conditionCounts?: Record<string, number>;
  activeFiltersCount: number;
  priceMin: number;
  priceMax: number;
}

export function MobileFilterDrawer({
  filters,
  onChange,
  materialCounts,
  conditionCounts,
  activeFiltersCount,
  priceMin,
  priceMax,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[var(--color-text)] hover:bg-gray-50 transition-colors"
      >
        <SlidersHorizontal className="w-5 h-5" />
        <span>Filtri</span>
        {activeFiltersCount > 0 && (
          <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-xs px-2 py-0.5 rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[var(--color-background)] z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="font-bold text-lg text-[var(--color-text)]">Filtri</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-140px)]">
          <ShopFilters
            filters={filters}
            onChange={onChange}
            materialCounts={materialCounts}
            conditionCounts={conditionCounts}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-3 rounded-lg font-medium hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-colors"
          >
            Applica Filtri
          </button>
        </div>
      </div>
    </>
  );
}
