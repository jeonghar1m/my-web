import { MarkdownRenderer } from "@/shared/ui/markdown";
import { Portfolio } from "@/shared/model/portfolio";
import PortfolioInfoBox from "./portfolio-info-box";

export default function PortfolioDetailContent({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{portfolio.title}</h2>
      <PortfolioInfoBox portfolio={portfolio} />
      <MarkdownRenderer content={portfolio.description || ""} />
    </div>
  );
}
