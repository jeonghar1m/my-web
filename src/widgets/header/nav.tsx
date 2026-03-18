import { visibleHeaderNav } from "@/flags";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "블로그",
    href: "https://velog.io/@jeonghar1m/posts",
    external: true,
  },
];

export default async function Nav() {
  const isVisibleHeaderNav = await visibleHeaderNav();

  if (!isVisibleHeaderNav) return null;
  return (
    <nav className="mt-6 flex gap-3">
      {NAV_ITEMS.map((item) =>
        item.external ? (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-500 px-5 py-1.5 text-sm text-neutral-300 hover:text-white hover:border-neutral-300 transition-colors"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="border border-neutral-500 px-5 py-1.5 text-sm text-neutral-300 hover:text-white hover:border-neutral-300 transition-colors"
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
