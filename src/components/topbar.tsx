"use client";
import { cn } from "@/lib/utils";
import { RiCloseFill, RiDownloadLine, RiMenuFill } from "@remixicon/react";
import Link from "next/link";
import type React from "react";
import { type ReactNode, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";

export const Topbar = () => {
	const [visible, setVisible] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={cn(
				"top-0 w-screen fixed h-20 bg-white z-50 transition border-b border-gray-100",
				visible ? "visible opacity-100" : "invisible opacity-0",
			)}
		>
			<div className="max-w-screen-xl mx-auto flex items-center h-full">
				<div className="px-5 xl:px-0 flex items-center w-full">
					<button
						className="font-bold text-base leading-5 text-start"
						onClick={scrollToTop}
						type="button"
					>
						Haitham
						<br />
						Alathamneh
					</button>
					<Button
						variant="ghost"
						className="xl:hidden ms-auto"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <RiCloseFill /> : <RiMenuFill />}
					</Button>

					<div
						className={cn(
							"xl:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300",
							mobileMenuOpen
								? "max-h-[600px] visible opacity-100"
								: "invisible opacity-60 max-h-0",
						)}
					>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div className="p-6" onClick={() => setMobileMenuOpen(false)}>
							<NavMenu className="flex" />
						</div>
					</div>

					<NavMenu className="hidden xl:flex" />
				</div>
			</div>
		</div>
	);
};

const NavMenu = ({ className }: { className?: string }) => {
	const onNavItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute("href");
		if (targetId) {
			const targetElement = document.querySelector(targetId) as HTMLElement;
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
			}
		}
	};

	return (
		<div
			className={cn(
				"ms-auto flex flex-col xl:flex-row xl:items-center gap-6 [&>.item]:text-gray-600 [&>.item:hover]:text-black [&>.item]:transition",
				className,
			)}
		>
			<Link href="#about" className="item" onClick={onNavItemClick}>
				About me
			</Link>
			<Link href="#services" className="item" onClick={onNavItemClick}>
				Services
			</Link>
			<Link href="#projects" className="item" onClick={onNavItemClick}>
				Projects
			</Link>
			<Link href="#resume" className="item" onClick={onNavItemClick}>
				Resume
			</Link>
			<Link
				href="#skills-and-languages"
				className="item"
				onClick={onNavItemClick}
			>
				Skills
			</Link>
			<Link href="#contact-section" className="item" onClick={onNavItemClick}>
				Contact
			</Link>
			<Link
				href="haitham-cv.pdf"
				target="_blank"
				rel="noopener noreferrer"
				className={buttonVariants()}
			>
				Download CV
			</Link>
		</div>
	);
};
