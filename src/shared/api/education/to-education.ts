import { ENROLLMENT_STATUS, Education } from "@/shared/model/education";
import dayjs from "dayjs";

type EducationRecord = Omit<Education, "description" | "startDate" | "endDate"> & {
  description: string | null;
  startDate: string;
  endDate: string | null;
};

const toEducation = (row: EducationRecord): Education => ({
  id: row.id,
  title: row.title,
  major: row.major,
  enrollmentStatus: row.enrollmentStatus as ENROLLMENT_STATUS,
  startDate: dayjs(row.startDate),
  endDate: row.endDate ? dayjs(row.endDate) : undefined,
  description: row.description ?? undefined,
  location: row.location,
});

export type { EducationRecord };
export default toEducation;
