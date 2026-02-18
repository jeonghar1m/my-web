# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Next.js dev server (localhost:3000)
- `npm run build` — Production build
- `npm start` — Run production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Tech Stack

- **Next.js 16** with App Router, **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via PostCSS (`@import "tailwindcss"` syntax, OKLCH color tokens)
- **Radix UI** (themes + primitives) and **shadcn/ui** (new-york style, RSC enabled)
- **dayjs** for dates, **lucide-react** and **react-icons** for icons
- Path alias: `@/*` → `./src/*`

## Architecture

```
src/
├── app/           # Next.js App Router pages and route-specific components
├── shared/        # Reusable code: ui/, lib/utils.ts, model/
└── widgets/       # Layout components (Header, Footer)
```

- **Server Components by default**; Client Components only where interactivity is needed (marked with `"use client"`)
- Portfolio data is static, defined in `src/app/portfolio/portfolio-data.tsx` — no API/database layer
- Types/interfaces live in `src/shared/model/`
- The `cn()` utility in `src/shared/lib/utils.ts` combines clsx + tailwind-merge

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page with career section |
| `/portfolio` | Portfolio grid listing |
| `/portfolio/[id]` | Portfolio detail (dynamic, async params) |
| 404 | Custom not-found page |

Root layout (`src/app/layout.tsx`) wraps all pages with Header/Footer and Geist font.

## Styling Conventions

- Tailwind utility classes inline; theme tokens defined as CSS custom properties in `src/app/globals.css`
- Light/dark mode via `.dark` class with `@custom-variant dark`
- Responsive: mobile-first with `sm:` / `lg:` breakpoints
- shadcn components added via `npx shadcn@latest add <component>`

## Key Patterns

- Korean language content throughout the site
- Next.js `Image` component for all images (portfolio thumbnails in `public/images/portfolio/`)
- Dynamic route params typed as `Promise<{ id: string }>` (Next.js 16 async params)
- Barrel exports (index.ts) for shared UI modules
