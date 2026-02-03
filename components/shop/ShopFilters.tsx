"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { JEWELRY_MATERIALS, JEWELRY_CONDITIONS } from "@/lib/mockData";
import { PriceRangeSlider } from "./PriceRangeSlider";

export interface FilterState {
  materials: string[];
  conditions: string[];
  priceRange: [number, number];
}

interface ShopFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  materialCounts?: Record<string, number>;
  conditionCounts?: Record<string, number>;
  priceMin: number;
  priceMax: number;
}

interface FilterSectionProps {
  title: string;
  options: readonly string[];
  selected: string[];
  onChange: (values: string[]) => void;
  counts?: Record<string, number>;
  defaultOpen?: boolean;
}

function FilterSection({
  title,
  options,
  selected,
  onChange,
  counts,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-left font-semibold text-[var(--color-text)]"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 space-y-2">
          {options.map((option) => {
            const count = counts?.[option] ?? 0;
            const isSelected = selected.includes(option);

            return (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggle(option)}
                  className="w-4 h-4 rounded border-gray-300 text-sky-500 focus:ring-sky-500 cursor-pointer accent-sky-500"
                />
                <span
                  className={`text-sm flex-1 ${isSelected ? "text-[var(--color-text)] font-medium" : "text-[var(--color-text-light)]"} group-hover:text-[var(--color-text)]`}
                >
                  {option}
                </span>
                {counts && (
                  <span className="text-xs text-gray-400">({count})</span>
                )}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ShopFilters({
  filters,
  onChange,
  materialCounts,
  conditionCounts,
  priceMin,
  priceMax,
}: ShopFiltersProps) {
  const hasActiveFilters =
    filters.materials.length > 0 ||
    filters.conditions.length > 0 ||
    filters.priceRange[0] > priceMin ||
    filters.priceRange[1] < priceMax;

  const handleReset = () => {
    onChange({
      materials: [],
      conditions: [],
      priceRange: [priceMin, priceMax],
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-[var(--color-text)]">Filtri</h3>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            Resetta
          </button>
        )}
      </div>

      <div className="space-y-4">
        <PriceRangeSlider
          min={priceMin}
          max={priceMax}
          value={filters.priceRange}
          onChange={(priceRange) => onChange({ ...filters, priceRange })}
        />

        <FilterSection
          title="Materiale"
          options={JEWELRY_MATERIALS}
          selected={filters.materials}
          onChange={(materials) => onChange({ ...filters, materials })}
          counts={materialCounts}
        />

        <FilterSection
          title="Condizione"
          options={JEWELRY_CONDITIONS}
          selected={filters.conditions}
          onChange={(conditions) => onChange({ ...filters, conditions })}
          counts={conditionCounts}
        />
      </div>
    </div>
  );
}
