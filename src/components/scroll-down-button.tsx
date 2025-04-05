"use client";

import { Button } from "@/components/ui/button";
import { RiArrowDownLine } from "@remixicon/react";
import React from "react";

export const ScrollDownButton = () => {
	return (
		<Button
			onClick={() =>
				document
					.getElementById("expereince")
					?.scrollIntoView({ behavior: "smooth" })
			}
			variant="outline"
			className="absolute bottom-5 md:bottom-16 left-1/2 -translate-x-1/2"
		>
			<RiArrowDownLine className="size-4 dark:text-zinc-50 text-zinc-900" />
		</Button>
	);
};
