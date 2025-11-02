import React, { JSX } from "react";

type Props = { title?: string; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string; lead?: string; };

export default function Section({ title, lead, children, as: Tag = 'section', className }: Readonly<Props>) {
    const id = title ? `h-${title.toLowerCase().replaceAll(/\s+/g, '-')}` : undefined;
    return (
        <Tag aria-labelledby={id} className={`container py-8 ${className ?? ''}`}>
            {title && (
                <header className="mb-4">
                    <h2 id={id} className="h2">{title}</h2>
                    <div className="mt-2 h-1 w-28 rounded section-accent" />
                    {lead && <p className="mt-3 lead">{lead}</p>}
                </header>
            )}
            {children}
        </Tag>
    );
}
