"use client";

import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiVercel,
  SiSupabase,
  SiRadixui,
  SiRedux,
  SiZod,
  SiVitest,
} from "react-icons/si";
import { TechIconButton } from "@/shared/ui/tech-icon-button";
import { TechDetailModal, type TechItem } from "@/shared/ui/tech-detail-modal";

function ZustandIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://zustand-demo.pmnd.rs/favicon.ico"
      alt="Zustand"
      className={className}
      aria-hidden="true"
    />
  );
}

function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://playwright.dev/img/playwright-logo.svg"
      alt="Playwright"
      className={className}
      aria-hidden="true"
    />
  );
}

function EmotionIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://emotion.sh/logo-48x48.png"
      alt="Emotion"
      className={className}
      aria-hidden="true"
    />
  );
}

const TECH_STACK: TechItem[] = [
  {
    category: "Framework",
    name: "Next.js 16",
    description:
      "사이트 전체의 기반 프레임워크. App Router로 포트폴리오·커리어 동적 라우트를 구성하고, 병렬 라우트(@modal)로 URL 기반 모달을 구현",
    url: "https://nextjs.org",
    Icon: SiNextdotjs,
  },
  {
    category: "Library",
    name: "React 19",
    description:
      "서버 컴포넌트를 기본으로 사용하고, 상호작용이 필요한 부분에만 'use client'를 적용해 클라이언트 번들을 최소화",
    url: "https://react.dev",
    Icon: SiReact,
  },
  {
    category: "Library",
    name: "Zustand",
    description:
      "경량 전역 상태 관리 라이브러리. Flux 패턴 없이 간결한 API로 클라이언트 상태를 정의하고, persist 미들웨어로 localStorage 연동도 지원",
    url: "https://zustand-demo.pmnd.rs",
    Icon: ZustandIcon,
  },
  {
    category: "Library",
    name: "Redux",
    description:
      "예측 가능한 상태 컨테이너. 단방향 데이터 흐름과 Redux Toolkit으로 복잡한 상태 로직을 구조화하는 데 활용",
    url: "https://redux.js.org",
    Icon: SiRedux,
  },
  {
    category: "Library",
    name: "Zod",
    description:
      "TypeScript-first 스키마 선언 및 유효성 검사 라이브러리. API 응답이나 폼 입력 데이터의 런타임 타입 검사에 사용",
    url: "https://zod.dev",
    Icon: SiZod,
  },
  {
    category: "Library",
    name: "TanStack Query",
    description:
      "이 프로젝트에서는 현재 TanStack Query를 사용하지 않고 있으며, 데이터 조회는 Next.js 서버 컴포넌트 기반 패턴으로 정리되어 있음. 과거 실험 단계에서 prefetch/hydration 패턴을 검토한 이력이 있음",
    url: "https://tanstack.com/query",
    Icon: SiReactquery,
  },
  {
    category: "Styling",
    name: "Tailwind CSS v4",
    description:
      "모든 UI 스타일링에 사용. OKLCH 색상 토큰으로 테마를 정의하고, @custom-variant로 다크모드를 구현",
    url: "https://tailwindcss.com",
    Icon: SiTailwindcss,
  },
  {
    category: "Styling",
    name: "Radix UI",
    description:
      "레이아웃에 Themes를, Slot·Tooltip 등 접근성 있는 인터랙션 구현에 Primitives를 활용",
    url: "https://www.radix-ui.com",
    Icon: SiRadixui,
  },
  {
    category: "Styling",
    name: "Emotion",
    description:
      "CSS-in-JS 스타일링 라이브러리. JavaScript 안에서 동적 스타일을 작성하고, styled 컴포넌트와 css prop 두 가지 방식을 지원",
    url: "https://emotion.sh",
    Icon: EmotionIcon,
  },
  {
    category: "Infrastructure",
    name: "Vercel",
    description:
      "사이트 배포 및 호스팅 플랫폼. Analytics와 Speed Insights를 연동해 실사용 기준 성능을 모니터링",
    url: "https://vercel.com",
    Icon: SiVercel,
  },
  {
    category: "Infrastructure",
    name: "Supabase",
    description:
      "포트폴리오·커리어 데이터를 저장하고 조회하는 백엔드. API Route에서 서버 클라이언트로 접근하고, cron으로 인스턴스를 주기적으로 활성화",
    url: "https://supabase.com",
    Icon: SiSupabase,
  },
  {
    category: "Testing",
    name: "Vitest",
    description:
      "Vite 기반 유닛·통합 테스트 프레임워크. Jest 호환 API를 제공하며 빠른 실행 속도와 ESM 네이티브 지원이 특징",
    url: "https://vitest.dev",
    Icon: SiVitest,
  },
  {
    category: "Testing",
    name: "Playwright",
    description:
      "브라우저 엔드-투-엔드 테스트 도구. Chromium·Firefox·WebKit 멀티 브라우저 지원, CI 환경에서의 안정적인 자동화 테스트에 활용",
    url: "https://playwright.dev",
    Icon: PlaywrightIcon,
  },
];

const CATEGORIES = [
  "Framework",
  "Library",
  "Styling",
  "Infrastructure",
  "Testing",
] as const;

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const handleClick = (tech: TechItem) => {
    setSelectedTech(tech);
  };

  return (
    <>
      <div className="space-y-8">
        {CATEGORIES.map((category) => {
          const items = TECH_STACK.filter((item) => item.category === category);
          return (
            <div key={category}>
              <h3 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {items.map((tech) => (
                  <TechIconButton
                    key={tech.name}
                    icon={tech.Icon}
                    name={tech.name}
                    onClick={() => handleClick(tech)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedTech && (
        <TechDetailModal
          tech={selectedTech}
          onClose={() => setSelectedTech(null)}
        />
      )}
    </>
  );
}
