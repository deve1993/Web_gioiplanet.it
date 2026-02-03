"use client";

import { useMemo, useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JewelryCard } from "@/components/JewelryCard";
import { JewelryCardList } from "@/components/JewelryCardList";
import { CategoryTabs } from "@/components/shop/CategoryTabs";
import { ShopFilters, FilterState } from "@/components/shop/ShopFilters";
import { MobileFilterDrawer } from "@/components/shop/MobileFilterDrawer";
import { ActiveFilters } from "@/components/shop/ActiveFilters";
import { SortDropdown, SortOption } from "@/components/shop/SortDropdown";
import { ViewToggle, ViewMode } from "@/components/shop/ViewToggle";
import { Pagination } from "@/components/shop/Pagination";
import {
  MOCK_JEWELRY,
  JEWELRY_CATEGORIES,
  JEWELRY_MATERIALS,
  JEWELRY_CONDITIONS,
} from "@/lib/mockData";

const ITEMS_PER_PAGE = 9;

const prices = MOCK_JEWELRY.map((item) => item.price);
const PRICE_MIN = Math.min(...prices);
const PRICE_MAX = Math.max(...prices);

// Valida che un valore sia una SortOption valida
function isValidSortOption(value: string | null): value is SortOption {
  return (
    value === "newest" ||
    value === "price-asc" ||
    value === "price-desc" ||
    value === "name-asc" ||
    value === "name-desc"
  );
}

// Valida che un valore sia una ViewMode valida
function isValidViewMode(value: string | null): value is ViewMode {
  return value === "grid" || value === "list";
}

