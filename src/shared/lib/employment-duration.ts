import dayjs, { Dayjs } from "dayjs";

export function getEmploymentDuration(startDate: Dayjs, endDate?: Dayjs): string {
  const end = endDate ?? dayjs();
  const totalMonths = end.diff(startDate, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  if (parts.length === 0) parts.push("1개월 미만");

  return `(${parts.join(" ")})`;
}
