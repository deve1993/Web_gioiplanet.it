"use client";

import { LayoutGrid, List } from "lucide-react";

export type ViewMode = "grid" | "list";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onChange("grid")}
        className={`p-2 rounded-md transition-all ${
          value === "grid"
            ? "bg-white text-[var(--color-primary)] shadow-sm"
            : "text-gray-400 hover:text-gray-600"
        }`}
        aria-label="Vista griglia"
        aria-pressed={value === "grid"}
      >
        <LayoutGrid className="w-4 h-4" />
      </button>
      <button
        onClick={() => onChange("list")}
        className={`p-2 rounded-md transition-all ${
          value === "list"
            ? "bg-white text-[var(--color-primary)] shadow-sm"
            : "text-gray-400 hover:text-gray-600"
        }`}
        aria-label="Vista lista"
        aria-pressed={value === "list"}
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  );
}
