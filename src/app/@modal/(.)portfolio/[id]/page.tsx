import { notFound } from "next/navigation";
import { ModalOverlay } from "@/shared/ui/modal";
import PortfolioDetailHeader from "@/app/portfolio/[id]/_components/portfolio-detail-header";
import PortfolioDetailContent from "@/app/portfolio/[id]/_components/portfolio-detail-content";
import { getPortfolio } from "@/shared/api/portfolio";

export default async function PortfolioModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const portfolio = await getPortfolio(Number(id));

  if (!portfolio) notFound();

  return (
    <ModalOverlay header={<PortfolioDetailHeader portfolio={portfolio} />}>
      <PortfolioDetailContent portfolio={portfolio} />
    </ModalOverlay>
  );
}
