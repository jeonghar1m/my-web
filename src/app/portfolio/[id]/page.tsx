import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailHeader from "./_components/portfolio-detail-header";
import PortfolioDetailContent from "./_components/portfolio-detail-content";
import { getPortfolio } from "@/shared/api/portfolio";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const portfolio = await getPortfolio(Number(id));
  return { title: portfolio?.title ?? "Portfolio" };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const portfolio = await getPortfolio(Number(id));

  if (!portfolio) notFound();

  return (
    <>
      <PortfolioDetailHeader portfolio={portfolio} />
      <PortfolioDetailContent portfolio={portfolio} />
    </>
  );
}
