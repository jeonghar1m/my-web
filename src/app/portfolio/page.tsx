import type { Metadata } from "next";
import PortfolioList from "./portfolio-list";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "정하림의 포트폴리오 프로젝트 모음",
};

export default function PortfolioPage() {
  return <PortfolioList />;
}
