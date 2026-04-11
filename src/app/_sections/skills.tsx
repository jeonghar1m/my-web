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
    category: "Library",
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
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
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
