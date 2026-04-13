import { Career } from "@/shared/model/career";
import dayjs from "dayjs";

type CareerRecord = Omit<
  Career,
  "companyUrl" | "startDate" | "endDate" | "description" | "workingPlace"
> & {
  companyUrl: string | null;
  startDate: string;
  endDate: string | null;
  description: string | null;
  workingPlace: string | null;
};

const toCareer = (row: CareerRecord): Career => ({
  id: row.id,
  title: row.title,
  companyUrl: row.companyUrl ?? undefined,
  startDate: dayjs(row.startDate),
  endDate: row.endDate ? dayjs(row.endDate) : undefined,
  description: row.description ?? undefined,
  workingPlace: row.workingPlace ?? undefined,
});

export type { CareerRecord };
export default toCareer;
