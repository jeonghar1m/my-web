import PortfolioData from "./portfolio-data";
import PortfolioCard from "./portfolio-card";

export default function PortfolioPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">포트폴리오</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PortfolioData.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  );
}
