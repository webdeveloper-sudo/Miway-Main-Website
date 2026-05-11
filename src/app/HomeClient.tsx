"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Infinity, Book, Anchor } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

// New Redesigned Components
import PremiumHero from "@/components/redesign/PremiumHero";
import MasterySpiral from "@/components/redesign/MasterySpiral";
import EightPillars from "@/components/redesign/EightPillars";
import GeniusSpiral from "@/components/redesign/GeniusSpiral";
import TenDimensions from "@/components/redesign/TenDimensions";

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
        <div className="container-premium text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                Our Core Conviction
              </span>
              <div className="w-10 h-px bg-accent" />
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-12 md:mb-13">
              Every Child Is A <span className=" text-accent">Genius.</span>
            </h3>
          </FadeIn>
        </div>
        <div className="container-premium">
          <GeniusSpiral />
        </div>
      </section>

      {/* 3.5 Ten Dimensions of Human Genius */}
      <TenDimensions />

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
                        Methodology
                      </span>
                      <div className="w-10 h-px bg-accent" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                      The Mastery
                      <span className=" text-accent"> Spiral UI.</span>
                    </h3>

                    <p className="text-md text-muted font-medium font-serif max-w-2xl">
                      Unlike traditional linear learning, our Spiral UI
                      architecture ensures that every core concept is revisited
                      with exponential complexity, anchoring knowledge into
                      long-term neural mastery.
                    </p>
                  </FadeIn>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Iterative Reinforcement",
                      desc: " Concepts are revisited with exponential complexity, anchoring knowledge into long-term neural mastery.",
                      icon: <Infinity className="w-5 h-5 " />,
                    },
                    {
                      title: "Contextual Synthesis",
                      desc: "Leveraging spatial intelligence for complex .",
                      icon: <Book className="w-5 h-5" />,
                    },
                    {
                      title: "Cognitive Anchoring",
                      desc: "The spiral approach ensures no core concept is ever lost.",
                      icon: <Anchor className="w-5 h-5" />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary p-2 flex items-center justify-center flex-shrink-0 text-accent font-semibold text-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="md:text-2xl text-xl font-bold text-primary">
                          {item.title}
                        </h4>
                        <p className="text-[16px] text-muted font-medium font-serif max-w-2xl mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
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

      {/* 6. Curriculum Portfolios - Institutional Grid */}
      <section className="section-padding bg-background-alt relative">
        <div className="container-premium">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                    Institutional Solutions
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                  The Curriculam
                  <span className=" text-accent"> Portfolio.</span>
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

          <div className="grid lg:grid-cols-3">
            {[
              {
                slug: "pre-primary",
                title: "Pre-Primary",
                grade: "pre-mont\nto\nmont II",
                subtitle: "Sensory Mastery",
                description:
                  "Early childhood ecosystem focusing on sensory development and motor skill refinement.",
                color: "var(--brand-gold)",
              },
              {
                slug: "primary",
                title: "Primary",
                grade: "Grades 1 - 5",
                subtitle: "Cognitive Foundation",
                description:
                  "Multi-volume workbooks and memory mapping tools for neuro-cognitive development.",
                color: "var(--brand-purple-deep)",
              },
              {
                slug: "middle",
                title: "Middle School",
                grade: "Grades 6 - 8",
                subtitle: "Conceptual Mastery",
                description:
                  "Advanced science and logic modules with case-study methods for systemic thinking.",
                color: "var(--brand-blue)",
              },
            ].map((bundle, i) => (
              <FadeIn key={i} delay={0.2 * i}>
                <Link
                  href={`/bundles/${bundle.slug}`}
                  className="group relative block aspect-[3/3] overflow-hidden border border-gray-200 shadow-premium hover:shadow-2xl transition-all duration-700"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                    style={{
                      backgroundImage:
                        "radial-gradient(var(--brand-purple-deep) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                    {/* Corner Grade Badge */}
                    <div
                      className="absolute -top-2 -right-2 w-36 h-36 flex items-center justify-center transition-transform group-hover:scale-105 duration-700 z-20"
                      style={{
                        backgroundColor: bundle.color,
                        borderRadius: "0 0 0 100%",
                      }}
                    >
                      <span
                        className={`text-white font-bold uppercase tracking-wider text-center ${
                          bundle.slug === "pre-primary"
                            ? "text-[10px] whitespace-pre-line leading-tight translate-x-2 -translate-y-2"
                            : "text-sm rotate-45 translate-x-2 -translate-y-2"
                        }`}
                      >
                        {bundle.grade}
                      </span>
                    </div>

                    <div className="mt-12">
                      <div
                        className="text-[12px] font-semibold uppercase tracking-[0.3em] mb-4 text-primary"
                        style={{ color: bundle.color }}
                      >
                        {bundle.subtitle}
                      </div>
                      <h4 className="text-5xl font-bold tracking-tighter font-serif mb-6">
                        {bundle.title}
                      </h4>
                      <p className="text-xl text-muted font-medium font-serif max-w-2xl">
                        {bundle.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div
                        className="w-14 h-14 rounded-full border border-primary/80 flex items-center justify-center group-hover:bg-[var(--bundle-color)] group-hover:border-[var(--bundle-color)] group-hover:text-white transition-all duration-500"
                        style={{ "--bundle-color": bundle.color } as any}
                      >
                        <ArrowRight size={24} />
                      </div>
                      <span className="text-[12px] font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Portfolio
                      </span>
                    </div>
                  </div>

                  {/* Background Accents */}
                  <div
                    className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity"
                    style={{ backgroundColor: bundle.color }}
                  />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Founder Authority Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                    Academic Leadership
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                  Architecting <br />
                  <span className=" text-accent"> Neural Pathways.</span>
                </h3>
              </div>
              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto mb-12">
                &quot;We are not just teaching facts; we are training the mind
                to perceive, process, and pioneer.We are not just teaching
                facts; we are training the mind to perceive, process, and
                pioneer.We are not just teaching facts; we are training the mind
                to perceive, process, and pioneer.We are not just teaching
                facts; we are training the mind to perceive, process, and
                pioneer.We are not just teaching facts; we are training the mind
                to perceive, process, and pioneer.We are not just teaching
                facts; we are training the mind to perceive, process, and
                pioneer.We are not just teaching facts; we are training the mind
                to perceive, process, and pioneer.&quot;
              </p>
              <div className="space-y-12 mb-16">
                <div className="flex gap-8 items-center border-l-2 border-accent/20 pl-8">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 tracking-tight">
                      Dr. J. Arawindhan
                    </h4>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                      Chief Mentor & Visionary
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button
                  size="md"
                  className="rounded-full px-12 py-6 bg-primary text-white shadow-premium"
                >
                  Discover Our Legacy
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="aspect-[4/5] rounded-[1rem] bg-accent overflow-hidden shadow-premium relative group">
                <Image
                  src={getContent("home_about_image", "/Dr.-J.arawindhan.webp")}
                  alt="Dr. J. Arawindhan"
                  fill
                  className="object-cover group-hover:scale-105 shadow-sm transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating 3D Badge with Full Depth & Glitter Effect - Positioned outside overflow-hidden */}
              <motion.div
                className="absolute -bottom-16 -left-16 z-30"
                style={{ perspective: "1200px" }}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
              >
                {/* Outer Thick 3D Ring */}
                <div className="relative w-52 h-52 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full border-[18px] border-white bg-gradient-to-br from-white via-white to-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                    style={{ transform: "translateZ(-40px) rotateX(10deg)" }}
                  />

                  {/* Main 3D Circle */}
                  <div
                    className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#2391CF] via-[#4db8ff] to-[#0b6ea8] flex flex-col items-center justify-center text-center overflow-hidden border border-white/20 shadow-premium"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(12deg) rotateY(-12deg)",
                    }}
                  >
                    {/* Inner Depth Shadow */}
                    <div className="absolute inset-0 rounded-full shadow-inner shadow-black/40" />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl animate-pulse" />

                    {/* Light Reflection */}
                    <div className="absolute top-5 left-8 w-32 h-12 bg-white/20 rounded-full blur-xl rotate-[-20deg]" />

                    {/* Glitter/Sparkle Particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.4,
                          ease: "easeInOut",
                        }}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center p-4">
                      <div className="flex items-end leading-none mb-2">
                        <span className="text-6xl font-bold text-white drop-shadow-2xl">
                          100
                        </span>
                        <span className="text-4xl font-bold text-white mb-2 ml-1">
                          %
                        </span>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 px-6 leading-tight">
                        Potential Activation Commitment
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Final Institutional Invitation */}

      <hr />
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container-premium relative z-10">
          <FadeIn className="flex flex-col items-center text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted mb-4">
              The Architecture of Intelligence
            </span>

            <div className="inline-flex items-center gap-3">
              <div className="w-24 opacity-[0.9] bg-accent h-px" />

              <h2 className="text-[15vw] md:text-[12rem] font-bold text-primary tracking-[0.15em] leading-none mb-4 select-none opacity-[0.2]">
                MIWAY
              </h2>
              <div className="w-24 opacity-[0.9] bg-accent h-px" />
            </div>

            <Link href="/contact">
              <Button
                size="md"
                className="bg-transparent text-gray-800 border-gray-400 border rounded-full px-16 py-8 text-xl font-bold hover:bg-gray-800 hover:text-white transition-all duration-500 group shadow-none"
              >
                Initiate Evolution
                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* Subtle Bottom Branding Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>
    </main>
  );
}
