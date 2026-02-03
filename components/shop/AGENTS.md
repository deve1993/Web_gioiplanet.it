# SHOP COMPONENTS

E-commerce filtering and display components.

## FILES

| Component              | Purpose                  |
| ---------------------- | ------------------------ |
| ShopFilters.tsx        | Desktop sidebar filters  |
| MobileFilterDrawer.tsx | Mobile filter drawer     |
| CategoryTabs.tsx       | Category horizontal tabs |
| ActiveFilters.tsx      | Active filter pills      |
| PriceRangeSlider.tsx   | Dual-thumb price slider  |
| SortDropdown.tsx       | Sort options dropdown    |
| ViewToggle.tsx         | Grid/list view toggle    |
| ProductSkeleton.tsx    | Loading skeleton         |

## STATE TYPES

```tsx
interface FilterState {
  materials: string[];
  conditions: string[];
  priceRange: [number, number];
}

type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";
type ViewMode = "grid" | "list";
```

## USAGE PATTERN

All state managed in `app/shop/page.tsx`:

```tsx
const [filters, setFilters] = useState<FilterState>({...});
<ShopFilters filters={filters} onChange={setFilters} />
```

## DATA SOURCE

All options from `lib/mockData.ts`:

- JEWELRY_CATEGORIES
- JEWELRY_MATERIALS
- JEWELRY_CONDITIONS
