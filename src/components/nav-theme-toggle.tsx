"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMoonLine, RiPaletteLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const NavThemeToggle = () => {
	const [mount, setMount] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMount(true);
	}, []);

	if (!mount) return null;

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<RiPaletteLine />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-36">
				<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
					<DropdownMenuRadioItem
						className="flex gap-2 items-center"
						value="light"
					>
						<RiSunLine className="size-4" /> Light
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						className="flex gap-2 items-center"
						value="dark"
					>
						<RiMoonLine className="size-4" /> Dark
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						className="flex gap-2 items-center"
						value="system"
					>
						<RiPaletteLine className="size-4" /> System
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
