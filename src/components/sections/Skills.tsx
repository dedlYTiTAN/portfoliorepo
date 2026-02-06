"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

const skillCategories = [
    { title: "Programming", skills: portfolioData.skills.programming },
    { title: "ML / AI", skills: portfolioData.skills.mlAi },
    { title: "Libraries & Tools", skills: portfolioData.skills.librariesTools },
    { title: "Data Engineering", skills: portfolioData.skills.dataEngineering },
    { title: "Cloud & DevOps", skills: portfolioData.skills.cloudDevOps },
    { title: "Data Visualization", skills: portfolioData.skills.dataViz },
    { title: "Personal Skills", skills: portfolioData.skills.personal },
];

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    A comprehensive toolkit for building end-to-end AI solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full p-6 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-white/5 rounded-full text-zinc-300 border border-white/5 hover:border-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
