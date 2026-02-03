"use client";

import {
  CircleDot,
  Link2,
  Watch,
  Sparkles,
  Clock,
  Gem,
  Crown,
  LayoutGrid,
} from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  CircleDot,
  Link2,
  Watch,
  Sparkles,
  Clock,
  Gem,
  Crown,
  LayoutGrid,
};

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface CategoryTabsProps {
  categories: readonly Category[];
  active: string;
  onChange: (categoryId: string) => void;
  counts?: Record<string, number>;
}

export function CategoryTabs({
  categories,
  active,
  onChange,
  counts,
}: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max pb-2">
        {/* Tab "Tutti" */}
        <button
          onClick={() => onChange("all")}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
            active === "all"
              ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-md"
              : "bg-white text-[var(--color-text)] hover:bg-sky-50 border border-gray-200"
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Tutti</span>
          {counts && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                active === "all"
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {Object.values(counts).reduce((a, b) => a + b, 0)}
            </span>
          )}
        </button>

        {/* Tabs categorie */}
        {categories.map((category) => {
          const Icon = ICONS[category.icon] || Gem;
          const isActive = active === category.id;
          const count = counts?.[category.id] ?? 0;

          return (
            <button
              key={category.id}
              onClick={() => onChange(category.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-md"
                  : "bg-white text-[var(--color-text)] hover:bg-sky-50 border border-gray-200"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.label}</span>
              {counts && count > 0 && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
