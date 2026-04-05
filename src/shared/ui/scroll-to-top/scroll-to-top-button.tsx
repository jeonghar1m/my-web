"use client";

import { PinTopIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0);

      const footer = document.querySelector("#site-footer");
      if (!footer) {
        setFooterOffset(0);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const overlap = Math.max(0, window.innerHeight - footerRect.top);
      setFooterOffset(overlap);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-8 pointer-events-none [bottom:calc(env(safe-area-inset-bottom)+1.5rem)] ${
        visible ? "" : "pointer-events-none"
      }`}
      style={{ transform: `translateY(-${footerOffset}px)` }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        className={`pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-opacity duration-300 hover:bg-neutral-600 ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <PinTopIcon width={20} height={20} />
      </button>
    </div>
  );
}
