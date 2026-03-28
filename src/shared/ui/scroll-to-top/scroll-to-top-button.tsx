"use client";

import { PinTopIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로"
      className={`fixed bottom-8 right-8 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-opacity duration-300 hover:bg-neutral-600 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <PinTopIcon width={20} height={20} />
    </button>
  );
}
