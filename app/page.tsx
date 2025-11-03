import type { Resume } from "@/types/resume";
import ResumePage, {Labels} from "@/components/ResumePage";
import frJson from "@/content/resume.fr.json";
import { normalizeResume } from "@/lib/normalizeResume";

const fr = normalizeResume(frJson as unknown as Resume);

const frLabels: Labels = {
    about: "À propos",
    basedInPrefix: "Basé à",
    contact: "Contact",
    switch: "View in English",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    education: "Formation",
    contactSection: "Contact",
};

export default function Page() {
    return <ResumePage resume={fr} switchHref="/en" labels={frLabels} />;
}
