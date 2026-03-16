"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Professional <span className="gradient-text">Experience</span>
                </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
                {portfolioData.experience.map((job, index) => (
                    <motion.div
                        key={job.role + job.period}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-6 md:p-8 border-l-4 border-l-primary/50 relative overflow-hidden group hover:border-primary/30 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Briefcase className="w-24 h-24" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                                        <div className="flex items-center gap-2">
                                            {job.link ? (
                                                <a 
                                                    href={job.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary font-medium hover:underline flex items-center gap-1"
                                                >
                                                    {job.company}
                                                </a>
                                            ) : (
                                                <span className="text-primary font-medium">{job.company}</span>
                                            )}
                                            <span className="w-1 h-1 bg-zinc-700 rounded-full hidden md:block" />
                                            <span className="text-sm text-zinc-500">{job.location}</span>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-zinc-300 border border-white/10">
                                            {job.period}
                                        </span>
                                    </div>
                                </div>

                                {job.description && (
                                    <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-primary/20 pl-4 py-1 italic">
                                        {job.description}
                                    </p>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
