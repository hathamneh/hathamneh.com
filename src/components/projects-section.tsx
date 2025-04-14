import { config } from "@/config";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Section } from "./ui/section";
import { SkillsList } from "./skills-list";
import { RiArrowRightLine, RiExternalLinkLine } from "@remixicon/react";

export const ProjectsSection = () => {
	return (
		<Section
			id="projects"
			contentClassName="text-center"
			className="bg-gray-50 mt-12"
		>
			<h4 className="text-primary text-xl font-bold mb-2 mt-8">
				Creative Portfolio
			</h4>
			<h2 className="text-3xl font-bold mb-4">My Projects</h2>
			<p className="mb-8 text-lg text-gray-400">
				During my years of experience, I have worked on a variety of projects.
				<br />
				Here are some of the public projects I have worked on:
			</p>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:px-10">
				{config.projects?.map((project) => (
					<div
						key={project.id}
						className="flex flex-col gap-4 p-8 text-start items-start rounded-xl bg-white"
					>
						{project.image && (
							<Image
								src={`/projects/${project.image}`}
								alt={project.title}
								width={400}
								height={400}
								className="w-full rounded-lg mb-4 xl:h-[280px] object-cover object-top"
							/>
						)}
						<div className="flex gap-3 flex-col xl:flex-row justify-between w-full xl:items-center">
							<h3 className="text-xl font-bold">{project.title}</h3>
							<a
								className={buttonVariants({
									variant: "outline",
								})}
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Project <RiExternalLinkLine />
							</a>
						</div>
						<p className="text-gray-400">{project.description}</p>
						{project.stack && (
							<div className="flex flex-col gap-2">
								<h4 className="text-xs font-bold">Technologies Used:</h4>
								<div className="flex flex-wrap gap-2">
									<SkillsList skills={project.stack} />
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</Section>
	);
};
