"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Book, ArrowRight, BookOpen, Rocket, Sparkles, Target } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const ICON_MAP = {
    Rocket,
    Sparkles,
    Target,
    Book
};

interface BundlesClientProps {
    content: Record<string, string>;
    bundles: any[];
}

export default function BundlesClient({ content, bundles }: BundlesClientProps) {
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
                                {content['bundles_hero_label'] || 'Curriculum Solutions'}
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-primary tracking-tight mb-8" 
                            dangerouslySetInnerHTML={{ __html: content['bundles_hero_title'] || 'Premium <br /> <span class="text-accent">Portfolios.</span>' }} 
                        />
                        <p className="text-xl md:text-2xl text-muted font-medium max-w-3xl mx-auto font-serif italic mb-12">
                            {content['bundles_hero_desc'] || 'Engineered for high-engagement schools. Complete ecosystems designed for the modern classroom.'}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-premium">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {bundles.map((bundle, index) => {
                            const Icon = ICON_MAP[bundle.icon as keyof typeof ICON_MAP] || Book;
                            return (
                                <FadeIn key={bundle.id} delay={index * 0.05}>
                                    <div className="group relative h-full bg-white p-10 rounded-[1rem] border border-primary/5 overflow-hidden hover:shadow-2xl transition-all duration-500 shadow-premium">
                                         {/* Corner Grade Badge */}
                                         <div 
                                             className="absolute -top-2 -right-2 w-40 h-40 flex items-center justify-center transition-transform group-hover:scale-105 duration-700 z-20"
                                             style={{ 
                                                 backgroundColor: bundle.color_code || 'var(--primary)',
                                                 borderRadius: '0 0 0 100%',
                                             }}
                                         >
                                             <span className="text-white font-bold text-[12px] uppercase tracking-widest rotate-45 translate-x-3 -translate-y-3 text-center px-4 leading-tight">
                                                 {bundle.grades}
                                             </span>
                                         </div>

                                         <div className="relative z-10 h-full flex flex-col">
                                             <div className="mb-10">
                                                 <div className={`w-14 h-14 bg-gradient-to-br ${bundle.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                                     <Icon size={28} />
                                                 </div>
                                             </div>

                                             <h3 className="text-4xl font-bold text-primary mb-4 font-serif leading-tight">{bundle.title}</h3>
                                             <p className="text-[12px] font-semibold text-accent uppercase tracking-[0.2em] mb-6">
                                                 {bundle.focus}
                                             </p>

                                            <p className="text-[16px] text-muted mb-10 leading-relaxed font-medium font-serif flex-grow">
                                                {bundle.description}
                                            </p>

                                            <div className="mt-auto pt-8 border-t border-primary/5 flex items-center justify-between">
                                                <div className="flex -space-x-2">
                                                    {[1, 2, 3].map(j => (
                                                        <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-background-alt flex items-center justify-center shadow-sm">
                                                            <Book size={12} className="text-muted" />
                                                        </div>
                                                    ))}
                                                </div>
                                                <Link href={`/bundles/${bundle.id}`}>
                                                    <Button size="sm" className="bg-primary text-white font-bold text-[10px] uppercase tracking-widest px-8 py-4 rounded-full shadow-premium hover:scale-105 transition-all">
                                                        Explore Portfolio <ArrowRight size={14} className="ml-2" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final Institutional Invitation */}
            <section className="py-24 relative overflow-hidden bg-background-alt">
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted mb-4 block">
                            Institutional Excellence
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-primary mb-12 tracking-tight italic font-serif">
                            Architect Your <br /> <span className="text-accent">Success.</span>
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
