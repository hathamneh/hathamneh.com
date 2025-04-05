import { ExperienceCard } from "@/components/experience-item";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { config } from "@/config";
import { RiBriefcaseLine } from "@remixicon/react";
import React from "react";

export const ExperienceSection = () => {
  return (
    <Section contentClassName="text-center" className="mt-8">
      <h4 className="text-primary text-xl font-bold mb-2 mt-4">Education & Experience</h4>
      <h2 className="text-3xl font-bold mb-12">My Resume</h2>

      <div className="flex flex-wrap relative py-12">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary opacity-20"></div>

        {config.experience.map((item, i) => (
          <React.Fragment
            key={item.title}
          >
            {i % 2 === 1 && <div className="w-1/2"></div>}
            <div
              className="border-b-2 border-b-background last:border-none w-1/2"
            >
              <ExperienceCard item={item} align={i % 2 === 1 ? "left" : "right"} />
            </div>
            {i % 2 === 0 && <div className="w-1/2"></div>}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
