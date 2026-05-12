"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Book, ArrowRight, BookOpen, Rocket, Sparkles, Target } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

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
            <BannerAndBreadCrumb 
                title={content['bundles_hero_title'] || 'Premium <br /> <span class="text-accent">Portfolios.</span>'}
                subtitle={content['bundles_hero_desc'] || 'Engineered for high-engagement schools. Complete ecosystems designed for the modern classroom.'}
            />

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
                                                 <div className={`w-14 h-14 bg-gradient-to-br ${bundle.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
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
        </div>
    );
}
