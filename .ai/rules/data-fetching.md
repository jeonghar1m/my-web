# Data Fetching

## Layer responsibilities

- Server Components and Route Handlers should fetch on the server when client-side cache or interaction is unnecessary.
- Framework-independent fetch/transform functions belong in `src/shared/api/<domain>/`.
- React Query hooks belong in `src/shared/lib/api/<domain>/` and may compose functions from `src/shared/api/`.
- Do not duplicate the same request implementation inside both a hook and a shared fetch function.

## React Query selection

Use `useSuspenseQuery` when data is required to render the mounted section and a parent Suspense boundary owns loading UI.

Use `useQuery` when:

- execution is conditional through `enabled`;
- a modal or tab fetches only while visible;
- multiple loading/error states must be coordinated locally;
- missing data is a valid UI state.

## Query keys

- Query keys start with a stable domain/resource prefix.
- Include every input that changes the response.
- When a domain has several related queries or invalidations, introduce a domain-local key factory instead of scattering inline arrays.
- Keep existing key values stable during a structural refactor unless cache invalidation is intentionally changed.

```ts
const careerKeys = {
  all: ["career"] as const,
  detail: (id: number) => [...careerKeys.all, id] as const,
};
```

## Errors and transformations

- Check `Response.ok` before decoding a fetch response.
- Convert Supabase/API records to application models at the data-access boundary.
- UI components consume application models and do not repeat record-shape conversion.
- Do not expose server-only environment variables to Client Components.

