"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Target,
  Sparkles,
  Zap,
  ArrowRight,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Globe,
  Eye,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import ImagePopup from "@/components/ImagePopup";
import FounderMessage from "@/components/FounderMessage";
import OurPhilosophy from "@/components/redesign/OurPhilosophy";
import GeniusSpiral from "@/components/redesign/GeniusSpiral";
import { motion } from "framer-motion";
import SixBeliefs from "@/components/redesign/SixBeliefs";

interface AboutClientProps {
  content: Record<string, string>;
}

export default function AboutClient({ content }: AboutClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const brochureImages = Array.from({ length: 12 }, (_, i) => ({
    image: `/brochure/page-${(i + 1).toString().padStart(2, "0")}.jpg`,
    imgTitle: `Institutional Manifesto - Page ${(i + 1).toString().padStart(2, "0")}`,
  }));

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % brochureImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + brochureImages.length) %
          brochureImages.length,
      );
    }
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <BannerAndBreadCrumb
        title={
          content["about_hero_title"] ||
          'Institutional <br /> <span class="text-accent">Legacy.</span>'
        }
        subtitle={
          content["about_hero_desc"] ||
          "MIWAY Teaching Aids Pvt. Ltd. is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning ecosystems."
        }
      />

      {/* 2. Pedagogy & Authority */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <OurPhilosophy />
        </div>
      </section>

      {/* 4. Eight Pillars of Extraordinary Learning */}
      <section className="section-padding bg-background-alt relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container-premium">
          <div className=" mx-auto text-left mb-16">
            <FadeIn>
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
  
  <div className="max-w-3xl">
    <div className="inline-flex items-center gap-3 mb-6">
      <div className="w-10 h-px bg-accent" />

      <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
        What We Stand For
      </span>

      <div className="w-10 h-px bg-accent" />
    </div>

    <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-[1.05]">
      Six Beliefs That
      <span className="text-accent">
        {" "}
        Define Everything We Do.
      </span>
    </h3>
  </div>

  <p className="text-xl text-muted font-medium font-serif max-w-xl md:text-right leading-[1.9]">
    These are not brand values on a wall. They are the engineering
    principles behind every book we create.
  </p>
</div>
            </FadeIn>
          </div>

          <SixBeliefs />
        </div>
      </section>

      {/* 3. Mission & Vision - Pillars UI */}
      <section
        className="py-10 relative overflow-hidden bg-slate-50"
        style={{
          backgroundImage: "url('/missionvisionbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
              <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight font-serif">
                Institutional <span className="text-accent">Mandate.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
            {/* LEFT - MISSION */}
            <motion.div
              initial={{
                opacity: 0,
                x: 180, // starts near center
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // moves away to left
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full"
            >
              <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />

              <div
                className="
        relative
        bg-white/90
        backdrop-blur-sm
        p-8
        md:px-12
        md:py-10
        h-full
        flex
        flex-col
        overflow-hidden
        border
        border-primary/10
        hover:border-primary/20
        transition-all
        duration-500
      "
              >
                <Target
                  className="
          absolute
          -right-10
          -bottom-10
          opacity-[0.03]
          group-hover:opacity-[0.08]
          transition-opacity
        "
                  size={260}
                />

                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl text-accent">
                  <Target size={30} />
                </div>

                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.25em] mb-4 block">
                  Strategy
                </span>

                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Our Mission
                </h3>

                <p className="text-lg text-muted font-medium font-serif leading-[1.9] opacity-90">
                  {content["about_mission_text"] ||
                    "To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth."}
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* CENTER EMPTY COLUMN */}
            <div className="hidden md:block" />

            {/* RIGHT - VISION */}
            <motion.div
              initial={{
                opacity: 0,
                x: -180, // starts near center
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // moves away to right
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="group relative h-full"
            >
              <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />

              <div
                className="
        relative
        bg-white/90
        backdrop-blur-sm
        p-8
        md:px-12
        md:py-10
        h-full
        flex
        flex-col
        overflow-hidden
        border
        border-primary/10
        hover:border-primary/20
        transition-all
        duration-500
      "
              >
                <Rocket
                  className="
          absolute
          -right-10
          -bottom-10
          opacity-[0.03]
          group-hover:opacity-[0.08]
          transition-opacity
        "
                  size={260}
                />

                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl text-accent">
                  <Rocket size={30} />
                </div>

                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.25em] mb-4 block">
                  Future
                </span>

                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Our Vision
                </h3>

                <p className="text-lg text-muted font-medium font-serif leading-[1.9] opacity-90">
                  {content["about_vision_text"] ||
                    "To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity and sharpen critical thinking."}
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Founder Profile - Enhanced UI */}

      <FounderMessage />
      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <GeniusSpiral />
        </div>
      </section>

      {/* 5. Institutional Brochure - Replicating Eight Pillars UI Style */}
      <section className="section-padding bg-background-alt relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  Academic Blueprint
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
                Digital <span className="text-accent">Manifesto.</span>
              </h3>

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                Explore the complete pedagogical architecture through the
                official MIWAY digital resources.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {brochureImages.map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group relative">
                {/* Subtle Background Glow like Eight Pillars */}
                <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />

                <div
                  className="relative glass-card p-4 h-full flex flex-col hover:border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImageIndex(i)}
                >
                  {/* Image Container with aspect ratio */}
                  <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-6 shadow-sm border border-primary/5">
                    <Image
                      src={item.image}
                      alt={item.imgTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay Icon like Curriculam Portfolio / Eight Pillars */}
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        <Eye size={28} />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      Page {(i + 1).toString().padStart(2, "0")}
                    </h3>
                    <p className="text-[14px] text-muted font-medium font-serif">
                      Curriculum Overview
                    </p>
                  </div>

                  {/* Animated bottom bar like Eight Pillars */}
                  <div className="mt-auto pt-6">
                    <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Integration */}
      <ImagePopup
        images={brochureImages}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
