import { config } from "@/config"
import { Section } from "./ui/section"
import Image from "next/image"
import { buttonVariants } from "./ui/button"

export const ProjectsSection = () => {
  return (
    <Section contentClassName="text-center" className="bg-gray-50 mt-12">
      <h4 className="text-primary text-xl font-bold mb-2 mt-8">Creative Portfolio</h4>
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <p className="mb-8 text-lg text-gray-400">
        During my years of experience, I have worked on a variety of projects.
        <br />
        Here are some of the public projects I have worked on:
      </p>

      <div className="flex flex-wrap gap-10 px-10">
        {config.projects?.map((project) => (
          <div key={project.id} className="flex flex-col gap-4 w-1/2 flex-1 p-8 text-start items-start rounded-xl bg-white">
            <Image src={`/projects/${project.id}.png`} alt={project.title} width={200} height={200} className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a className={buttonVariants({ variant: "ghost" })} href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
