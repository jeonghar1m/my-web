"use client";

import dynamic from "next/dynamic";
import PortfolioListSkeleton from "./portfolio/portfolio-list-skeleton";

const PortfolioPageContent = dynamic(() => import("./portfolio/page-content"), {
  ssr: false,
  loading: () => <PortfolioListSkeleton />,
});

export default function PortfolioSection() {
  return <PortfolioPageContent visibleOrderButton />;
}
