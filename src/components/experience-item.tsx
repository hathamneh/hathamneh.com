import type { ExperienceItem } from "@/types";
import { RiBuildingLine, RiCalendar2Line, RiMap2Line, RiMapPinFill } from "@remixicon/react";
import { SkillsList } from "@/components/skills-list";
import dayjs from "dayjs";
import { useMemo } from "react";

interface Props {
  item: ExperienceItem;
  align?: "left" | "right";
}

export const ExperienceCard = ({ item, align = "left" }: Props) => {
  const duration = useMemo(() => {
    const from = dayjs(item.from);
    const to = item.isCurrent ? dayjs() : dayjs(item.to);
    const duration = to.diff(from, "months");

    if (duration < 12) {
      return `${duration} mo${duration > 1 ? "s" : ""}`;
    }

    const years = Math.floor(duration / 12);
    const months = duration % 12;
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
  }, [item])
  return (
    <div className={`py-6 px-9 flex flex-col gap-2 relative items-start text-start ${align === "right" ? "xl:items-end xl:text-end" : ""}`}>
      <div className={`bg-white border-4 border-primary absolute w-4 h-4 rounded-full top-8 -left-2 ${align === "right" ? "xl:left-auto xl:-right-2" : ""}`} />
      <h2 className="text-2xl font-bold relative">{item.title}</h2>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <RiBuildingLine className="size-4" />
          <strong>{item.company}</strong>
        </div>
        <div className="flex items-center gap-2">
          <RiMapPinFill className="size-4" />
          <span>{item.location}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
        <RiCalendar2Line className="size-4" />
        {item.from.format("MMMM YYYY")} -{" "}
        {item.isCurrent ? "Present" : item.to?.format("MMMM YYYY")}{' '}
        ({duration})
      </div>
      <p className="my-2">
        {item.achievements}
      </p>
      <SkillsList skills={item.skills} />
    </div>
  );
};
