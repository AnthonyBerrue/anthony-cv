import type { Education, Experience } from "@/types/resume";
import type { Item as TimelineItem } from "@/ui/Timeline";

export const toExperienceItems = (arr: Experience[] = []): TimelineItem[] =>
    arr.map((e) => ({ ...e, name: e.name ?? "(Expérience)" }));

export const toEducationItems = (arr: Education[] = []): TimelineItem[] =>
    arr.map((e) => ({ ...e, name: e.name ?? e.institution ?? "(Établissement)" }));
