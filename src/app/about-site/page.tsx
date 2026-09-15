import type { Metadata } from "next";
import { TechStackSection } from "./_components";

export const metadata: Metadata = {
  title: "About site",
  description: "이 사이트에 대한 소개 및 사용 기술 스택",
};

export default function AboutSitePage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          About site
        </h1>
      </div>

      <hr className="border-neutral-200 dark:border-neutral-700 mb-12" />

      <section className="mb-12" aria-labelledby="site-tech-stack-heading">
        <h2
          id="site-tech-stack-heading"
          className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8"
        >
          기술 스택
        </h2>
        <TechStackSection />
      </section>
    </div>
  );
}
