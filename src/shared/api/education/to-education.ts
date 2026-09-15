import dayjs from "dayjs";
import { ENROLLMENT_STATUS } from "@/shared/model/education";
import type { Education, EnrollmentStatus } from "@/shared/model/education";

type EducationRecord = Omit<
  Education,
  "description" | "startDate" | "endDate" | "enrollmentStatus"
> & {
  description: string | null;
  startDate: string;
  endDate: string | null;
  enrollmentStatus: string;
};

const isEnrollmentStatus = (value: string): value is EnrollmentStatus =>
  Object.values(ENROLLMENT_STATUS).some((status) => status === value);

const toEducation = (row: EducationRecord): Education => {
  if (!isEnrollmentStatus(row.enrollmentStatus)) {
    throw new Error(`알 수 없는 학적 상태입니다: ${row.enrollmentStatus}`);
  }

  return {
    id: row.id,
    title: row.title,
    major: row.major,
    enrollmentStatus: row.enrollmentStatus,
    startDate: dayjs(row.startDate),
    endDate: row.endDate ? dayjs(row.endDate) : undefined,
    description: row.description ?? undefined,
    location: row.location,
  };
};

export type { EducationRecord };
export default toEducation;
