"use client";

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Target, Sparkles, Zap, ArrowRight, BrainCircuit, Rocket, ShieldCheck, Globe } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

interface AboutClientProps {
    content: Record<string, string>;
}

export default function AboutClient({ content }: AboutClientProps) {
    return (
        <div className="min-h-screen bg-slate-50">
            <BannerAndBreadCrumb 
                title={content['about_hero_title'] || 'Institutional <br /> <span class="text-accent">Legacy.</span>'}
                subtitle={content['about_hero_desc'] || 'MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning ecosystems.'}
            />

            {/* 2. Pedagogy & Authority */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-premium">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <FadeIn className="relative">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white">
                                <Image
                                    src={content['about_pedagogy_image'] || "/visionary-success.jpg"}
                                    alt="Visionary Success"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                            </div>

                            <div className="absolute -bottom-10 -right-4 md:-right-10 glass-card p-10 rounded-[2rem] max-w-sm hidden md:block border border-primary/5 shadow-2xl">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 text-accent">
                                    <BrainCircuit size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">Neural Pedagogy</h4>
                                <p className="text-[15px] text-muted leading-relaxed font-medium">
                                    Blending Whole Brain Learning with Multiple Intelligences to create truly immersive educational trajectories.
                                </p>
                            </div>
                        </FadeIn>

                        <div>
                            <FadeIn direction="left">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="w-10 h-px bg-accent" />
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                        Philosophical Core
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-8 font-serif leading-[1.1]">
                                    Every learner is <span className="text-accent">unique.</span>
                                </h3>
                                <p className="text-xl text-muted font-medium font-serif mb-12 leading-relaxed">
                                    At MIWAY, we believe that education should be personalized to amplify distinct strengths. By engaging the whole brain, we cultivate future-ready problem solvers.
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { title: 'Neuroscience', icon: Zap, desc: 'Brain-aligned methodology' },
                                        { title: 'Innovation', icon: Sparkles, desc: 'Creative problem solving' }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex flex-col gap-4 p-8 rounded-[2rem] bg-slate-50 border border-primary/5 hover:border-primary/20 transition-all group">
                                            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                                <feat.icon size={28} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-primary text-xl mb-1">{feat.title}</h4>
                                                <p className="text-sm text-muted font-medium">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Mission & Vision - Pillars UI */}
            <section className="section-padding bg-slate-50 relative overflow-hidden">
                <div className="container-premium relative z-10">
                    <div className="text-center mb-20">
                        <FadeIn>
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-10 h-px bg-accent" />
                                <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                    Directives
                                </span>
                                <div className="w-10 h-px bg-accent" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight font-serif">Institutional <span className="text-accent">Mandate.</span></h2>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: 'Our Mission',
                                text: content['about_mission_text'] || 'To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth.',
                                icon: Target,
                                label: 'Strategy'
                            },
                            {
                                title: 'Our Vision',
                                text: content['about_vision_text'] || 'To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity and sharpen critical thinking.',
                                icon: Rocket,
                                label: 'Future'
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={0.1 * i} className="group relative h-full">
                                <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />
                                <div className="relative glass-card p-12 md:p-16 h-full flex flex-col hover:border-primary/20 transition-colors overflow-hidden">
                                    <item.icon className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" size={240} />
                                    
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 text-accent">
                                        <item.icon size={32} />
                                    </div>
                                    
                                    <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] mb-4 block">{item.label}</span>
                                    <h3 className="text-3xl font-serif font-bold text-primary mb-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-muted font-medium font-serif leading-relaxed opacity-90">
                                        {item.text}
                                    </p>
                                    
                                    <div className="mt-auto pt-10">
                                        <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Founder Profile - Enhanced UI */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-premium">
                    <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl relative border border-primary/5">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_50%)] opacity-[0.05]" />
                        
                        <div className="grid lg:grid-cols-2 items-center">
                            <div className="p-10 md:p-20 lg:p-24 relative z-10">
                                <FadeIn>
                                    <div className="inline-flex items-center gap-3 mb-8">
                                        <div className="w-10 h-px bg-accent" />
                                        <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white/80">
                                            Visionary Leadership
                                        </span>
                                    </div>
                                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight font-serif leading-tight">
                                        {content['about_founder_name'] || 'Dr. J. Arawindhan'}
                                    </h3>
                                    <p className="text-[12px] font-bold text-accent mb-12 uppercase tracking-[0.4em]">
                                        {content['about_founder_role'] || 'Chief Mentor & Visionary'}
                                    </p>

                                    <div className="relative glass-card p-10 rounded-[2rem] border-white/10 mb-12 bg-white/5 backdrop-blur-md">
                                        <div className="text-xl text-white/90 font-medium leading-relaxed font-serif"
                                            dangerouslySetInnerHTML={{ __html: content['about_founder_bio'] || `<p>Dr. J. Arawindhan, the visionary behind MIWAY, is a dedicated leader in transformative education, pioneering brain-aligned learning systems.</p>` }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="h-[2px] w-12 bg-accent" />
                                        <div className="font-serif text-3xl text-white/40 tracking-wider">J. Arawindhan</div>
                                    </div>
                                </FadeIn>
                            </div>
                            
                            <FadeIn direction="left" className="relative h-full min-h-[600px] lg:min-h-full aspect-square lg:aspect-auto">
                                <Image
                                    src="/founder-photo.png"
                                    alt="Dr. J. Arawindhan"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary/40 lg:via-transparent lg:to-transparent" />
                                <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Verified Authority</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Institutional Brochure */}
            <section className="section-padding bg-slate-50">
                <div className="container-premium text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 mb-6 justify-center">
                            <div className="w-10 h-px bg-accent" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
                                Academic Blueprint
                            </span>
                            <div className="w-10 h-px bg-accent" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-12 font-serif">
                            Digital <span className="text-accent">Manifesto.</span>
                        </h2>
                        <p className="text-xl text-muted font-medium max-w-2xl mx-auto font-serif mb-20">
                            Explore the complete pedagogical architecture through the official MIWAY digital resources.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((page) => (
                            <FadeIn key={page} delay={0.05 * page}>
                                <div className="group relative aspect-[3/4] rounded-[1rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white">
                                    <Image
                                        src={`/brochure/page-${page.toString().padStart(2, '0')}.jpg`}
                                        alt={`Brochure Page ${page}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-[4px]">
                                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white mb-4">
                                            <ArrowRight size={20} />
                                        </div>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">View Page</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Institutional Invitation */}
            <section className="py-32 relative overflow-hidden bg-white border-t border-primary/5">
                <div className="container-premium relative z-10 text-center">
                    <FadeIn>
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-primary/5 flex items-center justify-center text-accent">
                                <Globe size={32} />
                            </div>
                        </div>
                        <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-muted mb-6 block">
                            The Future of Education
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-primary mb-12 tracking-tight font-serif leading-tight">
                            Ready to Author <br /> the <span className="text-accent">Evolution?</span>
                        </h2>
                        <Link href="/contact">
                            <Button size="md" className="rounded-full px-16 py-8 text-xl font-bold bg-primary text-white shadow-premium hover:scale-105 transition-all group">
                                Initiate Partnership
                                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.01]" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </section>
        </div>
    );
}
