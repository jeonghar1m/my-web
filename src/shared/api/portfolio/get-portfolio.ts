import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Portfolio, PortfolioRow } from "@/shared/model/portfolio";
import dayjs from "dayjs";
import { cache } from "react";

const getPortfolio = cache(async (id: number): Promise<Portfolio | null> => {
  try {
    const row = await supabaseServerFrom<PortfolioRow>((client) =>
      client.from("portfolio").select("*").eq("id", id).single(),
    );
    return {
      id: row.id,
      title: row.title,
      thumbnailUrl: row.thumbnailUrl ?? undefined,
      githubUrl: row.githubUrl ?? undefined,
      productionUrl: row.productionUrl ?? undefined,
      startDate: dayjs(row.startDate),
      endDate: row.endDate ? dayjs(row.endDate) : undefined,
      description: row.description ?? "",
    };
  } catch {
    return null;
  }
});

export default getPortfolio;
