import React from "react";

type Props = {
    heading: string;
    sub?: string;
    href?: string;
    children?: React.ReactNode
};

export default function Card({ heading, sub, href, children }: Readonly<Props>) {

    const Title = (
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
            {href ? <a className="link" href={href}>{heading}</a> : heading}
        </h3>
    );

    return (
        <article className="card">
            {Title}
            {sub && <p className="mt-1 lead">{sub}</p>}
            {children}
        </article>
    );
}
