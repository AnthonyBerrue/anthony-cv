"use client";

import Link from "next/link";
import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import Card from "@/ui/Card";
import SkillPill from "@/ui/SkillPill";
import Timeline from "@/ui/Timeline";
import Contact from "@/ui/Contact";
import type { Resume } from "@/types/resume";
import { toEducationItems, toExperienceItems } from "@/lib/toTimelineItems";

export type Labels = {
    about: string;
    basedInPrefix: string;
    contact: string;
    switch: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contactSection: string;
};

type Props = {
    resume: Resume;
    switchHref: string;
    labels: Labels;
};

export default function ResumePage({ resume, switchHref, labels }: Readonly<Props>) {
    const { basics, skills, projects, experience = [], education = [] } = resume;

    const expItems = toExperienceItems(experience);
    const eduItems = toEducationItems(education);

    return (
        <>
            <Hero />
            <main id="main">
                {/* À propos / About */}
                <Section title={labels.about} lead={basics.summary}>
                    <p className="mt-2">
                        {labels.basedInPrefix} {basics.location}. {labels.contact}:{" "}
                        <a className="link" href={`mailto:${basics.email}`}>{basics.email}</a>.
                    </p>
                    <p className="mt-2">
                        <Link className="link" href={switchHref}>{labels.switch}</Link>
                    </p>
                </Section>

                {/* Compétences / Skills */}
                <Section title={labels.skills}>
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

                {/* Projets / Projects */}
                <Section title={labels.projects}>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((p) => (
                            <Card key={p.name} heading={p.name} sub={p.summary} href={p.url} />
                        ))}
                    </div>
                </Section>

                {/* Expérience / Experience */}
                <Section title={labels.experience}>
                    <Timeline items={expItems} ariaLabel={labels.experience} />
                </Section>

                {/* Formation / Education */}
                <Section title={labels.education}>
                    <Timeline items={eduItems} ariaLabel={labels.education} />
                </Section>

                {/* Contact */}
                <Section title={labels.contactSection}>
                    <Contact email={basics.email} profiles={basics.profiles} />
                </Section>
            </main>

            <footer className="container py-10 opacity-70">
                © {new Date().getFullYear()} {basics.name}
            </footer>
        </>
    );
}
