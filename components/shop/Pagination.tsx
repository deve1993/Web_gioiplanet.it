"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      aria-label="Paginazione"
      className="flex items-center justify-center gap-1 mt-8"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "p-2 rounded-lg transition-colors",
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-[var(--color-text-light)] hover:bg-gray-100 hover:text-[var(--color-text)]",
        )}
        aria-label="Pagina precedente"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={clsx(
              "min-w-[40px] h-10 rounded-lg font-medium transition-colors",
              currentPage === page
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-text-light)] hover:bg-gray-100 hover:text-[var(--color-text)]",
            )}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "p-2 rounded-lg transition-colors",
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-[var(--color-text-light)] hover:bg-gray-100 hover:text-[var(--color-text)]",
        )}
        aria-label="Pagina successiva"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
