import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Header from "@/widgets/header/header";
import Footer from "@/widgets/footer/footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정하림",
  description: "프론트엔드 개발자 정하림의 포트폴리오 웹사이트",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />
          <main className="flex-1 bg-white px-8 py-12">
            <div className="max-w-4xl mx-auto">{children}</div>
          </main>
          <Footer />
          {modal}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
