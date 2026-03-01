import PortfolioDetailView from "./_components/portfolio-detail-view";

export const dynamic = "force-dynamic";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PortfolioDetailView id={+id} />;
}
