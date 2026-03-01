"use client";

import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import { useGetPortfolio } from "@/shared/lib/api/portfolio";

export default function PortfolioDetailHeader({ id }: { id: number }) {
  const { data } = useGetPortfolio(id);

  return (
    <BreadcrumbNav
      items={[
        { label: "포트폴리오", href: "/portfolio" },
        { label: data?.title || "" },
      ]}
    />
  );
}
