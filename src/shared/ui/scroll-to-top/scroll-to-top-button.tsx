"use client";

import { PinTopIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const MIN_SCROLLABLE_HEIGHT = 120;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [renderable, setRenderable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const canRender = scrollableHeight > MIN_SCROLLABLE_HEIGHT;

      setRenderable(canRender);
      setVisible(canRender && window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!renderable) {
    return null;
  }

  return (
    <div
      className={`sticky bottom-8 flex justify-end pointer-events-none ${
        visible ? "" : "pointer-events-none"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        className={`pointer-events-auto z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-opacity duration-300 hover:bg-neutral-600 ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <PinTopIcon width={20} height={20} />
      </button>
    </div>
  );
}
