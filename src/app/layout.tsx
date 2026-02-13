import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 bg-white px-8 py-12">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
