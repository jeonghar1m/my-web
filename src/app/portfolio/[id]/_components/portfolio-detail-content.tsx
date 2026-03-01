"use client";

import { Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { useGetPortfolio } from "@/shared/lib/api/portfolio";
import { MarkdownRenderer } from "@/shared/ui/markdown";
import PortfolioInfoBox from "./portfolio-info-box";

export default function PortfolioDetailContent({ id }: { id: number }) {
  const { data: portfolio, isError } = useGetPortfolio(id);

  if (isError) notFound();

  return (
    <Flex direction="column" gap="4">
      <h2 className="text-2xl font-bold">{portfolio?.title}</h2>
      <PortfolioInfoBox portfolio={portfolio} />
      <MarkdownRenderer content={portfolio?.description || ""} />
    </Flex>
  );
}
