"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';
import EightPillars from '@/components/redesign/EightPillars';

interface PhilosophyClientProps {
    content: Record<string, string>;
}

export default function PhilosophyClient({ content }: PhilosophyClientProps) {
    return (
        <div className="min-h-screen bg-background">
            <BannerAndBreadCrumb 
                title={content['philosophy_hero_title'] || 'The MIWAY <br /> <span class="text-accent">Framework.</span>'}
                subtitle={content['philosophy_hero_desc'] || 'A synthesis of global best practices and neural science. We architect the pathway for human potential.'}
            />

           
      {/* 4. Eight Pillars of Extraordinary Learning */}
      <section className="section-padding bg-background-alt relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  Pedagogical Framework
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                Eight Pillars of Extraordinary
                <span className=" text-accent"> Learning.</span>
              </h3>

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                A multidimensional architecture designed to activate the full
                spectrum of human cognitive capacity.
              </p>
            </FadeIn>
          </div>

          <EightPillars />
        </div>
      </section>
        </div>
    );
}
