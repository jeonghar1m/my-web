# Directory Structure

## Colocation first

- Keep route-specific components next to the route under `_components/`.
- Use `_hooks/`, `_utils/`, `_types/`, `_constants/`, and `_context/` only when the category has enough content to clarify ownership.
- A helper used by one component stays with that component instead of moving immediately to `shared`.

## Shared layers

```text
src/shared/
├── api/        # framework-independent requests and record conversion
├── constants/  # application-wide fixed values
├── lib/        # hooks, integrations, and utilities
├── model/      # shared domain/view types
└── ui/         # reusable UI components
```

- `src/widgets/` contains page-wide layout blocks, not generic controls.
- A parent or sibling route must not import from a child route's private `_components`, `_utils`, or `_types` directory.
- When consumers cross a route boundary, move the cohesive unit to their nearest common ancestor.
- Promote code to `src/shared/` only when it is genuinely shared across otherwise independent areas.

## Component nesting

- Keep `_components/` flat while ownership is clear.
- Create a component directory with `_parts/` when a container owns dedicated subcomponents.
- Components shared by sibling containers live at their common `_components/` level.
- Prefer one primary component per component file. Small private render helpers may remain when extraction would hide rather than clarify the flow.

