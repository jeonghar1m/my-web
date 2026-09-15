# Domain Models

The site uses a lightweight separation between external records, application models, and UI.

## Boundaries

- Supabase rows and external API responses are transport records, not automatically application models.
- Define record types beside the corresponding data-access/transform module when they are boundary-specific.
- Convert records to `Career`, `Education`, or `Portfolio` models before returning them to UI consumers.
- Shared application models live in `src/shared/model/`.
- Feature-only view types stay beside the feature and move to shared model only after real cross-feature reuse.

## Model contents

- Models contain serializable data contracts and finite domain values.
- React hooks, JSX, network requests, and UI rendering do not belong in model files.
- Presentation-only mappings, such as color or icon selection, stay in the UI/feature layer unless they are a shared product contract.
- Use consistent product vocabulary across records, transforms, models, and components.

## Scope

- Do not introduce Repository, Entity, or Value Object classes merely to imitate backend DDD.
- `src/shared/api/` and React Query hooks already form the data-access boundary for this project's scale.

