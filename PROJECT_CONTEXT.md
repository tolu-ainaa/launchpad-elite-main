# launchpad-elite — Project Context

## What this is
A fictional smartphone product landing page called **Omen Phone**. Built with the Lovable platform (lovable.dev) as a demo storefront. Not a real product.

## Tech stack
| Layer | Tool |
|---|---|
| Framework | TanStack Start (React 19 + TanStack Router) |
| Styling | Tailwind CSS v4 |
| UI primitives | shadcn/ui (Radix UI) — full component set already installed |
| Package manager | Bun |
| Build tool | Vite 7 |
| Language | TypeScript 5.8 |
| Forms | react-hook-form + zod |
| Data fetching | TanStack Query |

## File map

```
src/
  routes/
    __root.tsx          # Root shell (HTML, QueryClient, 404/error pages)
    index.tsx           # Home page — all visible page content lives here
  components/
    site-nav.tsx        # Sticky top nav: logo, 5 links, search + cart icons
    site-footer.tsx     # 4-column footer grid + copyright
    ui/                 # shadcn/ui components (accordion, button, card, etc.)
  assets/
    phone-hero.jpg      # Full-width hero image
    phone-camera.jpg    # Camera section image
    phone-chip.jpg      # Chip section image
  hooks/
    use-mobile.tsx      # Mobile breakpoint hook
  lib/
    utils.ts            # cn() tailwind merge util
    api/example.functions.ts  # Server function example
    config.server.ts    # Server-side config
    error-capture.ts    # Error capture util
    error-page.ts       # Error page util
    lovable-error-reporting.ts  # Lovable platform error reporting
  router.tsx            # Router + QueryClient setup
  routeTree.gen.ts      # Auto-generated route tree (do not edit by hand)
  server.ts             # Nitro server entry
  start.ts              # App entry point
  styles.css            # Global styles + Tailwind base
```

## Page sections (index.tsx, top → bottom)
1. **SiteNav** — sticky header
2. **Promo banner** — free engraving / 2-day shipping strip
3. **Hero** — "Omen Phone / Light, redefined." + hero image
4. **Camera section** — dark bg, triple-lens copy + camera image
5. **Chip section** — two-column, L3 chip copy + chip image
6. **Specs grid** — 6-cell grid (display, frame, battery, IP68, USB-C, 5G)
7. **Buy section** (`id="buy"`) — CTA buttons
8. **SiteFooter** — 4-column link grid

## Brand / design tokens
- Primary accent: `oklch(0.55_0.2_260)` (indigo-blue)
- Background: `bg-background` / `bg-secondary/60` alternating sections
- Dark section: `bg-black text-white` (camera section)
- Nav height: `h-11`, max content width: `max-w-5xl`
- Body font weight: standard, headings use `font-semibold tracking-tight`

## Key conventions
- All routing via TanStack Router file-based routes under `src/routes/`
- `routeTree.gen.ts` is auto-generated — never edit it manually
- Components use named exports (e.g. `export function SiteNav()`)
- Tailwind classes inline — no CSS modules
- shadcn/ui components live in `src/components/ui/` — extend, don't modify originals
- Images imported as ES modules from `src/assets/`

## Common change patterns

### Add a new page section
Edit `src/routes/index.tsx` — add a `<section>` block inside the `Home()` return, following the existing pattern.

### Add a nav link
Edit `src/components/site-nav.tsx` — add to the `links` array on line 4.

### Add a footer column
Edit `src/components/site-footer.tsx` — add to the `cols` array.

### Add a new route/page
Create `src/routes/your-page.tsx` with a `createFileRoute("/your-page")` export. The route tree regenerates automatically on next dev build.

### Change brand color
Search for `oklch(0.55_0.2_260)` in `src/routes/index.tsx` and `src/components/site-nav.tsx` and replace with the new value.

### Add a shadcn/ui component
The full component set is already installed in `src/components/ui/`. Import directly:
```tsx
import { Button } from "@/components/ui/button";
```

## Dev commands
```bash
bun dev        # start dev server
bun build      # production build
bun lint       # eslint
bun format     # prettier
```
