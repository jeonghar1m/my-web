import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Portfolio, PortfolioRow } from "@/shared/model/portfolio";
import dayjs from "dayjs";

export type PortfolioSortOrder = "latest" | "oldest";

const getPortfolios = async (sort?: string) => {
  const sortOrder: PortfolioSortOrder = sort === "oldest" ? "oldest" : "latest";

  const rows = await supabaseServerFrom<PortfolioRow[]>((client) =>
    client
      .from("portfolio")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  const portfolios: Portfolio[] = rows.map((row) => ({
    id: row.id,
    title: row.title,
    thumbnailUrl: row.thumbnailUrl ?? undefined,
    githubUrl: row.githubUrl ?? undefined,
    productionUrl: row.productionUrl ?? undefined,
    startDate: dayjs(row.startDate),
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? "",
  }));

  return portfolios;
};

export default getPortfolios;
