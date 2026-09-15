import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "zustand-demo.pmnd.rs",
        pathname: "/favicon.ico",
      },
      {
        protocol: "https",
        hostname: "emotion.sh",
        pathname: "/logo-48x48.png",
      },
      {
        protocol: "https",
        hostname: "playwright.dev",
        pathname: "/img/playwright-logo.svg",
      },
    ],
  },
};

export default nextConfig;
