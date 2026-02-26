import { Dayjs } from "dayjs";
import { CommonModel } from "./common";

export interface Portfolio extends CommonModel {
  title: string;
  thumbnailUrl?: string;
  githubUrl?: string;
  /** NOTE: 배포된 사이트 Url */
  productionUrl?: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  description: string;
}
