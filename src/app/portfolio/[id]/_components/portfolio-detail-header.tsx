import { BreadcrumbNav } from "@/shared/ui/breadcrumb";
import { Portfolio } from "@/shared/model/portfolio";

export default function PortfolioDetailHeader({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <BreadcrumbNav
      items={[
        { label: "포트폴리오", href: "/portfolio" },
        { label: portfolio.title },
      ]}
    />
  );
}
