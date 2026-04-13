import { Badge } from "@radix-ui/themes";
import { Portfolio } from "../model/portfolio";

interface ProjectTypeBadgeProps {
  teamProject: Portfolio["teamProject"];
  className?: string;
}

export default function ProjectTypeBadge({
  teamProject,
  className,
}: ProjectTypeBadgeProps) {
  return (
    <Badge
      color={teamProject ? "blue" : "gray"}
      variant="soft"
      className={className}
    >
      {teamProject ? "팀 프로젝트" : "개인 프로젝트"}
    </Badge>
  );
}
