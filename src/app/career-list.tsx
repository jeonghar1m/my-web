"use client";

import { useMemo, useState } from "react";

const careers = [
  {
    company: "트라이얼인포매틱스",
    period: "2025.08 ~ 현재",
    startDate: "2025-08",
  },
  {
    company: "스터닝",
    period: "2022.07 ~ 2025.07",
    startDate: "2022-07",
  },
];

type SortOrder = "latest" | "oldest";

export default function CareerList() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("latest");

  const sortedCareers = useMemo(() => {
    return [...careers].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.startDate.localeCompare(a.startDate);
      }
      return a.startDate.localeCompare(b.startDate);
    });
  }, [sortOrder]);

  return (
    <section className="mt-12 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">경력</h3>
        <button
          onClick={() =>
            setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"))
          }
          className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          {sortOrder === "latest" ? "최신순 ↓" : "과거순 ↑"}
        </button>
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        {sortedCareers.map((career) => (
          <li
            key={career.company}
            className="flex items-center justify-between rounded-lg border border-neutral-200 px-5 py-4"
          >
            <span className="font-semibold text-neutral-900">
              {career.company}
            </span>
            <span className="text-sm text-neutral-500">{career.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
