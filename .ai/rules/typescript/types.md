# TypeScript Types

## General rules

- Prefer precise types over `any`. Use `unknown` at untrusted boundaries and narrow it.
- Use `interface` for extendable object contracts and `type` for unions, aliases, mapped types, and compositions. Consistency and clarity matter more than forcing either keyword.
- Optional object properties use `?:` when omission is valid.
- Minimize `as` assertions; prefer annotations, `satisfies`, validation, or control-flow narrowing.
- Use `import type` for type-only imports when practical.

## Component props

- Give reusable component props a named type or interface.
- Wrapper components inherit relevant source props with `ComponentProps`, `Pick`, or `Omit` instead of renaming standard behavior without reason.
- Inline a small one-off object type when it is clearer; extract nested types when reused or conceptually independent.
- Use `ReactNode` imported from React rather than the global `React.ReactNode` namespace style.

## Domain values

- Reuse `SortOrder` from `src/shared/model/common.ts` rather than redeclaring `"latest" | "oldest"`.
- Reuse date formats from `src/shared/constants/date.ts` rather than scattering format strings.
- For a finite runtime value set, prefer an `as const` object plus a derived PascalCase type. Do not require the value and type to share an uppercase name.

```ts
export const PROJECT_TYPE = {
  PERSONAL: "personal",
  WORK: "work",
} as const;

export type ProjectType = (typeof PROJECT_TYPE)[keyof typeof PROJECT_TYPE];
```

