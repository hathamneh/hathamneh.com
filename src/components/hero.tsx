import BlurFade from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import { RiDownloadLine, RiMailFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center mt-12 relative xl:h-screen xl:max-h-[600px] mb-16">
			<div className="absolute inset-0 w-full h-full">
				<span className="absolute start-0">
					<svg
						width="48"
						height="95"
						viewBox="0 0 48 95"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Hero Background</title>
						<circle
							cx="0.5"
							cy="47.5"
							r="47.5"
							fill="url(#paint0_radial_6:121)"
						/>
						<defs>
							<radialGradient
								id="paint0_radial_6:121"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(0.5) rotate(90) scale(95)"
							>
								<stop stopColor="white" />
								<stop offset="0.569" stopColor="#e8f5f5" />
								<stop offset="0.993" stopColor="#d0e8e9" />
							</radialGradient>
						</defs>
					</svg>
				</span>
				<span className="absolute end-0 bottom-0 h-[400px] xl:h-[500px]">
					<svg
						className="h-full"
						viewBox="0 0 491 490"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Hero BG2</title>
						<circle
							cx="356.5"
							cy="356.5"
							r="356.5"
							fill="url(#paint0_linear_6:37)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_6:37"
								x1="356.5"
								y1="0"
								x2="356.5"
								y2="713"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#6DC5C7" />
								<stop offset="1" stopColor="#4a8c8d" />
							</linearGradient>
						</defs>
					</svg>
				</span>
			</div>
			<div className="relative flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-20 max-w-screen-xl h-full px-8">
				<div className="flex flex-col items-start gap-4 text-zinc-900 dark:text-zinc-50 flex-1 mt-8 xl:mt-0">
					<div>
						<p className="mb-2 font-bold text-primary">Hey there 👋 I am</p>
						<BlurFade inView>
							<h1 className="text-[48px] text-start leading-none font-bold">
								{config.name}
							</h1>
						</BlurFade>
					</div>
					<BlurFade delay={0.15} inView className="text-xl">
						{config.seniority && (
							<span className="text-gray-400">{config.seniority}</span>
						)}{" "}
						{config.role}
					</BlurFade>
					<BlurFade delay={0.3} className="text-lg font-normal text-start my-2">
						{config.profile}
					</BlurFade>
					<BlurFade
						delay={0.45}
						inView
						className="flex gap-4 flex-wrap items-center"
					>
						<Link
							href="haitham-cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants({ size: "lg" })}
						>
							<RiDownloadLine /> Download CV
						</Link>
						<Link
							className={buttonVariants({ size: "lg", variant: "outline" })}
							href="#contact-section"
						>
							<RiMailFill /> Contact me
						</Link>
					</BlurFade>
				</div>
				<BlurFade inView className="shrink-0 self-end" duration={1.5}>
					<Image
						src="/me.png"
						alt="Haitham"
						width={0}
						height={0}
						sizes="100vw"
						priority
						className="object-cover w-[900px] xl:w-[500px] lg:max-w-none rotate-y-30"
					/>
				</BlurFade>
			</div>
		</main>
	);
};
