# TypeScript Patterns

## Absence checks

- Use `value == null` when both `null` and `undefined` mean absent.
- Use `value === null` or `value === undefined` when the distinction matters.
- Use `!value` only when every falsy value (`0`, `""`, `false`, `null`, `undefined`, `NaN`) is intentionally treated as absent.
- For arrays, `!items.length` is acceptable when the value is known to be an array.

## Control flow

- Prefer early returns when they reduce nesting.
- Extract a named boolean for a complex or reused condition; do not create a variable for every trivial comparison.
- In JSX, use `condition && <View />` when the false branch renders nothing and `condition` is boolean.
- Use a ternary when both branches render meaningful alternatives.

## React state and time

- For optional state, prefer `useState<T>()` over repeating `T | undefined` and `undefined`.
- Values based on the current time must be computed per request, render, or mount as appropriate; do not freeze `Date.now()`/`dayjs()` at module load.
- Use lazy state initialization for expensive or time-dependent initial values.

## Readability

- Give transformed values a domain-specific name such as `sortedCareers` rather than `result`.
- Extract JSX from a map callback when it has its own behavior or obscures the list flow; simple markup may remain inline.
- Assign a complex returned object or array to a typed variable when doing so improves validation, naming, or debugging.

