import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { config } from "@/config";
import { RiStarLine } from "@remixicon/react";
import React from "react";
import { SkillsList } from "@/components/skills-list";

export const SkillsAndLanguagesSection = () => {
  return (
    <Section id="skills-and-languages" contentClassName="text-center">
      <h4 className="text-primary text-xl font-bold mb-2">Skills & Languages</h4>
      <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
      <div className="flex w-full gap-8">
        <div className="py-6 px-9 flex flex-col gap-4 flex-1">
          <SkillsList skills={config.skills} variant="outline" itemClassName="text-base" />
        </div>
        <div className="w-[400px] py-4 px-6 flex flex-col gap-4 items-start border-s border-gray-100">
          {config.languages?.map((language) => (
            <div key={language.name} className="flex items-center gap-2 w-full text-start">
              <span className="font-bold w-20 shrink-0">{language.name}</span>
              <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${language.percentage}%` }} />
              </div>
              <span className="text-primary w-20 shrink-0">{language.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
