import type { Metadata } from "next";
import { getPortfolios } from "@/shared/api/portfolio";
import PortfolioList from "./portfolio-list";
import { SortOrder } from "@/shared/model/common";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "정하림의 포트폴리오 프로젝트 모음",
};

interface PortfolioPageProps {
  searchParams: Promise<{ sort?: string }>;
}

export default async function PortfolioPage({
  searchParams,
}: PortfolioPageProps) {
  const { sort: sortParam } = await searchParams;
  const sort: SortOrder = sortParam === "latest" ? "latest" : "oldest";

  const portfolios = await getPortfolios(sort);

  return (
    <PortfolioList
      portfolios={portfolios}
      currentSort={sort}
      visibleOrderButton
    />
  );
}
