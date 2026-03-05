# Code Style & Conventions

## Language & Content
- Korean language content throughout the site

## TypeScript
- Strict mode enabled
- Types/interfaces in `src/shared/model/`

## Styling
- Tailwind CSS v4 via PostCSS (`@import "tailwindcss"` syntax)
- OKLCH color tokens as CSS custom properties in `src/app/globals.css`
- Light/dark mode via `.dark` class with `@custom-variant dark`
- Mobile-first responsive: `sm:` / `lg:` breakpoints
- `cn()` utility (clsx + tailwind-merge) from `@/shared/lib/utils`

## Components
- shadcn/ui (new-york style, RSC enabled) + Radix UI
- `components.json` for shadcn config

## Images
- Next.js `Image` component for all images
- Portfolio thumbnails in `public/images/portfolio/`

## Icons
- lucide-react and react-icons

## Dates
- dayjs for date handling

## Task Completion Checklist
1. Run `npm run lint` to check for lint errors
2. Run `npm run build` to verify no build errors
3. Commit with proper author format (see suggested_commands.md)
