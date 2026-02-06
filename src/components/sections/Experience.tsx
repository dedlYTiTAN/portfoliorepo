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
                        <Card className="p-6 md:p-8 flex flex-col md:flex-row gap-4 border-l-4 border-l-primary/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Briefcase className="w-24 h-24" />
                            </div>

                            <div className="flex-1 z-10">
                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <p className="text-primary font-medium mb-1">{job.company}</p>
                                <p className="text-sm text-zinc-500 mb-2">{job.location}</p>
                            </div>

                            <div className="md:text-right z-10">
                                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-zinc-300 border border-white/10">
                                    {job.period}
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
