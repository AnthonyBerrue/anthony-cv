"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
    return (
        <header className="sticky top-0 z-40 overflow-hidden rounded-b-3xl bg-gradient-to-br from-[#0d6efd] via-[#4c51bf] to-[#1e1b4b] text-white shadow-lg">
            <motion.div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundImage:
                        "radial-gradient(at 40% 20%, rgba(255,255,255,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,255,255,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255,255,255,0.05) 0px, transparent 50%)",
                    backgroundSize: "200% 200%",
                }}
            />
            <div className="relative z-10 container py-12 sm:py-16">
                <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-4">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl ring-4 ring-white/90 overflow-hidden shadow-xl">
                        {/* Important: préfixe pour un fichier de /public */}
                        <Image
                            src={`${prefix}/avatar.jpeg`}
                            alt="Portrait of Anthony Berrué"
                            fill
                            className="object-cover"
                            sizes="128px"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Anthony Berrué</h1>
                        <p className="text-lg text-white/90">Application Designer & Full-Stack Developer</p>
                    </div>

                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                        {/* Utilise Link pour bénéficier de basePath, et/ou préfixe */}
                        <Link
                            className="px-4 py-2 rounded-lg bg-white text-[#0d6efd] font-medium shadow-sm hover:bg-neutral-100 transition"
                            href={`${prefix}/cv.pdf`}
                            aria-label="Download CV PDF"
                        >
                            Download CV
                        </Link>

                        <a className="px-4 py-2 rounded-lg bg-transparent border border-white/40 text-white hover:bg-white/10 transition"
                           href="https://github.com/AnthonyBerrue" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="px-4 py-2 rounded-lg bg-transparent border border-white/40 text-white hover:bg-white/10 transition"
                           href="https://www.linkedin.com/in/anthony-berru%C3%A9-873879169/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