export function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Stato locale per l'input di ricerca (per evitare aggiornamenti URL ad ogni keystroke)
  const [searchInput, setSearchInput] = useState("");

  // Leggi i parametri dall'URL
  const activeCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";
  const sortParam = searchParams.get("sort");
  const sortBy: SortOption = isValidSortOption(sortParam)
    ? sortParam
    : "newest";
  const viewParam = searchParams.get("view");
  const viewMode: ViewMode = isValidViewMode(viewParam) ? viewParam : "grid";
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  // Parsing dei filtri dall'URL
  const filters: FilterState = useMemo(() => {
    const materialsParam = searchParams.get("materials");
    const conditionsParam = searchParams.get("conditions");
    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");

    return {
      materials: materialsParam
        ? materialsParam.split(",").filter(Boolean)
        : [],
      conditions: conditionsParam
        ? conditionsParam.split(",").filter(Boolean)
        : [],
      priceRange: [
        minPrice ? Number(minPrice) : PRICE_MIN,
        maxPrice ? Number(maxPrice) : PRICE_MAX,
      ] as [number, number],
    };
  }, [searchParams]);

  // Sincronizza l'input di ricerca con l'URL al caricamento
  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  // Funzione per aggiornare l'URL con nuovi parametri
  const updateURL = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      // Rimuovi parametri con valori di default
      if (params.get("sort") === "newest") params.delete("sort");
      if (params.get("view") === "grid") params.delete("view");
      if (params.get("min_price") === String(PRICE_MIN))
        params.delete("min_price");
      if (params.get("max_price") === String(PRICE_MAX))
        params.delete("max_price");

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    },
    [searchParams, router, pathname],
  );

  // Handlers per aggiornare i vari parametri
  const handleCategoryChange = useCallback(
    (category: string) => {
      updateURL({ category: category === "all" ? null : category, page: null });
    },
    [updateURL],
  );

  const handleSearchSubmit = useCallback(() => {
    updateURL({ q: searchInput || null, page: null });
  }, [updateURL, searchInput]);

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearchSubmit();
      }
    },
    [handleSearchSubmit],
  );

  const handleSortChange = useCallback(
    (sort: SortOption) => {
      updateURL({ sort: sort === "newest" ? null : sort });
    },
    [updateURL],
  );

  const handleViewModeChange = useCallback(
    (view: ViewMode) => {
      updateURL({ view: view === "grid" ? null : view });
    },
    [updateURL],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateURL({ page: page === 1 ? null : String(page) });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [updateURL],
  );

  const handleFiltersChange = useCallback(
    (newFilters: FilterState) => {
      const updates: Record<string, string | null> = {};

      // Materiali
      updates.materials =
        newFilters.materials.length > 0 ? newFilters.materials.join(",") : null;

      // Condizioni
      updates.conditions =
        newFilters.conditions.length > 0
          ? newFilters.conditions.join(",")
          : null;

      // Range prezzo
      updates.min_price =
        newFilters.priceRange[0] > PRICE_MIN
          ? String(newFilters.priceRange[0])
          : null;
      updates.max_price =
        newFilters.priceRange[1] < PRICE_MAX
          ? String(newFilters.priceRange[1])
          : null;

      updates.page = null;
      updateURL(updates);
    },
    [updateURL],
  );

  // Calcola i conteggi per categoria
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    JEWELRY_CATEGORIES.forEach((cat) => {
      counts[cat.id] = MOCK_JEWELRY.filter(
        (item) => item.category === cat.id,
      ).length;
    });
    return counts;
  }, []);

  // Calcola i conteggi per i filtri (basati sui prodotti filtrati per categoria)
  const filterCounts = useMemo(() => {
    const baseItems =
      activeCategory === "all"
        ? MOCK_JEWELRY
        : MOCK_JEWELRY.filter((item) => item.category === activeCategory);

    const materialCounts: Record<string, number> = {};
    const conditionCounts: Record<string, number> = {};

    JEWELRY_MATERIALS.forEach((mat) => {
      materialCounts[mat] = baseItems.filter(
        (item) => item.material === mat,
      ).length;
    });

    JEWELRY_CONDITIONS.forEach((cond) => {
      conditionCounts[cond] = baseItems.filter(
        (item) => item.condition === cond,
      ).length;
    });

    return { materialCounts, conditionCounts };
  }, [activeCategory]);

  // Filtra e ordina i prodotti
  const filteredProducts = useMemo(() => {
    let items = [...MOCK_JEWELRY];

    // Filtra per ricerca testuale
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.material.toLowerCase().includes(query),
      );
    }

    // Filtra per categoria
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filtra per prezzo
    items = items.filter(
      (item) =>
        item.price >= filters.priceRange[0] &&
        item.price <= filters.priceRange[1],
    );

    // Filtra per materiali
    if (filters.materials.length > 0) {
      items = items.filter((item) => filters.materials.includes(item.material));
    }

    // Filtra per condizioni
    if (filters.conditions.length > 0) {
      items = items.filter((item) =>
        filters.conditions.includes(item.condition),
      );
    }

    // Ordina
    switch (sortBy) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        items.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
      default:
        // Mantieni ordine originale (nuovi prima)
        break;
    }

    return items;
  }, [activeCategory, filters, sortBy, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Calcola il numero totale di filtri attivi
  const hasPriceFilter =
    filters.priceRange[0] > PRICE_MIN || filters.priceRange[1] < PRICE_MAX;
  const activeFilterCount =
    filters.materials.length +
    filters.conditions.length +
    (activeCategory !== "all" ? 1 : 0) +
    (hasPriceFilter ? 1 : 0);

  // Rimuovi categoria
  const handleRemoveCategory = useCallback(() => {
    handleCategoryChange("all");
  }, [handleCategoryChange]);

  // Rimuovi materiale
  const handleRemoveMaterial = useCallback(
    (material: string) => {
      handleFiltersChange({
        ...filters,
        materials: filters.materials.filter((m) => m !== material),
      });
    },
    [filters, handleFiltersChange],
  );

  // Rimuovi condizione
  const handleRemoveCondition = useCallback(
    (condition: string) => {
      handleFiltersChange({
        ...filters,
        conditions: filters.conditions.filter((c) => c !== condition),
      });
    },
    [filters, handleFiltersChange],
  );

  // Rimuovi filtro prezzo
  const handleRemovePriceFilter = useCallback(() => {
    handleFiltersChange({
      ...filters,
      priceRange: [PRICE_MIN, PRICE_MAX],
    });
  }, [filters, handleFiltersChange]);

  // Rimuovi tutti i filtri
  const handleClearAll = useCallback(() => {
    setSearchInput("");
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // Pulisci ricerca
  const handleClearSearch = useCallback(() => {
    setSearchInput("");
    updateURL({ q: null });
  }, [updateURL]);

  const breadcrumbItems = useMemo(() => {
    const items: { label: string; href?: string }[] = [
      { label: "Galleria", href: "/shop" },
    ];
    if (activeCategory !== "all") {
      const categoryLabel = JEWELRY_CATEGORIES.find(
        (c) => c.id === activeCategory,
      )?.label;
      if (categoryLabel) {
        items.push({ label: categoryLabel });
      }
    }
    return items;
  }, [activeCategory]);

  return (
    <main>
      <Hero
        title="La Nostra Collezione"
        subtitle="Gioielli rigenerati, orologi di prestigio e occasioni uniche garantite dai nostri esperti."
        backgroundImage="/herosection.jpg"
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Search Bar Section */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca gioielli, orologi, materiali..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                onBlur={handleSearchSubmit}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[var(--color-text)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
              {searchInput && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  type="button"
                  aria-label="Cancella ricerca"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <CategoryTabs
            categories={JEWELRY_CATEGORIES}
            active={activeCategory}
            onChange={handleCategoryChange}
            counts={categoryCounts}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filtri - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28">
                <ShopFilters
                  filters={filters}
                  onChange={handleFiltersChange}
                  materialCounts={filterCounts.materialCounts}
                  conditionCounts={filterCounts.conditionCounts}
                  priceMin={PRICE_MIN}
                  priceMax={PRICE_MAX}
                />
              </div>
            </aside>

            {/* Products Area */}
            <div className="flex-1">
              {/* Header con conteggio, filtri mobile, vista e ordinamento */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <div className="lg:hidden">
                    <MobileFilterDrawer
                      filters={filters}
                      onChange={handleFiltersChange}
                      materialCounts={filterCounts.materialCounts}
                      conditionCounts={filterCounts.conditionCounts}
                      activeFiltersCount={activeFilterCount}
                      priceMin={PRICE_MIN}
                      priceMax={PRICE_MAX}
                    />
                  </div>

                  <p className="text-[var(--color-text-light)]">
                    <span className="font-semibold text-[var(--color-text)]">
                      {filteredProducts.length}
                    </span>{" "}
                    {filteredProducts.length === 1 ? "prodotto" : "prodotti"}
                    {searchQuery && (
                      <span className="text-gray-400">
                        {" "}
                        per &quot;{searchQuery}&quot;
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:block">
                    <ViewToggle
                      value={viewMode}
                      onChange={handleViewModeChange}
                    />
                  </div>
                  <SortDropdown value={sortBy} onChange={handleSortChange} />
                </div>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="mb-6">
                  <ActiveFilters
                    activeCategory={activeCategory}
                    filters={filters}
                    onRemoveCategory={handleRemoveCategory}
                    onRemoveMaterial={handleRemoveMaterial}
                    onRemoveCondition={handleRemoveCondition}
                    onRemovePriceFilter={handleRemovePriceFilter}
                    onClearAll={handleClearAll}
                    priceMin={PRICE_MIN}
                    priceMax={PRICE_MAX}
                  />
                </div>
              )}

              {/* Products Grid/List */}
              {filteredProducts.length > 0 ? (
                <>
                  {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {paginatedProducts.map((item) => (
                        <JewelryCard key={item.id} item={item} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {paginatedProducts.map((item) => (
                        <JewelryCardList key={item.id} item={item} />
                      ))}
                    </div>
                  )}

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                /* Empty State */
                <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                    Nessun prodotto trovato
                  </h3>
                  <p className="text-[var(--color-text-light)] mb-6">
                    {searchQuery
                      ? `Nessun risultato per "${searchQuery}". Prova con termini diversi.`
                      : "Prova a modificare i filtri o la categoria selezionata."}
                  </p>
                  <button
                    onClick={handleClearAll}
                    className="px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white rounded-lg font-medium hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-colors"
                  >
                    Rimuovi Tutti i Filtri
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
