import { Skeleton } from "@radix-ui/themes";

function PortfolioCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
      <Skeleton height="180px" width="100%" />
      <div className="p-4">
        <Skeleton height="20px" width="75%" />
        <Skeleton height="16px" width="50%" mt="2" />
      </div>
    </div>
  );
}

export default function PortfolioListSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <PortfolioCardSkeleton key={i} />
      ))}
    </div>
  );
}
