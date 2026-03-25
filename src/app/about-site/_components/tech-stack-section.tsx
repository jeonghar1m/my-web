"use client";

import { useState } from "react";
import { Component, Layers } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { TechIconButton } from "@/shared/ui/tech-icon-button";
import { TechDetailModal, type TechItem } from "@/shared/ui/tech-detail-modal";

const TECH_STACK: TechItem[] = [
  {
    category: "Framework",
    name: "Next.js 16",
    description: "App Router 기반 풀스택 React 프레임워크",
    url: "https://nextjs.org",
    Icon: SiNextdotjs,
  },
  {
    category: "Framework",
    name: "React 19",
    description: "UI 구성을 위한 컴포넌트 기반 라이브러리",
    url: "https://react.dev",
    Icon: SiReact,
  },
  {
    category: "Styling",
    name: "Tailwind CSS v4",
    description:
      'PostCSS 플러그인 방식, OKLCH 색상 토큰 사용. @import "tailwindcss" 문법',
    url: "https://tailwindcss.com",
    Icon: SiTailwindcss,
  },
  {
    category: "Styling",
    name: "Radix UI",
    description: "접근성 중심의 헤드리스 UI 프리미티브 (Themes + Primitives)",
    url: "https://www.radix-ui.com",
    Icon: Layers,
  },
  {
    category: "Styling",
    name: "shadcn/ui",
    description: "new-york 스타일, RSC 지원 컴포넌트 모음",
    url: "https://ui.shadcn.com",
    Icon: Component,
  },
  {
    category: "Infrastructure",
    name: "Vercel",
    description: "Next.js 최적화 배포 플랫폼. Analytics & Speed Insights 연동",
    url: "https://vercel.com",
    Icon: SiVercel,
  },
  {
    category: "Infrastructure",
    name: "Supabase",
    description:
      "PostgreSQL 기반 오픈소스 BaaS. 데이터베이스, 인증, 스토리지, Edge Functions 등을 제공",
    url: "https://supabase.com",
    Icon: SiSupabase,
  },
];

const CATEGORIES = ["Framework", "Styling", "Infrastructure"] as const;

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
