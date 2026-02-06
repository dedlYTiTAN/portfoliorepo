"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-zinc-900/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <Card variant="glass" className="p-8 md:p-10">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-zinc-300 leading-relaxed dark:text-zinc-300">
                            {portfolioData.personal.executiveSummary}
                        </p>
                    </div>
                </Card>
            </motion.div>
        </SectionWrapper>
    );
}
