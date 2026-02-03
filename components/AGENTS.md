# COMPONENTS

Reusable React components for GioiPlanet.

## STRUCTURE

```
components/
├── Header.tsx          # Navigation, mobile menu, dropdown
├── Footer.tsx          # Site footer, contact info
├── Hero.tsx            # Page hero sections
├── ServiceCard.tsx     # Homepage service cards
├── JewelryCard.tsx     # Product card (grid view)
├── JewelryCardList.tsx # Product card (list view)
├── ContactForm.tsx     # Contact form
├── shop/               # Shop-specific components
└── ui/Button.tsx       # Base button primitive
```

## PATTERNS

### Component Template

```tsx
// Named export, props interface above
interface ComponentProps {
  prop: string;
}

export function Component({ prop }: ComponentProps) {
  return <div>...</div>;
}
```

### Styling

```tsx
// Use cn() for conditional classes
import { cn } from "@/components/ui/Button";

className={cn(
  "base-styles",
  condition && "conditional-styles"
)}
```

### Client Components

Add `"use client"` only when using:

- useState, useEffect, useRef
- Event handlers (onClick, onChange)
- Browser APIs

## KEY EXPORTS

| Component   | Used By       | Client |
| ----------- | ------------- | ------ |
| Header      | layout.tsx    | Yes    |
| Footer      | layout.tsx    | No     |
| Hero        | All pages     | No     |
| Button      | Everywhere    | No     |
| JewelryCard | shop/page.tsx | No     |

## ANTI-PATTERNS

- **NO** export default (except page.tsx)
- **NO** inline styles
- **NO** new icon libraries
