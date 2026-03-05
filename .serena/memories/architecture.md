# Architecture

## Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home (/)
│   ├── layout.tsx          # Root layout (Header/Footer/Geist font)
│   ├── career/             # Career listing (/career)
│   ├── career/[id]/        # Career detail
│   ├── portfolio/          # Portfolio listing (/portfolio)
│   ├── portfolio/[id]/     # Portfolio detail
│   ├── @modal/             # Parallel route modals (intercepting routes)
│   │   ├── (.)career/[id]/ # Intercepts career detail → modal
│   │   └── (.)portfolio/[id]/ # Intercepts portfolio detail → modal
│   └── api/                # API routes (career, portfolio, cron)
├── shared/
│   ├── ui/                 # Reusable UI components (with barrel exports)
│   │   ├── sort-order-button/
│   │   ├── markdown/
│   │   ├── info-box/
│   │   ├── breadcrumb/
│   │   └── modal/
│   ├── lib/
│   │   ├── utils/common/   # cn(), get-api-base-url
│   │   ├── supabase/       # client.ts, server.ts
│   │   └── api/            # React Query hooks (career, portfolio)
│   ├── model/              # TypeScript types (portfolio.ts, career.ts, common.ts)
│   └── constants/          # date.ts
└── widgets/
    ├── header/             # Header + Nav
    └── footer/             # Footer + SocialLinks + Copyright
```

## Key Patterns
- Server Components by default; `"use client"` only for interactivity
- Intercepting routes (`@modal`) for modal overlays on navigation
- React Query (`useSuspenseQuery`) for data fetching in client components
- Supabase as data backend
- Feature flags via Vercel flags (`src/flags.ts`)
- Dynamic route params typed as `Promise<{ id: string }>` (Next.js 16)
- Barrel exports (`index.ts`) for shared UI modules
- `_components/` subdirectory for route-specific components
