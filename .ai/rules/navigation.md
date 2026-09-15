# Navigation

- Use Next.js `<Link>` for navigation the user can open, copy, or activate as a link.
- Use `router.push()` or `router.replace()` only when the destination depends on a completed action or runtime branch, such as a successful form submission.
- Do not implement ordinary links with `onClick` on `div`, `span`, or icon elements.
- Link text or `aria-label` must describe the destination.
- Modal interception routes must retain a usable direct-navigation page for refresh and shared URLs.

```tsx
// Good
<Link href={`/portfolio/${id}`}>프로젝트 보기</Link>

// Avoid
<div onClick={() => router.push(`/portfolio/${id}`)}>프로젝트 보기</div>
```

