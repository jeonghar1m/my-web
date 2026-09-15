import { notFound } from "next/navigation";
import {
  PortfolioDetailContent,
  PortfolioDetailHeader,
} from "@/app/_components/portfolio-detail";
import { getPortfolio } from "@/shared/api/portfolio";
import { ModalOverlay } from "@/shared/ui/modal";

export default async function PortfolioModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const portfolio = await getPortfolio(Number(id));

  if (!portfolio) notFound();

  return (
    <ModalOverlay
      ariaLabel={`${portfolio.title} 포트폴리오 상세`}
      header={<PortfolioDetailHeader portfolio={portfolio} />}
    >
      <PortfolioDetailContent portfolio={portfolio} headingLevel="h2" />
    </ModalOverlay>
  );
}
