"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Globe, Zap, Sparkles, Star, Layers, Activity, Compass, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const philosophies = [
    { title: 'Spiral Learning', step: '01', icon: Target, color: 'from-[#ed1c24] to-[#f9b233]' },
    { title: 'Seven Habits Integration', step: '02', icon: Star, color: 'from-[#662d91] to-[#0088cc]' },
    { title: 'Neural Integration', step: '03', icon: Brain, color: 'from-[#0088cc] to-[#76bc21]' },
    { title: 'Multiple Intelligences', step: '04', icon: Lightbulb, color: 'from-[#f9b233] to-[#ed1c24]' },
    { title: 'Bloom’s Taxonomy', step: '05', icon: Layers, color: 'from-[#76bc21] to-[#0088cc]' },
    { title: 'Six Thinking Hats', step: '06', icon: Compass, color: 'from-[#ed1c24] to-[#662d91]' },
    { title: 'Whole Brain Mastery', step: '07', icon: Zap, color: 'from-[#0f172a] to-[#334155]' },
    { title: '21st Century Skills', step: '08', icon: Globe, color: 'from-[#662d91] to-[#ed1c24]' },
    { title: 'Power Learning', step: '09', icon: Activity, color: 'from-[#ed1c24] to-[#76bc21]' }
];

import { Lightbulb } from 'lucide-react';

interface PhilosophyClientProps {
    content: Record<string, string>;
}

export default function PhilosophyClient({ content }: PhilosophyClientProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-background-alt">
                <div className="absolute inset-0 opacity-[0.03] texture-grid" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-6 justify-center">
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                {content['philosophy_hero_label'] || 'Scientific Pedagogy'}
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tight mb-8" 
                            dangerouslySetInnerHTML={{ __html: content['philosophy_hero_title'] || 'The MIWAY <br /> <span class="text-accent">Framework.</span>' }} 
                        />
                        <p className="text-xl md:text-2xl text-muted font-medium max-w-3xl mx-auto font-serif italic mb-12">
                            {content['philosophy_hero_desc'] || 'A synthesis of global best practices and neural science. We architect the pathway for human potential.'}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="section-padding bg-background relative">
                <div className="container-premium">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {philosophies.map((item, i) => (
                            <FadeIn key={i} delay={0.05 * i}>
                                <div className="group relative h-full bg-background-alt p-10 rounded-[1rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-premium hover:shadow-2xl">
                                    <div className="text-7xl font-bold text-primary/5 absolute right-8 top-8 font-serif italic select-none">{item.step}</div>
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                                        <item.icon className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                                        {content[`philosophy_item_${parseInt(item.step)}_title`] || item.title}
                                    </h3>
                                    <p className="text-[16px] text-muted font-medium font-serif leading-relaxed opacity-80">
                                        {content[`philosophy_item_${parseInt(item.step)}_desc`] || 'Advanced conceptual methodology designed for cognitive activation.'}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Institutional Invitation */}
            <section className="py-24 relative overflow-hidden bg-background-alt">
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted mb-4 block">
                            Architecture of Intelligence
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-primary mb-12 tracking-tight italic font-serif">
                            Ready to <br /> <span className="text-accent">Deploy?</span>
                        </h2>
                        <Link href="/contact">
                            <Button size="md" className="rounded-full px-16 py-8 text-xl font-bold bg-primary text-white shadow-premium hover:scale-105 transition-all group">
                                Initiate Evolution
                                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
