import { Skeleton } from "@radix-ui/themes";

export default function CareerListSkeleton() {
  return (
    <ul className="mt-4 flex flex-col gap-4">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          className="flex items-center justify-between rounded-lg border border-neutral-200 px-5 py-4"
          key={i}
        >
          <Skeleton height="20px" width="40%" />
          <Skeleton height="16px" width="25%" />
        </div>
      ))}
    </ul>
  );
}
