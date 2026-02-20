import { Suspense } from "react";
import PortfolioDetailContent from "./portfolio-detail-content";
import PortfolioDetailSkeleton from "./portfolio-detail-skeleton";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<PortfolioDetailSkeleton />}>
      <PortfolioDetailContent id={+id} />
    </Suspense>
  );
}
