type Profile = { network: string; url: string };
export default function Contact({ email, profiles = [] as Profile[] }: Readonly<{
    email?: string;
    profiles?: Profile[]
}>) {
    return (
        <nav aria-label="Contacts" className="flex gap-3 flex-wrap">
            {email && <a className="link" href={`mailto:${email}`} aria-label="Email">✉️ Email</a>}
            {profiles.map(p => <a className="link" key={p.url} href={p.url} aria-label={p.network}>{p.network}</a>)}
        </nav>
    );
}
