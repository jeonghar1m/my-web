import { Dayjs } from "dayjs";
import { CommonModel } from "./common";

export interface Career extends CommonModel {
  companyUrl?: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  description?: string;
  workingPlace?: string;
}
