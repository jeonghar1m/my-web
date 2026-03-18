import { useGetPortfolioList } from "@/shared/lib/api/portfolio";
import { useMemo } from "react";
import PortfolioCard from "./_components/portfolio-card";
import type { SortOrder } from "@/shared/ui/sort-order-button";

interface PortfolioCardsProps {
  sortOrder: SortOrder;
}

export default function PortfolioCards({ sortOrder }: PortfolioCardsProps) {
  const { data: portfolios } = useGetPortfolioList();

  const sortedPortfolios = useMemo(() => {
    return [...(portfolios ?? [])].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.startDate.isBefore(a.startDate) ? -1 : 1;
      }
      return a.startDate.isBefore(b.startDate) ? -1 : 1;
    });
  }, [portfolios, sortOrder]);

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedPortfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
