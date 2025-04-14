import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
import { SkillsAndLanguagesSection } from "@/components/skills-and-languages-section";
import { AboutMeSection } from "@/components/about-me-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Topbar } from "@/components/topbar";

export default function Home() {
	return (
		<div>
			<Topbar />
			<Hero />
			<AboutMeSection />
			<SectionDivider />
			<ServicesSection />
			<ProjectsSection />
			<ExperienceSection />
			<SectionDivider />
			<SkillsAndLanguagesSection />
			<SectionDivider />
			<ContactSection />
			<Footer />
		</div>
	);
}
