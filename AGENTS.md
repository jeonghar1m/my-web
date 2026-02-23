# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains Next.js App Router pages, route-specific components, and `globals.css`.
- `src/shared/` holds reusable UI (`ui/`), utilities (`lib/utils.ts`), and types (`model/`).
- `src/widgets/` contains layout components like `Header` and `Footer`.
- `public/` stores static assets (e.g., `public/images/portfolio/`).
- Path alias: `@/*` maps to `src/*` for imports.

## Build, Test, and Development Commands
- `npm run dev` starts the local Next.js dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm start` runs the production server from the build output.
- `npm run lint` runs ESLint (Next.js + TypeScript presets).

## Coding Style & Naming Conventions
- Language: TypeScript (strict mode).
- Components use PascalCase (e.g., `PortfolioCard.tsx`); utilities use camelCase (e.g., `utils.ts`).
- Prefer Next.js server components by default; add "use client" only when needed.
- Styling uses Tailwind CSS v4 utilities and CSS variables in `src/app/globals.css`.

## Testing Guidelines
- No test framework or test scripts are configured yet.
- If adding tests, introduce a framework and document the new `npm run test` command here.

## Commit & Pull Request Guidelines
- Commits follow a simple prefix convention seen in history: `feat:`, `fix:`, `refact:`, `chore:`, `docs:` (short, imperative).
- PRs should include:
  - A concise summary of changes and rationale.
  - Linked issue/ticket when applicable.
  - Screenshots or short clips for UI changes.

## Configuration Tips
- ESLint is configured via `eslint.config.mjs` and Next.js presets.
- TypeScript path alias is defined in `tsconfig.json`; keep it in sync if paths change.