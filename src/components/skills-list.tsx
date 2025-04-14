import { cn } from "@/lib/utils";
import type { SkillItem } from "@/types";
import { Badge } from "./ui/badge";

interface Props {
	skills?: SkillItem[];
	variant?: "default" | "secondary" | "destructive" | "outline";
	itemClassName?: string;
	className?: string;
}

export const SkillsList = ({
	skills,
	variant,
	itemClassName,
	className,
}: Props) =>
	skills &&
	skills.length > 0 && (
		<div className={cn("flex gap-2 flex-wrap", className)}>
			{skills.map((s) => {
				const name = typeof s === "string" ? s : s.name;
				const icon = typeof s === "string" ? null : s.icon;
				return (
					<Badge
						key={name}
						className={cn(
							"[&>svg]:size-4 flex gap-2 items-center",
							itemClassName,
						)}
						variant={variant || "secondary"}
					>
						{icon}
						{name}
					</Badge>
				);
			})}
		</div>
	);
