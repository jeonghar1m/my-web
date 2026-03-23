import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About site",
  description: "이 사이트에 대한 소개 및 사용 기술 스택",
};

const TECH_STACK = [
  {
    category: "Framework",
    items: [
      {
        name: "Next.js 16",
        description: "App Router 기반 풀스택 React 프레임워크",
        url: "https://nextjs.org",
      },
      {
        name: "React 19",
        description: "UI 구성을 위한 컴포넌트 기반 라이브러리",
        url: "https://react.dev",
      },
    ],
  },
  {
    category: "Styling",
    items: [
      {
        name: "Tailwind CSS v4",
        description:
          'PostCSS 플러그인 방식, OKLCH 색상 토큰 사용. @import "tailwindcss" 문법',
        url: "https://tailwindcss.com",
      },
      {
        name: "Radix UI",
        description:
          "접근성 중심의 헤드리스 UI 프리미티브 (Themes + Primitives)",
        url: "https://www.radix-ui.com",
      },
      {
        name: "shadcn/ui",
        description: "new-york 스타일, RSC 지원 컴포넌트 모음",
        url: "https://ui.shadcn.com",
      },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      {
        name: "Vercel",
        description:
          "Next.js 최적화 배포 플랫폼. Analytics & Speed Insights 연동",
        url: "https://vercel.com",
      },
    ],
  },
];

export default function AboutSitePage() {
  return (
    <main>
      {/* 소개 */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          About site
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-6">
          이 사이트에 대하여
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-700 mb-12" />

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
          기술 스택
        </h2>
        <div className="space-y-8">
          {TECH_STACK.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-8 sm:items-start"
                  >
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 sm:w-44 shrink-0 text-sm">
                      {item.name}
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
