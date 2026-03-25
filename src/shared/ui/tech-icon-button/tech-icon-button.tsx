import { cn } from "@/shared/lib/utils/common";

interface TechIconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  onClick?: () => void;
}

export default function TechIconButton({
  icon: Icon,
  name,
  onClick,
}: TechIconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 p-3 rounded-xl w-20",
        "text-neutral-600 dark:text-neutral-400",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "transition-colors",
        onClick ? "cursor-pointer" : "cursor-default",
      )}
      aria-label={name}
    >
      <Icon className="w-8 h-8 flex-shrink-0" />
      <span className="text-xs text-center leading-tight text-neutral-500 dark:text-neutral-500 line-clamp-2">
        {name}
      </span>
    </button>
  );
}
