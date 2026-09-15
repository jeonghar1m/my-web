# Semantic HTML and Accessibility

## Landmarks and headings

- A page has one primary `<main>` landmark and one meaningful `<h1>`.
- Do not skip heading levels for visual sizing. Style the correct heading element instead.
- Use `<section>` only when it has an accessible name, normally through a heading and `aria-labelledby`.
- Give multiple navigation landmarks distinct accessible names.

## Lists and controls

- Repeated peer items form a `<ul>`/`ol` with `<li>` children when they are semantically a list.
- User actions use `<button type="button">` unless they submit a form.
- Navigation uses `<a>`/Next.js `<Link>`.
- Do not attach primary interaction to a non-interactive `div` or `span`.

## Names and labels

- Icon-only controls require an `aria-label` that describes the action.
- Decorative icons next to visible text use `aria-hidden` when they would pollute the accessible name.
- Visible form labels must be programmatically associated with their controls using `htmlFor`/`id` or the UI library's supported labeling API.
- Generate repeatable component IDs with `useId()` instead of hard-coded IDs.

## Verification

- Prefer accessible selectors such as role and name when testing or automating UI.
- Do not add `data-testid` when a semantic role, label, or visible name can identify the element.
- Keyboard focus and activation must be available for every interactive control.

