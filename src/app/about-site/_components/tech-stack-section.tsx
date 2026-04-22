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
} from "react-icons/si";
import { TechIconButton } from "@/shared/ui/tech-icon-button";
import { TechDetailModal, type TechItem } from "@/shared/ui/tech-detail-modal";

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
];

const CATEGORIES = [
  "Framework",
  "Library",
  "Styling",
  "Infrastructure",
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
