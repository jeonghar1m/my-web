"use client";

import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";
import PortfolioCards from "./portfolio-cards";
import { Suspense } from "react";
import PortfolioListSkeleton from "./_components/portfolio-list-skeleton";
import Link from "next/link";

interface PortfolioPageContentProps {
  visibleOrderButton?: boolean;
  limit?: number;
}

export default function PortfolioList({
  visibleOrderButton = false,
  limit,
}: PortfolioPageContentProps) {
  const { sortOrder, toggle } = useSortOrder();

  return (
    <section className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">포트폴리오</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <Suspense fallback={<PortfolioListSkeleton />}>
        <PortfolioCards sortOrder={sortOrder} limit={limit} />
      </Suspense>
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
