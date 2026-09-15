# Architecture

## Stack

- Next.js 16 App Router, React 19, TypeScript 5
- Tailwind CSS 4, Radix UI, shadcn/ui
- TanStack React Query 5, Supabase
- Vercel Analytics, Speed Insights, Blob, Flags

## Directory roles

```text
src/
├── app/       # routes, layouts, route-local UI, route handlers
├── shared/    # reusable api, model, lib, ui, constants
└── widgets/   # page-wide layout blocks such as Header and Footer
```

- Route-local code stays next to its route. Promote it to `shared` only when multiple routes genuinely reuse it.
- `src/shared/api/` contains framework-independent data access and record conversion.
- `src/shared/lib/api/` contains React Query hooks and client-side orchestration.
- `src/shared/model/` contains domain/view types used across more than one consumer.

## Server and Client Components

- Components are Server Components by default.
- Add `"use client"` only at a real server-to-client boundary: state, effects, event handlers, browser APIs, React Query hooks, or a client-only UI library require it.
- A component imported only below an existing Client Component boundary does not need another directive unless it is also a reusable entry point that Server Components may import directly.
- Do not move an entire page to the client merely because one leaf component is interactive. Keep the boundary as low as practical.
- Props crossing a server/client boundary must be serializable.

## Routes

- Use App Router special files for their intended role: `page.tsx`, `layout.tsx`, `loading.tsx`, `not-found.tsx`, `route.ts`.
- Parallel and intercepting routes under `src/app/@modal/` provide modal navigation. A direct URL must still render a valid full page.
- Dynamic route params follow the Next.js 16 async params contract.
- Route Handler secrets and Supabase server credentials remain server-only.

## Page composition

- Keep `page.tsx` focused on route concerns and data composition.
- Extract a section when it has an independent responsibility, substantial JSX, or its own state/loading boundary.
- Do not create a `page-content.tsx` that only forwards props to one component.

