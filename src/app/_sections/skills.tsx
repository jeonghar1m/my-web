"use client";

import { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiRadixui,
  SiAntdesign,
  SiStyledcomponents,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { TechIconButton } from "@/shared/ui/tech-icon-button";
import { TechDetailModal, type TechItem } from "@/shared/ui/tech-detail-modal";

const EmotionIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zM8.727 9.818a1.09 1.09 0 1 0 0 2.182 1.09 1.09 0 0 0 0-2.182zm6.546 0a1.09 1.09 0 1 0 0 2.182 1.09 1.09 0 0 0 0-2.182zm-6.819 4.364s1.091 2.182 3.546 2.182 3.546-2.182 3.546-2.182H8.454z" />
  </svg>
);

const SKILLS: TechItem[] = [
  {
    category: "Language",
    name: "TypeScript",
    description: "",
    url: "https://www.typescriptlang.org",
    Icon: SiTypescript,
  },
  {
    category: "Language",
    name: "JavaScript",
    description: "",
    url: "https://developer.mozilla.org/ko/docs/Web/JavaScript",
    Icon: SiJavascript,
  },
  {
    category: "Language",
    name: "HTML",
    description: "",
    url: "https://developer.mozilla.org/ko/docs/Web/HTML",
    Icon: SiHtml5,
  },
  {
    category: "Language",
    name: "CSS",
    description: "",
    url: "https://developer.mozilla.org/ko/docs/Web/CSS",
    Icon: SiCss3,
  },
  {
    category: "Framework",
    name: "Next.js",
    description: "",
    url: "https://nextjs.org",
    Icon: SiNextdotjs,
  },
  {
    category: "Framework",
    name: "React",
    description: "",
    url: "https://react.dev",
    Icon: SiReact,
  },
  {
    category: "Library",
    name: "TanStack Query",
    description: "",
    url: "https://tanstack.com/query",
    Icon: SiReactquery,
  },
  {
    category: "Styling",
    name: "Tailwind CSS",
    description: "",
    url: "https://tailwindcss.com",
    Icon: SiTailwindcss,
  },
  {
    category: "Styling",
    name: "Radix UI",
    description: "",
    url: "https://www.radix-ui.com",
    Icon: SiRadixui,
  },
  {
    category: "Styling",
    name: "Ant Design",
    description: "",
    url: "https://ant.design",
    Icon: SiAntdesign,
  },
  {
    category: "Styling",
    name: "Styled Components",
    description: "",
    url: "https://styled-components.com",
    Icon: SiStyledcomponents,
  },
  {
    category: "Styling",
    name: "Emotion",
    description: "",
    url: "https://emotion.sh",
    Icon: EmotionIcon,
  },
  {
    category: "Tools",
    name: "GitHub",
    description: "",
    url: "https://github.com",
    Icon: SiGithub,
  },
  {
    category: "Tools",
    name: "Figma",
    description: "",
    url: "https://www.figma.com",
    Icon: SiFigma,
  },
  {
    category: "Tools",
    name: "Vercel",
    description: "",
    url: "https://vercel.com",
    Icon: SiVercel,
  },
];

const CATEGORIES = ["Language", "Framework", "Library", "Styling", "Tools"] as const;

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<TechItem | null>(null);

  return (
    <>
      <section className="mt-12 pb-12 border-b border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          기술 스택
        </h2>
        <div className="space-y-6">
          {CATEGORIES.map((category) => {
            const items = SKILLS.filter((s) => s.category === category);
            return (
              <div key={category}>
                <h3 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <TechIconButton
                      key={item.name}
                      icon={item.Icon}
                      name={item.name}
                      onClick={() => setSelectedSkill(item)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedSkill && (
        <TechDetailModal
          tech={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </>
  );
}
