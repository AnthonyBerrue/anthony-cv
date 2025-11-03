import type { Resume } from "@/types/resume";
import ResumePage from "@/components/ResumePage";
import frJson from "@/content/resume.fr.json";
import {normalizeResume} from "@/lib/normalizeResume";

const fr = normalizeResume(frJson as unknown as Resume);

export default function Page() {

    return <ResumePage resume={fr} switchHref="/en" switchLabel="View in English" />;
}
