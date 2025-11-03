import React from "react";

export type Item = {
    name: string;
    position?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
};

export default function Timeline({
                                     items, ariaLabel,
                                 }: Readonly<{ items: Item[]; ariaLabel: string }>) {
    return (<ol
            aria-label={ariaLabel}
            className="relative border-s border-neutral-200 dark:border-neutral-800"
        >
            {items.map((it) => {
                const liKey = `${it.name}-${it.startDate ?? ""}-${it.endDate ?? ""}`;
                return (<li key={liKey} className="ms-6 pb-6">
            <span
                className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-900 ring-2 ring-[--color-secondary]">
              <span className="h-2.5 w-2.5 rounded-full bg-[--color-secondary]"/>
            </span>
                        <div className="card">
                            <h3 className="font-semibold">{it.position ?? it.area ?? it.name}</h3>
                            <p className="text-sm opacity-80">
                                {it.name}
                                {it.studyType ? ` — ${it.studyType}` : ""}
                                {it.startDate ? ` • ${it.startDate}` : ""}
                                {it.endDate ? ` → ${it.endDate}` : ""}
                            </p>
                            {it.summary && <p className="mt-2">{it.summary}</p>}
                            {Array.isArray(it.highlights) && it.highlights.length > 0 && (
                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                    {it.highlights.map((h) => (<li key={`${liKey}-${h}`}>{h}</li>))}
                                </ul>)}
                        </div>
                    </li>);
            })}
        </ol>);
}
