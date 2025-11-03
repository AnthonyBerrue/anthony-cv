import "./globals.css";
import type { Metadata } from "next";
import SkipLink from "@/ui/SkipLink";
import React from "react";


const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
    title: "Anthony Berrué — CV",
    description: "Static CV exported with Next.js",
    metadataBase: new URL("https://anthonyberrue.github.io"),
    openGraph: {
        title: "Anthony Berrué — CV",
        images: [`${prefix}/avatar.webp`],
    },
    icons: { icon: `${prefix}/favicon.ico` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
        <body>
        <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f0f4ff] via-[#e9f3ff] to-[#f6f9ff] dark:from-[#0b0e17] dark:via-[#141926] dark:to-[#1a2033]"
        />
        <SkipLink />
        {children}
        </body>
        </html>
    );
}
