"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5 bg-black">
            <div className="container mx-auto px-4">
                <p>
                    &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                </p>
                <p className="mt-2">
                    Built with Next.js, TypeScript, and Tailwind CSS.
                </p>
            </div>
            <div className="mt-4 opacity-50" style={{ letterSpacing: "1px" }}>
                DESIGNED BY{" "}
                <a 
                    href="https://www.astralprism.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors font-bold border-b border-primary/50 pb-0.5"
                    style={{ color: "var(--accent)" }}
                >
                    ASTRALPRISM
                </a>
            </div>
        </footer>
    );
}
