# Repository Guidelines

## Overview
- This project is a **Next.js 16 + App Router** portfolio site.
- Primary language is **TypeScript 5 (strict mode)**.
- UI stack uses **Tailwind CSS v4**, **Radix UI**, and **shadcn/ui**.
- Path alias: `@/*` maps to `src/*`.

## Project Structure & Module Organization
- `src/app/` contains App Router pages, route-specific components, and `globals.css`.
- `src/shared/` contains reusable modules:
  - `ui/` for shared UI components
  - `lib/utils.ts` for utilities (including `cn()`)
  - `model/` for shared types/interfaces
- `src/widgets/` contains layout components such as `Header` and `Footer`.
- `public/` stores static assets (e.g., `public/images/portfolio/`).

## Architecture & Routing
- Prefer **Server Components by default**.
- Add `"use client"` only where interactivity is required.
- Current routes:
  - `/` : home page
  - `/portfolio` : portfolio grid list
  - `/portfolio/[id]` : portfolio detail page (dynamic route)
  - custom 404 (`not-found`)
- Root layout (`src/app/layout.tsx`) wraps pages with shared layout (Header/Footer + font setup).
- Portfolio data is static (`src/app/portfolio/portfolio-data.tsx`), without API/database dependency.

## Build, Lint, and Run Commands
- `npm run dev` — starts local dev server (`http://localhost:3000`)
- `npm run build` — builds production bundle
- `npm start` — runs production server
- `npm run lint` — runs ESLint (Next.js + TypeScript presets)

## Styling Conventions
- Use Tailwind utility classes in components.
- Theme tokens are defined via CSS variables in `src/app/globals.css`.
- Dark mode is class-based (`.dark`).
- Keep mobile-first responsive strategy (`sm:`, `lg:` breakpoints).

## Coding Style & Naming Conventions
- Components: **PascalCase** (e.g., `PortfolioCard.tsx`)
- Utilities/helpers: **camelCase** (e.g., `utils.ts`)
- Use Next.js `Image` component for images when applicable.
- Keep content and UI text in Korean where existing pages follow Korean tone.

## Testing Guidelines
- No test framework is configured currently.
- If tests are introduced, also document setup and add `npm run test` in this file.

## Commit & Pull Request Guidelines
- Commit message prefixes: `feat:`, `fix:`, `refact:`, `chore:`, `docs:`.
- Keep commit subjects short and imperative; avoid scope parentheses unless required.
  - Recommended: `fix: footer와 겹치지 않도록 sticky 적용`
  - Avoid: `fix(scroll-to-top): footer와 겹치지 않도록 sticky 적용`
- PRs should include:
  - concise summary and rationale
  - related issue/ticket (if available)
  - screenshots/short clips for UI changes

## Git Commit Author (Required)
- Use the following author/committer identity for commits in this repository:
  - **Name**: Jeong Harim
  - **Email**: me@jeongharim.dev
- Recommended commit command format:

```bash
GIT_COMMITTER_NAME="Jeong Harim" GIT_COMMITTER_EMAIL="me@jeongharim.dev" \
  git commit --author="Jeong Harim <me@jeongharim.dev>" ...
```

## Configuration Tips
- ESLint config: `eslint.config.mjs`
- TypeScript config and path alias: `tsconfig.json`
- Keep tsconfig path aliases aligned with actual folder structure changes.
