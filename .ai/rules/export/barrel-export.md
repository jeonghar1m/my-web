# Barrel Exports

- Use `index.ts` to define the public surface of a cohesive directory.
- An index re-exports only files or child module entry points owned by that directory.
- Do not re-export unrelated modules from another directory.
- A file must not import from its own directory barrel; import the sibling file directly to avoid cycles.
- Explicitly re-export default exports: `export { default as CareerCard } from "./career-card"`.
- Use `export type` when the export is type-only.

## Server/client boundary

- Do not mix server-only modules and client component entry points in one broad barrel.
- A barrel must not accidentally make secrets, server Supabase clients, or Node-only code reachable from a Client Component.
- When a barrel obscures a dependency boundary or causes a cycle, prefer a direct canonical import.

