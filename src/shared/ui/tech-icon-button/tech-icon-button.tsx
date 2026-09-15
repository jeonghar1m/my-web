"use client";

import type { ComponentType } from "react";
import { cn } from "@/shared/lib/utils";

interface TechIconButtonProps {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  name: string;
  onClick: () => void;
}

export default function TechIconButton({
  icon: Icon,
  name,
  onClick,
}: TechIconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 p-3 rounded-xl w-[76px]",
        "text-neutral-600 dark:text-neutral-400",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "transition-colors",
        "cursor-pointer",
      )}
      aria-label={name}
    >
      <Icon className="w-8 h-8 flex-shrink-0" aria-hidden />
      <span className="text-xs text-center leading-tight text-neutral-500 dark:text-neutral-500 line-clamp-2">
        {name}
      </span>
    </button>
  );
}
