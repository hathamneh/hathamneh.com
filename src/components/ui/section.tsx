import {cn} from "@/lib/utils";
import React, {type PropsWithChildren} from "react";

interface Props {
	id?: string;
	className?: string;
	contentClassName?: string;
}

export const Section = ({
	children,
	id,
	contentClassName,
	className,
}: PropsWithChildren<Props>) => {
	return (
		<section id={id} className={cn("w-full py-12", className)}>
			<div className={cn("max-w-screen-xl mx-auto px-8", contentClassName)}>
				{children}
			</div>
		</section>
	);
};
