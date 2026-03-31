import PortfolioCard from "./_components/portfolio-card";
import { Portfolio } from "@/shared/model/portfolio";

interface PortfolioCardsProps {
  portfolios: Portfolio[];
}

export default function PortfolioCards({ portfolios }: PortfolioCardsProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {portfolios.map((portfolio) => (
        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
}
