# WEB APPLICATION

Next.js 16 App Router application for GioiPlanet jewelry store in Modena.

## STRUCTURE

```
web/
├── app/
│   ├── layout.tsx              # Root layout, fonts (Playfair/Inter), Header/Footer, favicon/manifest
│   ├── page.tsx                # Homepage (hero, servizi, chi siamo, CTA)
│   ├── globals.css             # @theme CSS variables, Tailwind v4
│   ├── aste/page.tsx           # Aste gioielli
│   ├── compravendita/page.tsx  # Compravendita oro/preziosi
│   ├── contatti/page.tsx       # Contatti + form
│   ├── dove-siamo/page.tsx     # Mappa + indicazioni
│   ├── gioielli-ricondizionati/page.tsx  # Gioielli ricondizionati
│   ├── stime-perizie/page.tsx  # Stime e perizie
│   └── shop/
│       ├── page.tsx            # Catalogo (client component)
│       ├── ShopContent.tsx     # Shop filters/grid logic
│       └── [slug]/page.tsx     # Dettaglio prodotto
├── components/
│   ├── Breadcrumbs.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx              # Logo image + links
│   ├── Header.tsx              # Logo image + nav + dropdown "Altri Servizi"
│   ├── Hero.tsx                # Reusable hero (default: /herosection.jpg)
│   ├── JewelryCard.tsx
│   ├── JewelryCardList.tsx
│   ├── ServiceCard.tsx
│   ├── shop/                   # Shop-specific components
│   │   ├── ActiveFilters.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── MobileFilterDrawer.tsx
│   │   ├── Pagination.tsx
│   │   ├── PriceRangeSlider.tsx
│   │   ├── ProductSkeleton.tsx
│   │   ├── ShopFilters.tsx
│   │   ├── SortDropdown.tsx
│   │   └── ViewToggle.tsx
│   └── ui/
│       └── Button.tsx          # Base button primitive
├── lib/
│   └── mockData.ts             # JewelryItem[], APP_SETTINGS, categories
├── types/
├── context/                    # React context (empty, reserved)
├── public/
│   ├── logo.png                # GioiPlanet logo (transparent bg)
│   ├── herosection.jpg         # Hero background (all pages)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── site.webmanifest
│   ├── placeholder-jewelry*.svg  # Product placeholder images
│   └── images/store/
│       ├── store-01.png        # Store photos (chi siamo section)
│       ├── store-02.png
│       ├── store-03.png
│       └── store-04.png
└── next.config.ts              # React Compiler enabled
```

## KEY FILES

| File              | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| `app/layout.tsx`  | Root layout, fonts (Playfair/Inter), Header/Footer, icons/manifest metadata |
| `app/page.tsx`    | Homepage: hero, 4 service cards, chi siamo (store photos grid), CTA |
| `app/globals.css` | @theme CSS variables, Tailwind v4                  |
| `lib/mockData.ts` | JewelryItem[], APP_SETTINGS, categories            |
| `next.config.ts`  | React Compiler enabled                             |

## STACK

- **Next.js 16.1.1** - App Router, no Pages
- **React 19.2.3** - With React Compiler
- **Tailwind CSS 4** - @theme directive, CSS variables
- **lucide-react** - Icons only

## CONVENTIONS

### Pages

```tsx
// Static page pattern (most pages)
export default function PageName() {
  return <main>...</main>;
}

// Client page pattern (shop)
"use client";
export default function Shop() { ... }
```

### Imports

```tsx
import { Component } from "@/components/Component"; // Named export
import { data } from "@/lib/mockData"; // Data/constants
import { Icon } from "lucide-react"; // Icons
```

### Assets

- All hero backgrounds use `/herosection.jpg` (local, no external URLs)
- Logo: `/logo.png` (transparent background, used in Header and Footer)
- Store photos: `/images/store/store-0{1-4}.png`

## COMMANDS

```bash
npm run dev     # localhost:3000
npm run build   # Production
npm run lint    # ESLint 9
```
