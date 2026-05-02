"use client";

import { useState } from "react";
import { TechIconButton } from "@/shared/ui/tech-icon-button";
import { TechDetailModal, type TechItem } from "@/shared/ui/tech-detail-modal";
import { SKILLS, CATEGORIES } from "./skills-data";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<TechItem | null>(null);

  return (
    <>
      <section className="mt-12 pb-12 border-b border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
          기술 스택
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          경험해본 기술 스택
        </p>
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
