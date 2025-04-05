import {cn} from "@/lib/utils";
import type {ReactNode} from "react";

interface TimelineProps {
	items: ReactNode[];
	bulletClassName?: string;
}

export const Timeline = ({ items, bulletClassName }: TimelineProps) => {
	if (items.length === 0) {
		return <span>No items</span>;
	}

	return (
		<ol className="relative border-s border-zinc-200 dark:border-zinc-700">
			{items.map((item) => (
				<li key="title" className="mb-12 ps-6">
					<span
						className={cn(
							"absolute flex items-center justify-center size-3 bg-zinc-300 rounded-full -start-1.5 translate-y-8 ring-4 ring-zinc-50 dark:ring-zinc-950 dark:bg-zinc-600",
							bulletClassName,
						)}
					/>
					{item}
				</li>
			))}
		</ol>
	);
};
