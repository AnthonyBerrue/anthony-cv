import type { Resume, Education } from "@/types/resume";

function normalizeEducationItem(e: Education): { name: string } & Education {
    const name = e.name ?? e.institution ?? "";
    return { ...e, name };
}

export function normalizeResume(r: Resume): Resume {
    return {
        ...r,
        education: (r.education ?? []).map(normalizeEducationItem),
    };
}
