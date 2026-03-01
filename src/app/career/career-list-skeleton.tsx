import { Skeleton } from "@radix-ui/themes";

function CareerItemSkeleton() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-neutral-200 px-5 py-4">
      <Skeleton height="20px" width="40%" />
      <Skeleton height="16px" width="25%" />
    </div>
  );
}

export default function CareerListSkeleton() {
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {Array.from({ length: 2 }).map((_, i) => (
        <CareerItemSkeleton key={i} />
      ))}
    </ul>
  );
}
