import { SortOrderButton } from "@/shared/ui/sort-order-button";
import PortfolioCards from "./portfolio-cards";
import Link from "next/link";
import { Portfolio } from "@/shared/model/portfolio";
import { SortOrder } from "@/shared/model/common";

interface PortfolioListProps {
  portfolios: Portfolio[];
  currentSort?: SortOrder;
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function PortfolioList({
  portfolios,
  currentSort = "oldest",
  visibleOrderButton = false,
  limit,
}: PortfolioListProps) {
  const displayPortfolios = limit ? portfolios.slice(0, limit) : portfolios;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">포트폴리오</h2>
        {visibleOrderButton && <SortOrderButton currentSort={currentSort} />}
      </div>
      <PortfolioCards portfolios={displayPortfolios} />
      {limit && (
        <div className="mt-6 text-center">
          <Link
            href="/portfolio"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            전체 보기 →
          </Link>
        </div>
      )}
    </section>
  );
}
