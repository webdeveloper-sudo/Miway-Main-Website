"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Infinity,
  Book,
  Anchor,
  Layers3,
  BrainCircuit,
  Gem,
  Workflow,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

// New Redesigned Components
import PremiumHero from "@/components/redesign/PremiumHero";
import MasterySpiral from "@/components/redesign/MasterySpiral";
import EightPillars from "@/components/redesign/EightPillars";
import GeniusSpiral from "@/components/redesign/GeniusSpiral";
import TenDimensions from "@/components/redesign/TenDimensions";
import FounderMessage from "@/components/FounderMessage";
import CurriculamPortfolio from "@/components/CurriculamPortfolio";
import ParentChoose from "@/components/redesign/ParentChoose";
import Testimonials from "@/components/redesign/Testimonials";
import OurPhilosophy from "@/components/redesign/OurPhilosophy";

interface HomeClientProps {
  content: Record<string, string>;
}

export default function HomeClient({ content }: HomeClientProps) {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  return (
    <main className="overflow-hidden bg-background">
      {/* 1. Premium Institutional Hero */}
      <PremiumHero content={content} />

      {/* 2. Precision Metrics Bar */}
      <section className="py-24 border-y border-primary/5 bg-background-alt relative">
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:divide-x md:divide-primary/5">
            {[
              {
                value: getContent("home_stats_schools_value", "50+"),
                label: getContent("home_stats_schools_label", "Partner Schools"),
                sub: getContent("home_stats_schools_sub", "Elite Capabilities"),
              },
              {
                value: getContent("home_stats_minds_value", "10K+"),
                label: getContent("home_stats_minds_label", "Active Minds"),
                sub: getContent("home_stats_minds_sub", "Engaged Daily"),
              },
              {
                value: getContent("home_stats_modules_value", "100+"),
                label: getContent("home_stats_modules_label", "Neural Modules"),
                sub: getContent("home_stats_modules_sub", "Curriculum Depth"),
              },
              {
                value: getContent("home_stats_rd_value", "25+"),
                label: getContent("home_stats_rd_label", "Years R&D"),
                sub: getContent("home_stats_rd_sub", "Cognitive Science"),
              },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i} className="text-center px-8">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[12px] font-semibold text-muted uppercase tracking-[0.3em] mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted opacity-60 uppercase tracking-widest">
                  {stat.sub}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <OurPhilosophy content={content} />
        </div>
      </section>
      {/* 3.5 Ten Dimensions of Human Genius */}
      <TenDimensions content={content} />

      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <GeniusSpiral content={content} />
        </div>
      </section>

      

      {/* 4. Eight Pillars of Extraordinary Learning */}
      <section className="section-padding bg-background-alt relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  {getContent("home_pillars_tag", "Pedagogical Framework")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: getContent(
                    "home_pillars_title",
                    'Eight Pillars of Extraordinary <span class=" text-accent"> Learning.</span>',
                  ),
                }}
              />

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                {getContent(
                  "home_pillars_desc",
                  "A multidimensional architecture designed to activate the full spectrum of human cognitive capacity.",
                )}
              </p>
            </FadeIn>
          </div>

          <EightPillars content={content} />
        </div>
      </section>

      {/* 7. Curriculum Portfolios - Institutional Grid */}
      <CurriculamPortfolio content={content} />

      {/* 5. The Mastery Spiral Journey */}
      <section className="section-padding bg-background overflow-hidden relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <FadeIn>
                <div className="max-w-4xl text-left mb-8">
                  <FadeIn>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-10 h-px bg-accent" />
                      <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                        {getContent("home_mastery_tag", "Spiral Learning")}
                      </span>
                      <div className="w-10 h-px bg-accent" />
                    </div>
                    <h3
                      className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                      dangerouslySetInnerHTML={{
                        __html: getContent(
                          "home_mastery_title",
                          'Knowledge Grows in <span class=" text-accent"> Circles.</span>',
                        ),
                      }}
                    />

                    <p className="text-md text-muted font-medium font-serif max-w-2xl mb-4">
                      {getContent(
                        "home_mastery_desc_1",
                        "True mastery is never linear. MIWAY's Spiral Learning architecture revisits core concepts at progressively deeper levels — each encounter building on the last, creating knowledge that compounds with time.",
                      )}
                    </p>
                    <p className="text-md text-muted font-medium font-serif max-w-2xl">
                      {getContent(
                        "home_mastery_desc_2",
                        "Progressive lessons build on foundations. Cumulative assessments reinforce previous knowledge. Recursive projects revisit core ideas with fresh eyes. Learning doesn't just accumulate — it multiplies.",
                      )}
                    </p>
                  </FadeIn>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      {
                        title: getContent("home_mastery_point1_title", "Foundation"),
                        desc: getContent(
                          "home_mastery_point1_desc",
                          " Concepts are revisited with exponential complexity, anchoring knowledge into long-term neural mastery.",
                        ),
                        icon: <Layers3 className="w-5 h-5" />,
                      },
                      {
                        title: getContent("home_mastery_point2_title", "Deepening"),
                        desc: getContent(
                          "home_mastery_point2_desc",
                          "Leveraging spatial intelligence for complex.",
                        ),
                        icon: <BrainCircuit className="w-5 h-5" />,
                      },
                      {
                        title: getContent("home_mastery_point3_title", "Integration"),
                        desc: getContent(
                          "home_mastery_point3_desc",
                          "The spiral approach ensures no core concept is ever lost.",
                        ),
                        icon: <Workflow className="w-5 h-5" />,
                      },
                      {
                        title: getContent("home_mastery_point4_title", "Mastery"),
                        desc: getContent(
                          "home_mastery_point4_desc",
                          "The spiral approach ensures no core concept is ever lost.",
                        ),
                        icon: <Gem className="w-5 h-5" />,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-5 items-start bg-primary px-4 py-4 rounded-sm"
                      >
                        <div className="w-10 h-10 rounded-full bg-accent p-2 flex items-center justify-center flex-shrink-0 text-primary">
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="md:text-2xl text-xl font-bold text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-10">
                  <Link href="/philosophy">
                    <Button
                      size="md"
                      className="rounded-full px-8 py-3  bg-primary text-white text-lg font-bold"
                    >
                      {getContent("home_mastery_cta", "Deep Dive into Framework")}
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <MasterySpiral content={content} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Founder Authority Section */}
      <FounderMessage content={content} />

      {/* 6. Why parents choose MIWAY - Institutional Grid */}
      <section className="section-padding bg-background-alt relative">
        <div className="container-premium">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                    {getContent("home_parent_trust_tag", "Parent Trust")}
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>
                <h3
                  className="text-4xl md:text-6xl font-bold max-w-4xl text-primary tracking-tight mb-6 md:mb-6"
                  dangerouslySetInnerHTML={{
                    __html: getContent(
                      "home_parent_trust_title",
                      'When Parents Choose MIWAY <br /><span class=" text-accent">They Choose Certainty</span>',
                    ),
                  }}
                />
              </div>
              <div className="py-10">
                {/* <Link href="/bundles">
                  <Button
                    size="md"
                    className="rounded-full px-8 py-3  bg-primary text-white text-lg font-bold"
                  >
                    {getContent("home_parent_trust_cta", "View Full Catalog")}
                  </Button>
                </Link> */}
              </div>
            </div>
          </FadeIn>
          <ParentChoose content={content} />
        </div>
      </section>

      {/* 9. Testimonials - Voices of Transformation */}
      <Testimonials content={content} />
    </main>
  );
}
