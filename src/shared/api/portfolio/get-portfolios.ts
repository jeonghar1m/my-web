import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import type { SortOrder } from "@/shared/model/common";
import type { Portfolio } from "@/shared/model/portfolio";
import toPortfolio, { type PortfolioRecord } from "./to-portfolio";

const getPortfolios = async (sortOrder: SortOrder = "oldest") => {
  const rows = await supabaseServerFrom<PortfolioRecord[]>((client) =>
    client
      .from("portfolio")
      .select("*")
      .order("startDate", { ascending: sortOrder !== "latest" }),
  );

  const portfolios: Portfolio[] = rows.map(toPortfolio);

  return portfolios;
};

export default getPortfolios;
