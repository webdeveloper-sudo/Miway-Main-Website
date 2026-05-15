"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowRight, Sparkles, Zap, Globe, Target } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

interface SchoolsClientProps {
    content: Record<string, string>;
}

export default function SchoolsClient({ content }: SchoolsClientProps) {
    return (
        <div className="min-h-screen bg-background">
            <BannerAndBreadCrumb 
                title={content['schools_hero_title'] || 'Elite School <br /> <span class="text-accent">Network.</span>'}
                subtitle={content['schools_hero_desc'] || 'Join India\'s most progressive educational institutions. We partner with leaders who aim for global academic superiority.'}
                img={content['schools_hero_background'] || '/images/45115730_bnn2.jpg'}
            />

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
                        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-12">The MIWAY <span className="text-accent">Standard.</span></h2>
                    </FadeIn>
                </div>
                <div className="container-premium">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { id: 1, icon: Globe, title: content['schools_standard_1_title'] || 'Global Integration', desc: content['schools_standard_1_desc'] || 'Aligning your institution with world-class academic benchmarks.' },
                            { id: 2, icon: Sparkles, title: content['schools_standard_2_title'] || 'Curricular Mastery', desc: content['schools_standard_2_desc'] || 'Deployment of neuroscience-backed learning ecosystems.' },
                            { id: 3, icon: Zap, title: content['schools_standard_3_title'] || 'Seamless Execution', desc: content['schools_standard_3_desc'] || 'Immediate, high-impact implementation with zero downtime.' },
                            { id: 4, icon: Target, title: content['schools_standard_4_title'] || 'Strategic Growth', desc: content['schools_standard_4_desc'] || 'Long-term partnership focused on institutional evolution.' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="group relative h-full">
                                {/* Subtle Background Glow */}
                                <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />
                                
                                <div className="relative glass-card p-10 h-full flex flex-col hover:border-primary/20 transition-colors overflow-hidden">
                                    {/* Watermark Icon */}
                                    <item.icon 
                                        className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" 
                                        size={180} 
                                    />
                                    
                                    <div className="w-16 h-16 rounded-full border text-accent bg-primary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        <item.icon size={32} />
                                    </div>
                                    
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-4 tracking-tight">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-[16px] text-muted font-medium font-serif leading-relaxed opacity-90">
                                        {item.desc}
                                    </p>
                                    
                                    <div className="mt-auto pt-8">
                                        <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
