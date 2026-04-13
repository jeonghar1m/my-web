import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { SortOrder } from "@/shared/model/common";
import { Portfolio } from "@/shared/model/portfolio";
import toPortfolio, { PortfolioRecord } from "./to-portfolio";

const getPortfolios = async (sort?: string) => {
  const sortOrder: SortOrder = sort === "latest" ? "latest" : "oldest";

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
