import { RiFacebookFill, RiGithubFill, RiLinkedinFill, RiTwitterFill } from "@remixicon/react"
import { Button } from "./ui/button"
import { Section } from "./ui/section"

export const AboutMeSection = () => {
  return (
    <Section contentClassName="flex gap-4" className="my-10">
      <div className="flex-1">
        <h4 className="text-primary font-bold uppercase text-xl">About Me</h4>
        <div className="text-[36px] font-bold">
          Curious, Passionate
        </div>
        <p className="text-gray-400 text-lg">and always eager to learn new things.</p>
      </div>
      <div className="">
        <h4 className="font-bold uppercase text-2xl">Connect With Me</h4>
        <p className="my-3">You can find me on the social media platforms below:</p>
        <div className="flex gap-2">
          <Button variant="outline"><RiLinkedinFill /></Button>
          <Button variant="outline"><RiGithubFill /></Button>
          <Button variant="outline"><RiTwitterFill /></Button>
          <Button variant="outline"><RiFacebookFill /></Button>
        </div>
      </div>
    </Section>
  )
}
