# Tailwind CSS

- The project uses Tailwind CSS 4 and mobile-first responsive utilities.
- Reuse CSS variables and theme tokens from `src/app/globals.css` instead of duplicating raw colors.
- Use `cn()` for conditional class composition and conflict resolution.
- Tailwind 4 important modifiers go at the end of the utility: `text-red-500!`, not `!text-red-500`.
- Use important modifiers only when a verified cascade conflict requires them.
- Keep utility ordering compatible with the project's existing formatter/editor behavior; do not create formatting-only churn.
- Prefer readable repeated markup over a single opaque class expression. Extract a shared variant only when the same visual contract is reused.

