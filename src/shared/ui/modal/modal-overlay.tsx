"use client";

import { ReactNode, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/shared/lib/utils/common";

interface ModalOverlayProps {
  children: ReactNode;
}

export default function ModalOverlay({ children }: ModalOverlayProps) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  const handleLinkCapture = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (e.target as HTMLElement).closest(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#")
      )
        return;

      e.preventDefault();
      e.stopPropagation();

      // router.push() alone does not clear the @modal parallel route slot.
      // Close the modal first via router.back(), then navigate to the destination
      // only if the previous page is not already the target href.
      const onPopState = () => {
        window.removeEventListener("popstate", onPopState);
        if (window.location.pathname !== href) {
          router.push(href);
        }
      };
      window.addEventListener("popstate", onPopState);
      router.back();
    },
    [router],
  );

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto",
          "rounded-2xl bg-white p-8 shadow-2xl",
          "dark:bg-neutral-900",
        )}
        onClick={(e) => e.stopPropagation()}
        onClickCapture={handleLinkCapture}
      >
        <button
          onClick={handleClose}
          className={cn(
            "absolute right-4 top-4 cursor-pointer rounded-full p-2",
            "text-neutral-400 transition-colors",
            "hover:bg-neutral-100 hover:text-neutral-900",
            "dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          )}
          aria-label="닫기"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
