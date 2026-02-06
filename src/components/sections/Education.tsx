"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <SectionWrapper id="education" className="bg-zinc-900/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Education</span>
                </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-6 md:p-8 flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg hidden sm:block">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                    <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
                                    <span className="text-sm font-mono text-zinc-400 whitespace-nowrap">{edu.period}</span>
                                </div>
                                <p className="text-zinc-300 font-medium">{edu.institution}</p>
                                {edu.gpa && (
                                    <p className="text-sm text-zinc-500 mt-2 font-mono">{edu.gpa}</p>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
