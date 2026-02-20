import { Dayjs } from "dayjs";

export interface Portfolio {
  id: number;
  title: string;
  thumbnailUrl?: string;
  githubUrl?: string;
  /** NOTE: 배포된 사이트 Url */
  productionUrl?: string;
  startDate?: Dayjs;
  endDate?: Dayjs;
  description: string;
}
