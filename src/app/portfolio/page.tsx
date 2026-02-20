import { Suspense } from "react";
import PortfolioPageContent from "./page-content";
import PortfolioListSkeleton from "./portfolio-list-skeleton";

export default function PortfolioPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">포트폴리오</h2>
      <Suspense fallback={<PortfolioListSkeleton />}>
        <PortfolioPageContent />
      </Suspense>
    </div>
  );
}
