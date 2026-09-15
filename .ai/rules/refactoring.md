# Refactoring

## Extraction signals

Consider extracting a component or hook when one or more apply:

- a file has multiple distinct responsibilities;
- a JSX block has an independent meaning, state, or loading boundary;
- modal, form, table, or repeated section logic obscures the parent flow;
- an event handler or effect contains substantial orchestration;
- the same behavior has been duplicated enough that a shared abstraction is simpler than its call sites.

Line count is a warning signal, not an automatic reason to split. Do not extract a component that merely forwards the same props to one child.

## Placement

- One route/feature only: colocate under its `_components`, `_hooks`, `_utils`, or `_types` directory.
- Multiple routes: promote to the closest shared ancestor.
- Truly application-wide UI or logic: place under the appropriate `src/shared/` directory.
- Page-wide layout elements belong in `src/widgets/`.

## Abstraction

- Prefer a small amount of duplication over an abstraction with many flags and optional branches.
- Similar-looking code may stay separate when its product behavior can evolve independently.
- Preserve inputs, outputs, and observable behavior during a refactor.

## Change scope

- Keep broad refactoring separate from features and bug fixes.
- Small cleanup in files already being edited is allowed when it does not expand review risk.
- State `no behavior change` for a refactoring-only PR and run the available lint/build checks.

