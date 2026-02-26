import Link from "next/link";
import { visibleHeaderNav } from "@/flags";

const NAV_ITEMS = [
  {
    label: "블로그",
    href: "https://velog.io/@jeonghar1m/posts",
    external: true,
  },
];

export default async function Header() {
  const isVisibleHeaderNav = await visibleHeaderNav();

  return (
    <header className="bg-neutral-700 text-white px-8 pt-8 pb-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <h1 className="text-3xl font-bold">정하림</h1>
        </Link>
        <p className="text-neutral-400 text-sm mt-1">디자인이 안떠올라요...</p>

        {isVisibleHeaderNav && (
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
        )}
      </div>
    </header>
  );
}
