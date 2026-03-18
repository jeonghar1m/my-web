import type { SortOrder } from "./use-sort-order";

interface SortOrderButtonProps {
  sortOrder: SortOrder;
  onToggle: () => void;
}

export function SortOrderButton({ sortOrder, onToggle }: SortOrderButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-neutral-900"
    >
      {sortOrder === "latest" ? "최신순 ↓" : "과거순 ↑"}
    </button>
  );
}
