"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';
import EightPillars from '@/components/redesign/EightPillars';

interface PhilosophyClientProps {
    content: Record<string, string>;
}

export default function PhilosophyClient({ content }: PhilosophyClientProps) {
    const getContent = (key: string, fallback: string = "") => {
        return content[key] || fallback;
    };

    return (
        <div className="min-h-screen bg-background">
            <BannerAndBreadCrumb 
                title={getContent('philosophy_hero_title', 'The MIWAY <br /> <span class="text-accent">Framework.</span>')}
                subtitle={getContent('philosophy_hero_desc', 'A synthesis of global best practices and neural science. We architect the pathway for human potential.')}
                img={getContent('philosophy_hero_background', '/images/45115730_bnn2.jpg')}
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
                  {getContent('philosophy_pillars_tag', 'Pedagogical Framework')}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3 
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                dangerouslySetInnerHTML={{
                    __html: getContent('philosophy_pillars_title', 'Eight Pillars of Extraordinary <span class=" text-accent"> Learning.</span>')
                }}
              />

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                {getContent('philosophy_pillars_desc', 'A multidimensional architecture designed to activate the full spectrum of human cognitive capacity.')}
              </p>
            </FadeIn>
          </div>

          <EightPillars content={content} />
        </div>
      </section>
        </div>
    );
}
