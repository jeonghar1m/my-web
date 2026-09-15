"use client";

import { ExternalLink } from "lucide-react";
import type { ComponentType } from "react";
import { cn } from "@/shared/lib/utils";
import ModalOverlay from "@/shared/ui/modal/modal-overlay";

export interface TechItem {
  name: string;
  description: string;
  url?: string;
  category: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface TechDetailModalProps {
  tech: TechItem;
  onClose: () => void;
}

export default function TechDetailModal({ tech, onClose }: TechDetailModalProps) {
  const header = (
    <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
      {tech.category}
    </span>
  );

  return (
    <ModalOverlay
      ariaLabel={`${tech.name} 기술 상세`}
      onClose={onClose}
      size="sm"
      header={header}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-neutral-700 dark:text-neutral-300">
          <tech.Icon className="h-9 w-9" aria-hidden />
        </div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          {tech.name}
        </h2>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        {tech.description}
      </p>
      {Boolean(tech.url) && (
        <a
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 text-sm",
            "text-neutral-500 hover:text-neutral-900",
            "dark:text-neutral-400 dark:hover:text-neutral-100",
            "transition-colors",
          )}
        >
          공식 사이트
          <ExternalLink size={14} aria-hidden />
        </a>
      )}
    </ModalOverlay>
  );
}
