import { useState } from "react";

export type SortOrder = "latest" | "oldest";

export function useSortOrder(defaultOrder?: SortOrder) {
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultOrder ?? "oldest");
  const toggle = () =>
    setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"));
  return { sortOrder, toggle };
}
