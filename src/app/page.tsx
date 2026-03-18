import CareerSection from "./career-section";
import PortfolioList from "./portfolio/portfolio-list";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="pb-12 border-b border-neutral-200">
        <p className="text-sm text-neutral-500 mb-3 tracking-widest uppercase">
          Frontend Developer
        </p>
        <h1 className="text-4xl font-bold mb-6">안녕하세요, 정하림입니다.</h1>
        <p className="text-neutral-600 leading-relaxed max-w-lg">
          사용자 경험을 중시하는 프론트엔드 개발자입니다.
          <br />
          React, Next.js, TypeScript를 주로 사용합니다.
        </p>
      </section>

      {/* 포트폴리오 미리보기 */}
      <PortfolioList limit={3} />

      <hr className="mt-12 border-neutral-200" />

      {/* 경력 미리보기 */}
      <CareerSection limit={3} />
    </div>
  );
}
