import { Portfolio } from "@/shared/model/portfolio";
import dayjs from "dayjs";

type PortfolioRecord = Omit<
  Portfolio,
  | "thumbnailUrl"
  | "githubUrl"
  | "productionUrl"
  | "startDate"
  | "endDate"
  | "description"
> & {
  thumbnailUrl: string | null;
  githubUrl: string | null;
  productionUrl: string | null;
  startDate: string;
  endDate: string | null;
  description: string | null;
};

const toPortfolio = (row: PortfolioRecord): Portfolio => ({
  id: row.id,
  title: row.title,
  thumbnailUrl: row.thumbnailUrl ?? undefined,
  githubUrl: row.githubUrl ?? undefined,
  productionUrl: row.productionUrl ?? undefined,
  startDate: dayjs(row.startDate),
  endDate: row.endDate ? dayjs(row.endDate) : undefined,
  description: row.description ?? "",
  teamProject: row.teamProject,
});

export type { PortfolioRecord };
export default toPortfolio;
