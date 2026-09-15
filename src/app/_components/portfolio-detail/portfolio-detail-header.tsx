import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import type { Portfolio } from "@/shared/model/portfolio";

interface PortfolioDetailHeaderProps {
  portfolio: Portfolio;
}

export default function PortfolioDetailHeader({
  portfolio,
}: PortfolioDetailHeaderProps) {
  return (
    <BreadcrumbNav
      items={[
        { label: "포트폴리오", href: "/portfolio" },
        { label: portfolio.title },
      ]}
    />
  );
}
