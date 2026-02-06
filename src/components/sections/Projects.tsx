"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-zinc-900/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Highlighting my work in NLP, Machine Learning, and Full-Stack Development.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card variant="glass" className="h-full p-6 flex flex-col group hover:border-primary/50">
                            <div className="flex items-start justify-between mb-4">
                                <FolderGit2 className="w-8 h-8 text-primary" />
                                <span className="text-xs font-mono text-zinc-400 border border-zinc-700 px-2 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-end justify-between mt-auto pt-4 gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium text-zinc-300"
                                        >
                                            #{tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                                        title="View Project"
                                    >
                                        <FolderGit2 className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
