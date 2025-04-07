import type { Dayjs } from "dayjs";
import type { ReactNode } from "react";

export type SkillItem = string | { name: string; icon?: ReactNode };

export interface ExperienceItem {
	title: string;
	from: Dayjs;
	to?: Dayjs;
	isCurrent?: boolean;
	company?: string;
	location?: string;
	achievements?: string;
	skills?: SkillItem[];
}

export interface EducationItem {
	major: string;
	degree: string;
	school: string;
	location?: string;
	from: Dayjs;
	to?: Dayjs;
}

export interface ServiceItem {
	icon?: ReactNode;
	title: string;
	description: string;
}

export interface ProjectItem {
	id: string;
	image?: string;
	category: string[];
	title: string;
	description: string;
	url?: string;
}

export interface LanguageItem {
	name: string;
	level: string;
	percentage: number;
}

export interface PersonalConfig {
	name: string;
	role: string;
	seniority?: string;
	profile: string;
	services?: ServiceItem[];
	links: Record<string, string>;
	experience: ExperienceItem[];
	education: EducationItem[];
	skills: SkillItem[];
	projects?: ProjectItem[];
	languages?: LanguageItem[];
}
