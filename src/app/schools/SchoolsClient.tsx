"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

interface SchoolsClientProps {
    content: Record<string, string>;
}

export default function SchoolsClient({ content }: SchoolsClientProps) {
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
                                {content['schools_hero_label'] || 'Partner Ecosystem'}
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tight mb-8" 
                            dangerouslySetInnerHTML={{ __html: content['schools_hero_title'] || 'Elite School <br /> <span class="text-accent">Network.</span>' }} 
                        />
                        <p className="text-xl md:text-2xl text-muted font-medium max-w-3xl mx-auto font-serif italic mb-12">
                            {content['schools_hero_desc'] || 'Join India\'s most progressive educational institutions. We partner with leaders who aim for global academic superiority.'}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Support Grid */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-premium text-center mb-20">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-6 justify-center">
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                Deployment Support
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">The MIWAY <span className="text-accent">Standard.</span></h2>
                    </FadeIn>
                </div>
                <div className="container-premium">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((num, i) => {
                            const icons = [Globe, Sparkles, Zap];
                            const Icon = icons[i];
                            return (
                                <FadeIn key={i} delay={0.1 * i}>
                                    <div className="bg-background-alt p-12 rounded-[1rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 text-center h-full flex flex-col items-center shadow-premium hover:shadow-2xl">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md border border-primary/5">
                                            <Icon size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-4 font-serif italic tracking-tight">
                                            {content[`schools_standard_${num}_title`] || 'Standard Excellence'}
                                        </h3>
                                        <p className="text-[16px] text-muted font-medium leading-relaxed opacity-80 font-serif">
                                            {content[`schools_standard_${num}_desc`] || 'Comprehensive deployment and ongoing support for institutional mastery.'}
                                        </p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden bg-background-alt">
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted mb-4 block">
                            Institutional Invitation
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-primary mb-12 tracking-tight italic font-serif">
                            Join the <br /> <span className="text-accent">Elite Network.</span>
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
