# Naming

## Paths and files

- `@/*` maps to `src/*`; prefer this alias for imports that cross feature/directory boundaries.
- Source file and directory names use kebab-case.
- Next.js reserved file names such as `page.tsx`, `layout.tsx`, and `route.ts` follow framework conventions.
- Avoid vague names such as `data.ts`, `helper.ts`, or `common.ts` when a domain-specific name is available.

## Identifiers

- Functions, hooks, and variables: `camelCase`
- Components, classes, interfaces, and type aliases: `PascalCase`
- Module-scope immutable configuration and fixed values: `UPPER_SNAKE_CASE`
- React hooks start with `use`.
- Boolean values use meaningful `is`, `has`, `can`, or `should` names when the meaning is not already obvious.

Names include the domain noun, not only a transformation verb:

```ts
const sortedCareers = careers.toSorted(compareCareer);
const parsedPublishedAt = dayjs(record.published_at);
```

