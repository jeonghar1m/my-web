# Feature Directory Patterns

These directories are conventions, not mandatory ceremony. Create them only when they clarify ownership.

## `_context/`

- Feature-only React Context belongs in `_context/`.
- Keep the Context object private and export a Provider plus a typed consumer hook.
- The consumer hook throws a clear error when used outside its Provider.

## `_constants/`

- Feature-local fixed values belong in `_constants/` when they no longer fit clearly in their consumer file.
- Application-wide values belong in `src/shared/constants/`.
- Backend/Supabase contract values stay with their domain model or data-access boundary.

## `_mock/`

- Temporary data used while an API or content source is unavailable belongs in a feature-local `_mock/` directory.
- Mock-only types do not enter `src/shared/model/`.
- Remove the complete mock path when real data access replaces it.

## Modals

- Keep modal state and trigger near their owning feature.
- Use the existing intercepting/parallel route pattern for navigable detail modals.
- Use a local client component for transient dialogs that do not represent a URL.

