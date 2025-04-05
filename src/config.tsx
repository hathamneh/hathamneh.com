import { TsIcon } from "@/components/ui/TSIcon";
import type { PersonalConfig } from "@/types";
import { RiCss3Fill, RiDatabaseFill, RiGithubFill, RiGitlabFill, RiGitPullRequestFill, RiInfinityFill, RiInfinityLine, RiJavaFill, RiJavascriptFill, RiPhpFill, RiQuillPenAiFill, RiQuillPenAiLine, RiQuillPenLine, RiReactjsFill, RiReactjsLine, RiServerLine, RiStackLine, RiTailwindCssFill, RiVuejsFill, RiWordpressFill } from "@remixicon/react";
import dayjs from "dayjs";
import { DockerIcon } from "./components/ui/docker-icon";
import { PythonIcon } from "./components/ui/python-icon";

export const config: PersonalConfig = {
  name: "Haitham Alathamneh",
  role: "Frontend Engineer",
  seniority: "Senior",
  profile:
    "A skilled web developer with over seven years of expertise, primarily in React and modern frontend technologies, along with solid backend experience. I hold a Blue Card, enabling me to work across Europe.",
  links: {
    github: "https://github.com/hathamneh",
    linkedin: "https://www.linkedin.com/in/hathamneh/",
    facebook: "https://www.facebook.com/himo.athamneh/",
  },
  experience: [
    {
      title: "Senior AI Frontend Engineer",
      from: dayjs("2025-03-01"),
      to: dayjs("2025-04-08"),
      company: "Aleph Alpha GmbH.",
      location: "Heidelberg, Germany",
      achievements: "During my brief yet impactful tenure at Aleph Alpha, I developed proof-of-concept applications for potential enterprise clients interested in AI solutions. Additionally, I created a comprehensive library of reusable UI components that significantly accelerated the development process of POCs, enabling faster delivery and more polished demonstrations for stakeholders.",
      skills: [
        { name: "Vue.js", icon: <RiVuejsFill /> },
        { name: "Typescript", icon: <TsIcon /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        { name: "Docker", icon: <DockerIcon /> },
        { name: "Python", icon: <PythonIcon /> }
      ],
    },
    {
      title: "Senior Frontend Engineer",
      from: dayjs("2020-04-01"),
      to: dayjs("2025-02-28"),
      company: "Power Factors Inc",
      location: "Munich, Germany",
      achievements: "During my tenure, I engineered a robust reporting engine with 15 extensible widgets and led a complete refactoring of all 14 product modules from legacy HTML/jQuery to a modern React Single Page Application. I established and managed Docker images for Frontend builds in both production and development environments. Additionally, I modernized the build process by upgrading from Webpack 4 to Vite, and strengthened quality assurance by implementing numerous E2E tests using Playwright.",
      skills: [
        { name: "React", icon: <RiReactjsFill /> },
        { name: "Typescript", icon: <TsIcon /> },
        { name: "Javascript", icon: <RiJavascriptFill /> },
        { name: "Docker", icon: <DockerIcon /> },
        "CI/CD",
        { name: "Python", icon: <PythonIcon /> },
        "Django",
        "Playwright",
        "Vite",
      ],
    },
    {
      title: "Frontend Software Engineer",
      from: dayjs("2017-09-01"),
      to: dayjs("2020-04-01"),
      company: "Atypon Systems",
      location: "Amman, Jordan",
      achievements: "During my time at Atypon Systems, I implemented an advanced E-Reader capable of reading EPUBs and PDFs online, built multiple journals and online magazines using an in-house JS framework with PUG and SASS, and upgraded the build process from gulp tasks to Webpack.",
      skills: [
        { name: "Javascript", icon: <RiJavascriptFill /> },
        { name: "Sass/SCSS", icon: <RiCss3Fill /> },
        "Pug (Jade)",
        { name: "Java", icon: <RiJavaFill /> },
        "Webpack",
      ],
    },
    {
      title: "Fullstack Engineer",
      from: dayjs("2015-09-01"),
      to: dayjs("2019-05-01"),
      company: "Freelance",
      location: "Amman, Jordan",
      achievements: "As a freelance engineer, I developed a comprehensive delivery system for package and courier management, created a web store featuring linked inventory management for merchandise tracking, and collaborated with startups to build their front-page websites and blogs.",
      skills: [
        { name: "PHP", icon: <RiPhpFill /> },
        { name: "Laravel" },
        { name: "Wordpress", icon: <RiWordpressFill /> },
        { name: "Vuejs", icon: <RiVuejsFill /> },
        { name: "React", icon: <RiReactjsFill /> },
      ],
    },
    {
      title: "B.Sc in Computer Engineering",
      from: dayjs("2013-09-01"),
      to: dayjs("2018-06-01"),
      company: "University of Jordan",
      location: "Amman, Jordan",
      achievements: "During my time at the University of Jordan, I developed a comprehensive delivery system for package and courier management, created a web store featuring linked inventory management for merchandise tracking, and collaborated with startups to build their front-page websites and blogs.",
    }
  ],
  education: [
    {
      degree: "B.Sc",
      major: "Computer Engineering",
      school: "University of Jordan",
      location: "Amman, Jordan",
      from: dayjs("2013"),
      to: dayjs("2018"),
    },
  ],
  skills: [
    { name: "Docker", icon: <DockerIcon /> },
    { name: "React", icon: <RiReactjsFill /> },
    { name: "Typescript", icon: <TsIcon /> },
    { name: "Javascript", icon: <RiJavascriptFill /> },
    "CI/CD",
    "Laravel",
    { name: "Git", icon: <RiGitPullRequestFill /> },
    { name: "GitLab CI", icon: <RiGitlabFill /> },
    { name: "GitHub Actions", icon: <RiGithubFill /> },
    { name: "UI/UX", icon: <RiQuillPenAiFill /> },
    "RESTful APIs",
    { name: "Databases", icon: <RiDatabaseFill /> },
    "Kubernetes",
    "Redis",
    "Bun",
    "Next.js",
    "Remix",
    "BullMQ",
    "Elysia.js",
    "AWS"
  ],
  services: [
    {
      icon: <RiReactjsLine />,
      title: "Frontend Development",
      description: "I specialize in building responsive and user-friendly websites using modern web technologies."
    },
    {
      icon: <RiServerLine />,
      title: "Backend Development",
      description: "I specialize in building scalable and efficient backend systems using modern web technologies."
    },
    {
      icon: <RiStackLine />,
      title: "Fullstack Development",
      description: "I specialize in building fullstack applications using modern web technologies."
    },
    {
      icon: <RiQuillPenAiLine />,
      title: "UI/UX Design",
      description: "I specialize in designing user-friendly interfaces and experiences using modern design tools."
    },
  ],
  projects: [
    {
      id: "monease",
      title: "Monease.io",
      description: "A versatile money and crypto exchange platform available as a Private-label PaaS. Built with Remix on the frontend and Bun/Elysia.js on the backend, utilizing Prisma ORM with PostgreSQL, BullMQ for background jobs, and containerized with Docker for Kubernetes deployments",
      url: "https://monease.io",
    },
    {
      id: "qudsinfo",
      title: "Qudsinfo.com",
      description: "A knowledge base website about Jerusalem, featuring a customized Wordpress with Vue.js template, interactive map, and a public API, optimized for performance using Memcached. The platform hosts extensive articles and information accessible through a user-friendly interface.",
      url: "https://qudsinfo.com",
    },
  ],
  languages: [
    {
      name: "English",
      level: "Fluent",
      percentage: 100,
    },
    {
      name: "Arabic",
      level: "Native",
      percentage: 100,
    },
    {
      name: "German",
      level: "Basic",
      percentage: 25,
    },
  ],
};
