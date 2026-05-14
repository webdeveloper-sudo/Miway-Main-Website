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
      <PremiumHero />

      {/* 2. Precision Metrics Bar */}
      <section className="py-24 border-y border-primary/5 bg-background-alt relative">
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-primary/5">
            {[
              {
                value: "50+",
                label: "Partner Schools",
                sub: "Elite Capabilities",
              },
              { value: "10K+", label: "Active Minds", sub: "Engaged Daily" },
              {
                value: "100+",
                label: "Neural Modules",
                sub: "Curriculum Depth",
              },
              { value: "25+", label: "Years R&D", sub: "Cognitive Science" },
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
          <OurPhilosophy />
        </div>
      </section>
      {/* 3.5 Ten Dimensions of Human Genius */}
      <TenDimensions />

      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <GeniusSpiral />
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

      {/* 7. Curriculum Portfolios - Institutional Grid */}
      <CurriculamPortfolio />

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
                        Spiral Learning
                      </span>
                      <div className="w-10 h-px bg-accent" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                      Knowledge Grows in
                      <span className=" text-accent"> Circles.</span>
                    </h3>

                    <p className="text-md text-muted font-medium font-serif max-w-2xl">
                      True mastery is never linear. MIWAY's Spiral Learning
                      architecture revisits core concepts at progressively
                      deeper levels — each encounter building on the last,
                      creating knowledge that compounds with time.
                    </p>
                    <p className="text-md text-muted font-medium font-serif max-w-2xl">
                      Progressive lessons build on foundations. Cumulative
                      assessments reinforce previous knowledge. Recursive
                      projects revisit core ideas with fresh eyes. Learning
                      doesn't just accumulate — it multiplies.
                    </p>
                  </FadeIn>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      {
                        title: "Foundation",
                        desc: " Concepts are revisited with exponential complexity, anchoring knowledge into long-term neural mastery.",
                        icon: <Layers3 className="w-5 h-5" />,
                      },
                      {
                        title: "Deepening",
                        desc: "Leveraging spatial intelligence for complex.",
                        icon: <BrainCircuit className="w-5 h-5" />,
                      },
                      {
                        title: "Integration",
                        desc: "The spiral approach ensures no core concept is ever lost.",
                        icon: <Workflow className="w-5 h-5" />,
                      },
                      {
                        title: "Mastery",
                        desc: "The spiral approach ensures no core concept is ever lost.",
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

                          {/* Uncomment if needed */}
                          {/* 
        <p className="text-[16px] text-muted font-medium font-serif mt-2">
          {item.desc}
        </p> 
        */}
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
                      Deep Dive into Framework
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <MasterySpiral />
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
                    Parent Trust
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold max-w-4xl text-primary tracking-tight mb-6 md:mb-6">
                  When Parents Choose MIWAY <br />
                  <span className=" text-accent">They Choose Certainty</span>
                </h3>
              </div>
              <div className="py-10">
                <Link href="/bundles">
                  <Button
                    size="md"
                    className="rounded-full px-8 py-3  bg-primary text-white text-lg font-bold"
                  >
                    View Full Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
          <ParentChoose />
        </div>
      </section>

      {/* 9. Testimonials - Voices of Transformation */}
      <Testimonials />
    </main>
  );
}
