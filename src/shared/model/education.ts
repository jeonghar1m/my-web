import { Dayjs } from "dayjs";
import { CommonModel } from "./common";

export const ENROLLMENT_STATUS = {
  /** 재학 */
  ATTENDING: "ATTENDING",
  /** 졸업(학사) */
  GRADUATED: "GRADUATED",
  /** 중퇴 */
  DROPPED: "DROPPED",
  /** 휴학 */
  LEAVE: "LEAVE",
  /** 수료 */
  COMPLETED: "COMPLETED",
} as const;

export type ENROLLMENT_STATUS = keyof typeof ENROLLMENT_STATUS;

export const ENROLLMENT_STATUS_LABEL: Record<ENROLLMENT_STATUS, string> = {
  ATTENDING: "재학",
  GRADUATED: "졸업(학사)",
  DROPPED: "중퇴",
  LEAVE: "휴학",
  COMPLETED: "수료",
};

export interface Education extends CommonModel {
  description?: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  enrollmentStatus: ENROLLMENT_STATUS;
  major: string;
  location: string;
}
