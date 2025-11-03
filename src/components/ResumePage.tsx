"use client";

import Link from "next/link";
import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import Card from "@/ui/Card";
import SkillPill from "@/ui/SkillPill";
import Timeline from "@/ui/Timeline";
import Contact from "@/ui/Contact";
import type { Resume } from "@/types/resume";
import {toEducationItems, toExperienceItems} from "@/lib/toTimelineItems";

type Props = {
    resume: Resume;
    switchHref: string;
    switchLabel: string;
};

export default function ResumePage({
                                       resume,
                                       switchHref,
                                       switchLabel,
                                   }: Readonly<Props>) {
    const { basics, skills, projects, experience = [], education = [] } = resume;

    const expItems = toExperienceItems(experience);
    const eduItems = toEducationItems(education);

    return (
        <>
            <Hero />
            <main id="main">
                {/* À propos */}
                <Section title="À propos" lead={basics.summary}>
                    <p className="mt-2">
                        Basé à {basics.location}. Contact:{" "}
                        <a className="link" href={`mailto:${basics.email}`}>
                            {basics.email}
                        </a>.
                    </p>
                    <p className="mt-2">
                        <Link className="link" href={switchHref}>
                            {switchLabel}
                        </Link>
                    </p>
                </Section>

                {/* Compétences */}
                <Section title="Compétences">
                    <div className="space-y-5">
                        {skills.map((s) => (
                            <div key={s.name}>
                                <h3 className="font-semibold">{s.name}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {s.keywords.map((k) => (
                                        <SkillPill key={`${s.name}-${k}`}>{k}</SkillPill>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Projets */}
                <Section title="Projets">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <Card key={p.name} heading={p.name} sub={p.summary} href={p.url} />
                        ))}
                    </div>
                </Section>

                {/* Expérience */}
                <Section title="Expérience">
                    <Timeline items={expItems} ariaLabel="Expérience professionnelle" />
                </Section>

                {/* Formation */}
                <Section title="Formation">
                    <Timeline items={eduItems} ariaLabel="Formation" />
                </Section>

                {/* Contact */}
                <Section title="Contact">
                    <Contact email={basics.email} profiles={basics.profiles} />
                </Section>
            </main>

            <footer className="container py-10 opacity-70">
                © {new Date().getFullYear()} {basics.name}
            </footer>
        </>
    );
}
