import type { Resume } from "@/types/resume";
import ResumePage from "@/components/ResumePage";
import enJson from "@/content/resume.en.json";
import { normalizeResume } from "@/lib/normalizeResume";
import type { Labels } from "@/components/ResumePage";


const en = normalizeResume(enJson as unknown as Resume);

const enLabels: Labels = {
    about: "About",
    basedInPrefix: "Based in",
    contact: "Contact",
    switch: "Voir en français",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contactSection: "Contact",
};

export default function Page() {
    return <ResumePage resume={en} switchHref="/" labels={enLabels} />;
}
