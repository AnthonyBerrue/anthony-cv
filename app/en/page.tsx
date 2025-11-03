import type { Resume } from "@/types/resume";
import ResumePage from "@/components/ResumePage";
import enJson from "@/content/resume.en.json";
import {normalizeResume} from "@/lib/normalizeResume";


const en = normalizeResume(enJson as unknown as Resume);

export default function Page() {

    return <ResumePage resume={en} switchHref="/" switchLabel="Voir en français" />;
}
