import type { SkillItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  skills?: SkillItem[];
  variant?: "default" | "secondary" | "destructive" | "outline";
  itemClassName?: string;
}

export const SkillsList = ({ skills, variant, itemClassName }: Props) =>
  skills &&
  skills.length > 0 && (
    <div className="flex gap-2 flex-wrap">
      {skills.map((s) => {
        const name = typeof s === "string" ? s : s.name;
        const icon = typeof s === "string" ? null : s.icon;
        return (
          <Badge
            key={name}
            className={cn("[&>svg]:size-4 flex gap-2 items-center", itemClassName)}
            variant={variant || "secondary"}
          >
            {icon}
            {name}
          </Badge>
        );
      })}
    </div>
  );
