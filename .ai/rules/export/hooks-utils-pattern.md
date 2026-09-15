# Hooks and Utilities

## Hooks

- Feature-local hooks belong in the feature's `_hooks/` directory when extraction improves the component flow.
- Reusable application hooks belong under `src/shared/lib/` in a domain-specific directory.
- A hook file exports the hook as its primary API; supporting types may stay private or move to `_types/` when shared.
- React Query hooks compose framework-independent request/transform functions instead of duplicating them.

## Utilities

- Feature-local pure helpers belong near their consumers, optionally under `_utils/`.
- Shared pure helpers belong under `src/shared/lib/utils/<domain>/`.
- A file may contain tightly coupled private helpers, but exposes one clear public responsibility.
- Constants and reusable types are not placed in `_utils/` merely for convenience.

## Query keys

- Introduce a domain-local Query Key factory when multiple hooks or invalidations share a resource.
- Keep raw data access in `src/shared/api/` and React Query concerns in `src/shared/lib/api/`.

