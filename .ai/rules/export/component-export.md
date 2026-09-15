# Component Exports

- Next.js route entry files use the export form required by the framework, including default exports for pages and layouts.
- Feature components may use default exports when the file has one primary component.
- Named exports are allowed when a module intentionally exposes a small related API, such as a Provider and hook, or when a library convention expects them.
- Do not mix default and named exports for the same symbol.
- Keep a directory barrel consistent with the component file's export form.

```ts
// default component
export { default as CareerCard } from "./career-card";

// named API
export { Providers } from "./providers";
```

- Private helpers that are not part of the directory API are not re-exported.

