/* eslint-disable @next/next/no-img-element */

export function ZustandIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://zustand-demo.pmnd.rs/favicon.ico"
      alt="Zustand"
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}

export function EmotionIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://emotion.sh/logo-48x48.png"
      alt="Emotion"
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}

export function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://playwright.dev/img/playwright-logo.svg"
      alt="Playwright"
      className={`grayscale opacity-90 ${className ?? ""}`.trim()}
      aria-hidden="true"
    />
  );
}
