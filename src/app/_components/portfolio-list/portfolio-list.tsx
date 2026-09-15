import Link from "next/link";
import type { SortOrder } from "@/shared/model/common";
import type { Portfolio } from "@/shared/model/portfolio";
import { SortOrderButton } from "@/shared/ui/sort-order-button";
import PortfolioCard from "./_parts/portfolio-card";

interface PortfolioListProps {
  portfolios: Portfolio[];
  currentSort?: SortOrder;
  headingLevel?: "h1" | "h2";
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function PortfolioList({
  portfolios,
  currentSort = "oldest",
  headingLevel = "h2",
  visibleOrderButton = false,
  limit,
}: PortfolioListProps) {
  const hasLimit = typeof limit === "number";
  const displayPortfolios = hasLimit ? portfolios.slice(0, limit) : portfolios;
  const Heading = headingLevel;

  return (
    <section className="w-full" aria-labelledby="portfolio-list-heading">
      <div className="mb-6 flex items-center justify-between">
        <Heading
          id="portfolio-list-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-neutral-100"
        >
          포트폴리오
        </Heading>
        {visibleOrderButton && <SortOrderButton currentSort={currentSort} />}
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayPortfolios.map((portfolio) => (
          <li key={portfolio.id}>
            <PortfolioCard portfolio={portfolio} />
          </li>
        ))}
      </ul>
      {hasLimit && (
        <div className="mt-6 text-center">
          <Link
            href="/portfolio"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-800"
          >
            전체 보기 →
          </Link>
        </div>
      )}
    </section>
  );
}

