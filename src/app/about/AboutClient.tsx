"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Target, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

interface AboutClientProps {
    content: Record<string, string>;
}

export default function AboutClient({ content }: AboutClientProps) {
    return (
        <div className="min-h-screen bg-background">
            {/* 1. Institutional Hero */}
            <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden bg-background-alt">
                <div className="absolute inset-0 opacity-[0.03] texture-grid" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-6 justify-center">
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                {content['about_hero_label'] || 'The MIWAY Narrative'}
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tight mb-8" 
                            dangerouslySetInnerHTML={{ __html: content['about_hero_title'] || 'Defining the <br /> <span class="text-accent">Future of Learning.</span>' }} 
                        />
                        <p className="text-xl md:text-2xl text-muted font-medium max-w-3xl mx-auto font-serif italic mb-12">
                            {content['about_hero_desc'] || 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning materials.'}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Pedagogy & Authority */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-premium">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn className="relative">
                            <div className="relative aspect-[4/5] rounded-[1rem] overflow-hidden shadow-premium group">
                                <Image
                                    src={content['about_pedagogy_image'] || "/visionary-success.jpg"}
                                    alt="Visionary Success"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>

                            <motion.div 
                                className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[1rem] max-w-sm hidden md:block border border-white/20 shadow-premium"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif italic">Our Pedagogy</h4>
                                <p className="text-sm text-muted leading-relaxed font-medium">
                                    We blend Whole Brain Learning with Multiple Intelligences and 21st Century Skills to offer a truly immersive educational experience.
                                </p>
                            </motion.div>
                        </FadeIn>

                        <div>
                            <FadeIn direction="left">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-px bg-accent" />
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                        Philosophical Core
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-8">
                                    Every learner is <span className="text-accent">unique.</span>
                                </h3>
                                <p className="text-xl text-muted font-medium font-serif mb-10 leading-relaxed">
                                    At MIWAY, we believe that education should be personalized to amplify distinct strengths. By engaging the whole brain, we cultivate future-ready problem solvers.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { title: 'Neuroscience', icon: Zap, color: 'var(--brand-gold)' },
                                        { title: 'Curiosity', icon: Sparkles, color: 'var(--brand-blue)' }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4 p-6 rounded-[1rem] bg-background-alt border border-primary/5 hover:border-primary/20 transition-all">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${feat.color}15`, color: feat.color }}>
                                                <feat.icon size={24} />
                                            </div>
                                            <span className="font-bold text-primary text-lg">{feat.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision */}
            <section className="section-padding bg-background-alt relative overflow-hidden">
                <div className="container-premium relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {[
                            {
                                title: 'Our Mission',
                                text: content['about_mission_text'] || 'To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth.',
                                icon: Target,
                                color: 'var(--brand-purple-deep)',
                            },
                            {
                                title: 'Our Vision',
                                text: content['about_vision_text'] || 'To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity and sharpen critical thinking.',
                                icon: Award,
                                color: 'var(--brand-gold)',
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.1 * i}>
                                <div className="bg-white p-12 md:p-16 rounded-[1rem] h-full transition-all duration-500 group relative overflow-hidden border border-primary/5 shadow-premium">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-background-alt rounded-full flex items-center justify-center mb-8 border border-primary/5">
                                            <item.icon size={32} style={{ color: item.color }} />
                                        </div>
                                        <h2 className="text-4xl font-bold mb-6 tracking-tight font-serif italic text-primary">{item.title}</h2>
                                        <p className="text-xl text-muted font-medium font-serif leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Founder Profile */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-premium">
                    <div className="bg-background-alt rounded-[1rem] overflow-hidden shadow-premium relative border border-primary/5">
                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="p-10 md:p-20 lg:p-24">
                                <FadeIn>
                                    <div className="inline-flex items-center gap-3 mb-6">
                                        <div className="w-10 h-px bg-accent" />
                                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                            Visionary Leadership
                                        </span>
                                    </div>
                                    <h3 className="text-5xl font-bold text-primary mb-4 tracking-tight font-serif italic">
                                        {content['about_founder_name'] || 'Dr. J. Arawindhan'}
                                    </h3>
                                    <p className="text-[12px] font-semibold text-muted mb-12 uppercase tracking-[0.3em]">
                                        {content['about_founder_role'] || 'Chief Mentor & Visionary'}
                                    </p>

                                    <div className="relative glass-card p-8 md:p-12 rounded-[1rem] border-white/50 mb-10 shadow-sm">
                                        <div className="text-xl text-primary font-medium leading-relaxed font-serif italic"
                                            dangerouslySetInnerHTML={{ __html: content['about_founder_bio'] || `<p>Dr. J. Arawindhan, the visionary behind MIWAY, is a dedicated leader in transformative education.</p>` }}
                                        />
                                    </div>

                                    <div className="font-serif italic text-3xl text-primary/30">Dr. J. Arawindhan</div>
                                </FadeIn>
                            </div>
                            
                            <FadeIn direction="left" className="relative h-full min-h-[600px]">
                                <Image
                                    src="/founder-photo.png"
                                    alt="Dr. J. Arawindhan"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Institutional Brochure */}
            <section className="section-padding bg-background-alt">
                <div className="container-premium text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-6 justify-center">
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                Academic Blueprint
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-12">
                            Digital <span className="text-accent">Manifesto.</span>
                        </h2>
                        <p className="text-xl text-muted font-medium max-w-2xl mx-auto font-serif italic mb-20">
                            Explore the complete pedagogical architecture through the official MIWAY digital resources.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((page) => (
                            <FadeIn key={page} delay={0.05 * page}>
                                <div className="group relative aspect-[3/4] rounded-[0.5rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src={`/brochure/page-${page.toString().padStart(2, '0')}.jpg`}
                                        alt={`Brochure Page ${page}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] border-b border-white pb-1">View Page</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Institutional Invitation */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted mb-4 block">
                            The Future of Education
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-primary mb-12 tracking-tight italic font-serif">
                            Ready to Author <br /> the Future?
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
