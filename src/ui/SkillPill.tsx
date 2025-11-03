import React from "react";

export default function SkillPill({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <span className="inline-block rounded-full px-3 py-1 text-sm border border-neutral-300/70 dark:border-neutral-700/70">
      {children}
    </span>
    );
}
