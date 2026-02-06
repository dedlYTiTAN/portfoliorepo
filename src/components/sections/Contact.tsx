"use client";

import { HTMLAttributes, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple Input Component
const Input = ({ className, ...props }: HTMLAttributes<HTMLInputElement> & { type?: string, placeholder?: string, required?: boolean }) => (
    <input
        className={cn(
            "w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            className
        )}
        {...props}
    />
);

// Simple Textarea Component
const Textarea = ({ className, ...props }: HTMLAttributes<HTMLTextAreaElement> & { placeholder?: string, rows?: number, required?: boolean }) => (
    <textarea
        className={cn(
            "w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
            className
        )}
        {...props}
    />
);

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted!");
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: portfolioData.personal.email,
            href: `mailto:${portfolioData.personal.email}`,
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: portfolioData.personal.phone,
            href: `tel:${portfolioData.personal.phone.replace(/\s/g, "")}`,
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            value: "View Profile",
            href: portfolioData.personal.github,
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: "Connect",
            href: portfolioData.personal.linkedin,
        },
    ];

    return (
        <SectionWrapper id="contact" className="bg-gradient-to-t from-black to-zinc-900/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-zinc-400">
                        Interested in working together or have a question? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                        <div className="grid gap-4">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={method.href.startsWith("http") ? "_blank" : undefined}
                                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group"
                                >
                                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400 font-medium">{method.label}</p>
                                        <p className="text-white font-medium">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-6">
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-zinc-400">
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <Button
                                    variant="ghost"
                                    className="mt-6"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send another
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                                        Your Name
                                    </label>
                                    <Input id="name" type="text" placeholder="John Doe" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                                        Your Email
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" required />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                                        Message
                                    </label>
                                    <Textarea id="message" rows={4} placeholder="Hello, I'd like to discuss..." required />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full mt-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
