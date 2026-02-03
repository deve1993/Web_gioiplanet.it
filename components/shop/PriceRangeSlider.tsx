"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  defaultOpen?: boolean;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
  defaultOpen = true,
}: PriceRangeSliderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [localMin, setLocalMin] = useState(value[0]);
  const [localMax, setLocalMax] = useState(value[1]);

  // Sync local state with prop value
  useEffect(() => {
    setLocalMin(value[0]);
    setLocalMax(value[1]);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), localMax - 100);
    setLocalMin(newMin);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), localMin + 100);
    setLocalMax(newMax);
  };

  const handleMouseUp = () => {
    onChange([localMin, localMax]);
  };

  // Calculate percentage for gradient
  const minPercent = ((localMin - min) / (max - min)) * 100;
  const maxPercent = ((localMax - min) / (max - min)) * 100;

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-left font-semibold text-[var(--color-text)]"
      >
        Prezzo
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {/* Price display */}
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-[var(--color-text)]">
              {formatPrice(localMin)}
            </span>
            <span className="text-gray-400">—</span>
            <span className="font-medium text-[var(--color-text)]">
              {formatPrice(localMax)}
            </span>
          </div>

          {/* Dual range slider */}
          <div className="relative h-2">
            {/* Track background */}
            <div className="absolute inset-0 bg-gray-200 rounded-full" />

            {/* Active track */}
            <div
              className="absolute h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />

            {/* Min slider */}
            <input
              type="range"
              min={min}
              max={max}
              value={localMin}
              onChange={handleMinChange}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleMouseUp}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-sky-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-sky-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
            />

            {/* Max slider */}
            <input
              type="range"
              min={min}
              max={max}
              value={localMax}
              onChange={handleMaxChange}
              onMouseUp={handleMouseUp}
              onTouchEnd={handleMouseUp}
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-sky-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-sky-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-md"
            />
          </div>

          {/* Quick select buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => onChange([min, 1000])}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                localMax <= 1000
                  ? "bg-sky-50 border-sky-300 text-sky-700"
                  : "border-gray-200 text-gray-600 hover:border-sky-300"
              }`}
            >
              Fino a €1.000
            </button>
            <button
              onClick={() => onChange([1000, 5000])}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                localMin >= 1000 && localMax <= 5000
                  ? "bg-sky-50 border-sky-300 text-sky-700"
                  : "border-gray-200 text-gray-600 hover:border-sky-300"
              }`}
            >
              €1.000 - €5.000
            </button>
            <button
              onClick={() => onChange([5000, max])}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                localMin >= 5000
                  ? "bg-sky-50 border-sky-300 text-sky-700"
                  : "border-gray-200 text-gray-600 hover:border-sky-300"
              }`}
            >
              Oltre €5.000
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
