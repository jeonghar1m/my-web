"use client";

import { SortOrderButton } from "@/shared/ui/sort-order-button";
import PortfolioCards from "./portfolio-cards";
import Link from "next/link";
import { SortOrder } from "@/shared/model/common";
import useGetPortfolioList from "@/shared/lib/api/portfolio/use-get-portfolio-list";

interface PortfolioListProps {
  currentSort?: SortOrder;
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function PortfolioList({
  currentSort = "oldest",
  visibleOrderButton = false,
  limit,
}: PortfolioListProps) {
  const { data: portfolios } = useGetPortfolioList(currentSort);
  const displayPortfolios = limit ? portfolios.slice(0, limit) : portfolios;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">포트폴리오</h2>
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
