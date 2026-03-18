import { Suspense } from "react";
import PortfolioDetailContent from "./portfolio-detail-content";
import PortfolioDetailSkeleton from "./portfolio-detail-skeleton";

export default function PortfolioDetailView({ id }: { id: number }) {
  return (
    <Suspense fallback={<PortfolioDetailSkeleton />}>
      <PortfolioDetailContent id={id} />
    </Suspense>
  );
}
