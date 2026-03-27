"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/shared/lib/utils/common";

export interface TechItem {
  name: string;
  description: string;
  url?: string;
  category: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface TechDetailModalProps {
  tech: TechItem;
  onClose: () => void;
}

export default function TechDetailModal({ tech, onClose }: TechDetailModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = e.changedTouches[0].clientY - touchStartY.current;
    touchStartY.current = null;

    if (delta < -40) {
      setIsExpanded(true);
    } else if (delta > 40) {
      if (isExpanded) {
        setIsExpanded(false);
      } else {
        onClose();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "flex w-full flex-col overflow-hidden",
          "transition-[height,border-radius] duration-300 ease-in-out",
          "sm:max-w-lg sm:max-h-[90dvh] sm:rounded-2xl sm:h-auto",
          "bg-white shadow-2xl",
          "dark:bg-neutral-900",
          isExpanded
            ? "h-[100dvh] rounded-none"
            : "h-[85dvh] rounded-t-2xl",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 드래그 핸들 — 모바일 전용 */}
        <div
          className="flex flex-none touch-none cursor-grab select-none flex-col items-center pb-1 pt-3 sm:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        </div>

        <div
          className="flex flex-none items-center gap-2 px-6 py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="min-w-0 flex-1">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {tech.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className={cn(
              "ml-auto cursor-pointer rounded-full p-2",
              "text-neutral-400 transition-colors",
              "hover:bg-neutral-100 hover:text-neutral-900",
              "dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
            )}
            aria-label="닫기"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl text-neutral-700 dark:text-neutral-300">
              <tech.Icon />
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {tech.name}
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            {tech.description}
          </p>
          {tech.url && (
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
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
