import { supabaseServerFrom } from "@/shared/lib/supabase/server";
import { Portfolio } from "@/shared/model/portfolio";
import { cache } from "react";
import toPortfolio, { PortfolioRecord } from "./to-portfolio";

const getPortfolio = cache(async (id: number): Promise<Portfolio | null> => {
  try {
    const row = await supabaseServerFrom<PortfolioRecord>((client) =>
      client.from("portfolio").select("*").eq("id", id).single(),
    );
    return toPortfolio(row);
  } catch {
    return null;
  }
});

export default getPortfolio;
