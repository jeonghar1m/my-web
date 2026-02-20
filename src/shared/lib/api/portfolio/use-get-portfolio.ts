"use client";

import { useQuery } from "@tanstack/react-query";
import { supabaseFrom } from "@/shared/lib/supabase/client";
import { Portfolio } from "@/shared/model/portfolio";
import dayjs from "dayjs";

async function getPortfolio(id: number): Promise<Portfolio> {
  const row = await supabaseFrom<Portfolio>((client) =>
    client.from("portfolio").select("*").eq("id", id).single()
  );

  return {
    id: row.id,
    title: row.title,
    thumbnailUrl: row.thumbnailUrl ?? undefined,
    githubUrl: row.githubUrl ?? undefined,
    productionUrl: row.productionUrl ?? undefined,
    startDate: row.startDate ? dayjs(row.startDate) : undefined,
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? "",
  };
}

export default function useGetPortfolio(id: number) {
  return useQuery({
    queryKey: ["portfolio", id],
    queryFn: () => getPortfolio(id),
  });
}
