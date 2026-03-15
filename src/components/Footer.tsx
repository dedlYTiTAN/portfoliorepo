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
            <div style="letter-spacing: 1px;">DESIGNED BY <a href="https://astralprism.co.uk" target="_blank" style="color: var(--acc); font-weight: bold; border-bottom: 1px solid var(--acc); padding-bottom: 1px; text-decoration: none;">ASTRALPRISM</a></div>
        </footer>
    );
}
