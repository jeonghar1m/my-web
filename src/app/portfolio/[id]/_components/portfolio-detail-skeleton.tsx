import { Flex, Section, Skeleton } from "@radix-ui/themes";

export default function PortfolioDetailSkeleton() {
  return (
    <Flex direction="column" gap="4">
      {/* 브레드크럼 */}
      <Skeleton height="20px" width="160px" />

      {/* 제목 */}
      <Skeleton height="32px" width="40%" />

      {/* 정보 박스 */}
      <Section size="1" className="rounded-lg bg-gray-100 p-5">
        <Flex direction="column" gap="2">
          <Skeleton height="24px" width="300px" />
          <Skeleton height="24px" width="200px" />
        </Flex>
      </Section>

      {/* 본문 */}
      <Flex direction="column" gap="2">
        <Skeleton height="16px" width="100%" />
        <Skeleton height="16px" width="95%" />
        <Skeleton height="16px" width="88%" />
        <Skeleton height="16px" width="92%" />
      </Flex>
    </Flex>
  );
}
