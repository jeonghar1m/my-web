import Image from "next/image";

export function ZustandIcon({ className }: { className?: string }) {
  return (
    <Image
      src="https://zustand-demo.pmnd.rs/favicon.ico"
      alt=""
      width={32}
      height={32}
      unoptimized
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}

export function EmotionIcon({ className }: { className?: string }) {
  return (
    <Image
      src="https://emotion.sh/logo-48x48.png"
      alt=""
      width={32}
      height={32}
      unoptimized
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}

export function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <Image
      src="https://playwright.dev/img/playwright-logo.svg"
      alt=""
      width={32}
      height={32}
      unoptimized
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}
