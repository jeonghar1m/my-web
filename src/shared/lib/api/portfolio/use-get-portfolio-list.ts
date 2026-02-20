"use client";

import { useQuery } from "@tanstack/react-query";
import { supabaseFrom } from "@/shared/lib/supabase/client";
import { Portfolio } from "@/shared/model/portfolio";
import dayjs from "dayjs";

async function getPortfolioList(): Promise<Portfolio[]> {
  const rows = await supabaseFrom<Portfolio[]>((client) =>
    client.from("portfolio").select("*").order("id"),
  );

  return rows.map((item) => ({
    id: item.id,
    title: item.title,
    thumbnailUrl: item.thumbnailUrl ?? undefined,
    githubUrl: item.githubUrl ?? undefined,
    productionUrl: item.productionUrl ?? undefined,
    startDate: item.startDate ? dayjs(item.startDate) : undefined,
    endDate: item.endDate ? dayjs(item.endDate) : undefined,
    description: item.description ?? "",
  }));
}

export default function useGetPortfolioList() {
  return useQuery({
    queryKey: ["portfolio", "list"],
    queryFn: getPortfolioList,
  });
}
