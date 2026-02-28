import { Suspense } from "react";
import PortfolioPageContent from "./page-content";
import PortfolioListSkeleton from "./portfolio-list-skeleton";

export const dynamic = "force-dynamic";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<PortfolioListSkeleton />}>
      <PortfolioPageContent />
    </Suspense>
  );
}
