"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { Users } from "lucide-react";

export default function Leadership() {
    return (
        <SectionWrapper id="leadership">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Leadership & <span className="gradient-text">Activities</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {portfolioData.leadership.map((item, index) => (
                    <motion.div
                        key={item.role + item.organization}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card variant="gradient" className="p-6 h-full flex flex-col justify-center text-center">
                            <div className="mx-auto bg-white/10 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                            <p className="text-primary font-medium mb-3">{item.organization}</p>
                            {item.description && (
                                <p className="text-zinc-300 text-sm">{item.description}</p>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
