# Testing

## Current state

- No test runner or `npm run test` script is configured.
- Do not claim tests were run and do not invent test commands.
- Until test infrastructure is added, use `npm run lint`, `npm run build`, and focused browser verification appropriate to the change.

## When tests are introduced

- Add the test script and framework configuration in the same change, then update this document and `AGENTS.md`.
- Colocate unit/component tests with their source; keep end-to-end flows in a top-level test directory.
- Prefer behavior-facing queries: role and accessible name, then label or visible text. Use test IDs only as a last resort.
- Test pure transformations and data-boundary mappings before visual implementation details.
- Bug fixes should include a regression test when the configured infrastructure can cover the failure reliably.
- Keep E2E coverage focused on critical navigation and data flows to control maintenance cost.

