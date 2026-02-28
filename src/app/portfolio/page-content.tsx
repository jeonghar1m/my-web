"use client";

import { useMemo, useState } from "react";
import { useGetPortfolioList } from "@/shared/lib/api/portfolio";
import PortfolioCard from "./portfolio-card";

type SortOrder = "latest" | "oldest";

interface PortfolioPageContentProps {
  visibleOrderButton?: boolean;
}

export default function PortfolioPageContent({
  visibleOrderButton = false,
}: PortfolioPageContentProps) {
  const { data: portfolios } = useGetPortfolioList();
  const [sortOrder, setSortOrder] = useState<SortOrder>("oldest");

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
      {visibleOrderButton && (
        <div className="flex justify-end mb-2">
          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"))
            }
            className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            {sortOrder === "latest" ? "최신순 ↓" : "과거순 ↑"}
          </button>
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPortfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </section>
  );
}
