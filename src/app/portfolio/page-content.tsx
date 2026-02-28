"use client";

import { useMemo } from "react";
import { useGetPortfolioList } from "@/shared/lib/api/portfolio";
import { SortOrderButton, useSortOrder } from "@/shared/ui/sort-order-button";
import PortfolioCard from "./portfolio-card";

interface PortfolioPageContentProps {
  visibleOrderButton?: boolean;
}

export default function PortfolioPageContent({
  visibleOrderButton = false,
}: PortfolioPageContentProps) {
  const { data: portfolios } = useGetPortfolioList();
  const { sortOrder, toggle } = useSortOrder();

  const sortedPortfolios = useMemo(() => {
    return [...(portfolios ?? [])].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.startDate.isBefore(a.startDate) ? -1 : 1;
      }
      return a.startDate.isBefore(b.startDate) ? -1 : 1;
    });
  }, [portfolios, sortOrder]);

  return (
    <section className="mt-12 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">포트폴리오</h2>
        {visibleOrderButton && (
          <SortOrderButton sortOrder={sortOrder} onToggle={toggle} />
        )}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPortfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </section>
  );
}
