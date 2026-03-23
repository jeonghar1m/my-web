import Link from "next/link";
import { visibleHeaderNav } from "@/flags";

export default async function Nav() {
  const isVisibleHeaderNav = await visibleHeaderNav();

  if (!isVisibleHeaderNav) return null;
  return (
    <nav className="mt-6 flex gap-3">
      <Link
        href="/about-site"
        className="border border-neutral-500 px-5 py-1.5 text-sm text-neutral-300 hover:text-white hover:border-neutral-300 transition-colors"
      >
        About site
      </Link>
    </nav>
  );
}
