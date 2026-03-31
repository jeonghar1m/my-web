"use client";

import { SortOrder } from "@/shared/api/portfolio";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

interface SortOrderButtonProps {
  currentSort: SortOrder;
}

export function SortOrderButton({ currentSort }: SortOrderButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    const nextSort: SortOrder = currentSort === "latest" ? "oldest" : "latest";
    startTransition(() => {
      router.replace(`${pathname}?sort=${nextSort}`);
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-neutral-900 disabled:opacity-50"
    >
      {currentSort === "latest" ? "최신순 ↓" : "과거순 ↑"}
    </button>
  );
}
