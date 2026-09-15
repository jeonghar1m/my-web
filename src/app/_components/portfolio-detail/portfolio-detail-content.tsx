import { MarkdownRenderer } from "@/shared/ui/markdown";
import type { Portfolio } from "@/shared/model/portfolio";
import PortfolioInfoBox from "./_parts/portfolio-info-box";

interface PortfolioDetailContentProps {
  portfolio: Portfolio;
  headingLevel?: "h1" | "h2";
}

export default function PortfolioDetailContent({
  portfolio,
  headingLevel = "h1",
}: PortfolioDetailContentProps) {
  const Heading = headingLevel;

  return (
    <div className="flex flex-col gap-4">
      <Heading className="text-2xl font-bold">{portfolio.title}</Heading>
      <PortfolioInfoBox portfolio={portfolio} />
      <MarkdownRenderer content={portfolio.description} />
    </div>
  );
}
