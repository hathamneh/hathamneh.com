import { NavThemeToggle } from "@/components/nav-theme-toggle";
import React, { type ReactNode } from "react";

export const Topbar = () => {
	return (
		<div className="top-0 w-screen fixed h-20 bg-transparent z-50">
			<div className="max-w-screen-2xl mx-auto flex items-center h-full">
				<div className="ms-auto">
					<NavThemeToggle />
				</div>
			</div>
		</div>
	);
};
