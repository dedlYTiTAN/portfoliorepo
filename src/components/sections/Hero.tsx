"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    const { personal } = portfolioData;

    return (
        <SectionWrapper
            id="hero"
            className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                        Available for opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Hi, I am <br />
                    <span className="gradient-text">{personal.name}</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-zinc-300 mb-8"
                >
                    {personal.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
                >
                    {personal.shortSummary}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        size="lg"
                        variant="primary"
                        onClick={() => (window.location.href = "#contact")}
                    >
                        Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => window.open("/Keerthirajan_Murugesan_CV.pdf", "_blank")}
                    >
                        Download CV <Download className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
