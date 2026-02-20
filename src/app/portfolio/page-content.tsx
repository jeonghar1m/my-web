"use client";

import { useGetPortfolioList } from "@/shared/lib/api/portfolio";
import PortfolioCard from "./portfolio-card";

export default function PortfolioPageContent() {
  const { data } = useGetPortfolioList();

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
