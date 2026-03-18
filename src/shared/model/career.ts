import { Dayjs } from "dayjs";
import { CommonModel } from "./common";

export interface Career extends CommonModel {
  title: string;
  companyUrl?: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  description?: string;
}
