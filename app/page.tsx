import Link from "next/link";
import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import Card from "@/ui/Card";
import SkillPill from "@/ui/SkillPill";
import Timeline from "@/ui/Timeline";
import Contact from "@/ui/Contact";
import fr from "@/content/resume.fr.json";

export default function Page() {
    const { basics, skills, projects, experience = [], education = [] } = fr as any;

    return (
        <>
            <Hero />
            <main id="main">
                <Section title="À propos" lead={basics.summary}>
                    <p className="mt-2">
                        Basé à {basics.location}. Contact : <a className="link" href={`mailto:${basics.email}`}>{basics.email}</a>.
                    </p>
                    <p className="mt-2"><Link className="link" href="/en">View in English</Link></p>
                </Section>

                <Section title="Compétences">
                    <div className="space-y-5">
                        {skills.map((s: any) => (
                            <div key={s.name}>
                                <h3 className="font-semibold">{s.name}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {s.keywords.map((k: string) => <SkillPill key={k}>{k}</SkillPill>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Projets">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects.map((p: any) => <Card key={p.name} heading={p.name} sub={p.summary} href={p.url} />)}
                    </div>
                </Section>

                <Section title="Expérience">
                    <Timeline items={experience} ariaLabel="Expérience professionnelle" />
                </Section>

                <Section title="Formation">
                    <Timeline items={education} ariaLabel="Formation" />
                </Section>

                <Section title="Contact">
                    <Contact email={basics.email} profiles={basics.profiles} />
                </Section>
            </main>
            <footer className="container py-10 opacity-70">© {new Date().getFullYear()} {basics.name}</footer>
        </>
    );
}
