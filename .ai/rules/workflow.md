# Workflow, Commits, PRs, and Security

## Gradual adoption

- Apply rules to new code and files touched by the current task.
- Do not turn a focused change into a repository-wide migration.
- Move broad convention cleanup into a separate refactoring branch or PR.

## Branches and PRs

- Start work from the latest `develop` branch when it exists.
- Open PRs toward `develop`. Do not create a missing `develop` branch; use `main` only when the repository has no `develop` branch.
- UI changes include screenshots or a short recording when practical.
- PR descriptions explain what changed, why, verification performed, and any environment/configuration impact.

## Commits

Use concise, unscoped conventional-style prefixes:

- `feat:`, `fix:`, `refact:`, `docs:`, `chore:`, `style:`, `test:`
- Use `feat: 설명`, not `feat(scope): 설명`.
- Commit author and committer: `Jeong Harim <me@jeongharim.dev>`.

## Security

- Never commit real secrets, service-role keys, tokens, or private credentials.
- Keep local values in ignored environment files and document only key names in `.env.example`.
- Only values safe for the browser may use a `NEXT_PUBLIC_` prefix.
- Supabase service-role credentials and server-only configuration must not cross into Client Components.

