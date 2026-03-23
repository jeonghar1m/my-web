const SKILLS = [
  { category: "Language", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Framework", items: ["Next.js", "React"] },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Styled Components"],
  },
  { category: "Tools", items: ["Git", "GitHub", "Figma", "Vercel"] },
];

export default function Skills() {
  return (
    <section className="mt-12 pb-12 border-b border-neutral-200">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
        기술 스택
      </h2>
      <ul className="space-y-3">
        {SKILLS.map((skill) => (
          <li
            key={skill.category}
            className="flex flex-col sm:flex-row gap-1 sm:gap-8"
          >
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 sm:w-28 shrink-0">
              {skill.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-0.5 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
