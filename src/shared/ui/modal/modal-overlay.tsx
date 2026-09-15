"use client";

import { ScrollArea } from "@radix-ui/themes";
import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type TouchEvent,
} from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ModalOverlayProps {
  ariaLabel: string;
  children: ReactNode;
  header?: ReactNode;
  /** 제공하면 router.back() 대신 호출됩니다 (비라우터 모달용) */
  onClose?: () => void;
  /** 모달 최대 너비. 기본값 "default" = max-w-3xl, "sm" = max-w-lg */
  size?: "default" | "sm";
}

export default function ModalOverlay({
  ariaLabel,
  children,
  header,
  onClose,
  size = "default",
}: ModalOverlayProps) {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
      return;
    }

    router.back();
  }, [onClose, router]);

  const handleLinkCapture = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      // onClose 모드(비라우터)일 때는 내부 링크 캡처 불필요
      if (onClose) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#")
      )
        return;

      event.preventDefault();
      event.stopPropagation();

      const onPopState = () => {
        window.removeEventListener("popstate", onPopState);
        if (window.location.pathname !== href) {
          router.push(href);
        }
      };
      window.addEventListener("popstate", onPopState);
      router.back();
    },
    [onClose, router],
  );

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    handleClose();
  };

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = event.changedTouches[0].clientY - touchStartY.current;
    touchStartY.current = null;

    if (delta < -40) {
      setIsExpanded(true);
      return;
    }

    if (delta <= 40) return;
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }

    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center"
      onClick={handleBackdropClick}
      aria-label={ariaLabel}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "flex w-full flex-col overflow-hidden",
          "transition-[height,border-radius] duration-300 ease-in-out",
          "sm:max-h-[90dvh] sm:rounded-2xl sm:h-auto",
          size === "sm" ? "sm:max-w-lg" : "sm:max-w-3xl",
          "bg-white shadow-2xl",
          "dark:bg-neutral-900",
          isExpanded
            ? "h-[100dvh] rounded-none"
            : "h-[85dvh] rounded-t-2xl",
        )}
        onClickCapture={handleLinkCapture}
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
          className="flex flex-none items-center gap-2 px-6 py-4 sm:pt-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {header != null && (
            <div className="min-w-0 flex-1">
              <Suspense fallback={null}>{header}</Suspense>
            </div>
          )}
          <button
            type="button"
            onClick={handleClose}
            className={cn(
              "ml-auto cursor-pointer rounded-full p-2",
              "text-neutral-400 transition-colors",
              "hover:bg-neutral-100 hover:text-neutral-900",
              "dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
            )}
            aria-label="닫기"
          >
            <X size={20} aria-hidden />
          </button>
        </div>
        <ScrollArea type="auto" scrollbars="vertical" className="min-h-0 flex-1">
          <div className="px-8 pb-8">{children}</div>
        </ScrollArea>
      </div>
    </div>
  );
}
