# Next.js Component Architecture

This document outlines the component architecture for the taxi booking website, adhering to the project UI rules, design system, and asset manifest.

## Directory Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Homepage combining all sections (Server Component)
│   └── globals.css        # Tailwind & global styles
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx     # Contact info & social links
│   │   ├── Header.tsx     # Main navigation & logo
│   │   └── Footer.tsx     # Footer links & info
│   ├── navigation/
│   │   └── NavLinks.tsx   # Reusable navigation list (Client Component)
│   ├── hero/
│   │   └── HeroSection.tsx# Left text + right form wrapper
│   ├── booking/
│   │   ├── BookingForm.tsx# Interactive form (Client Component)
│   │   └── TabGroup.tsx   # Segmented control for One Way/Round Trip
│   ├── services/
│   │   ├── ServicesSection.tsx
│   │   └── ServiceCard.tsx
│   ├── routes/
│   │   ├── RoutesSection.tsx
│   │   └── RouteCard.tsx  # Displays source -> destination
│   ├── fleet/
│   │   ├── FleetSection.tsx
│   │   └── FleetCard.tsx  # Vehicle image, name, and specs
│   ├── packages/
│   │   ├── PackagesSection.tsx
│   │   └── PackageCard.tsx
│   ├── testimonials/
│   │   ├── TestimonialSection.tsx
│   │   └── TestimonialCard.tsx
│   └── shared/
│       ├── SectionTitle.tsx # Reusable eyebrow and main title typography
│       ├── Button.tsx       # Reusable CTA button
│       └── Icons.tsx        # Fallback SVG/Lucide wrappers
├── data/
│   └── mockData.ts        # Constants for routes, fleet, packages, etc.
└── lib/
    └── utils.ts           # Class merging (clsx/tailwind-merge)
```

## Component Responsibilities & Rendering Strategy

### 1. Server Components (Default)
By default, all structural and layout components will be **Server Components** to maximize performance, SEO, and fast initial page loads.
- **`app/page.tsx`**: Responsible for assembling the page sections in order.
- **Section Wrappers**: Components like `ServicesSection`, `RoutesSection`, and `FleetSection` will remain server-side. They will import static data arrays from `src/data/mockData.ts` and map over them to render child cards.
- **Cards**: `ServiceCard`, `RouteCard`, `FleetCard`, `PackageCard`, and `TestimonialCard` are stateless presentation components. They will receive props (e.g., title, image, price) and render UI without needing client interactivity.

### 2. Client Components (`"use client"`)
Components that require browser interactivity, state management, or event listeners.
- **`BookingForm.tsx`**: Requires local state to handle tab switching (One Way vs. Round Trip), date/time pickers, and passenger dropdowns.
- **`Header.tsx` / `NavLinks.tsx`**: If the mobile menu requires a hamburger toggle state or sticky scroll detection, it must be a client component.
- **Interactive UI Elements**: Any carousels (if used for Fleet/Testimonials) or modals will be extracted into small client components.

## Data-Driven Rendering
To ensure code quality and avoid duplicated HTML markup, all repeated UI patterns will be mapped from structured arrays located in `src/data/mockData.ts`. 

Example structure:
```typescript
export const FLEET_DATA = [
  { id: 1, name: "Sedan", seats: 4, bags: 2, ac: true, image: "/images/fleet/sedan.jpg" },
  { id: 2, name: "SUV", seats: 6, bags: 3, ac: true, image: "/images/fleet/suv.jpg" },
  // ...
];
```
This isolates the content from the presentation, keeping the React components clean and aligned with the `taxi-ui.md` project rules.
