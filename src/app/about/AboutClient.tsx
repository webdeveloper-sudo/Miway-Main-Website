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
  Download,
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import ImagePopup from "@/components/ImagePopup";
import FounderMessage from "@/components/FounderMessage";
import OurPhilosophy from "@/components/redesign/OurPhilosophy";
import GeniusSpiral from "@/components/redesign/GeniusSpiral";
import { motion, AnimatePresence } from "framer-motion";
import SixBeliefs from "@/components/redesign/SixBeliefs";
import OurEnvironment from "@/components/OurEnvironment";

interface AboutClientProps {
  content: Record<string, string>;
}

export default function AboutClient({ content }: AboutClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [isFormPending, setIsFormPending] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormPending(true);
    setFormErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      school: formData.get("school") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const dbRes = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!dbRes.ok) {
        const err = await dbRes.json().catch(() => ({}));
        throw new Error(err?.error || "Database submission failed");
      }

      setIsFormSuccess(true);

      // Trigger pdf download
      const link = document.createElement("a");
      link.href = "/miway-brochure.pdf";
      link.download = "MIWAY_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      console.error("[Manifesto Form Error]", err);
      setFormErrorMsg(err?.message || "Submission failed. Please try again later.");
    } finally {
      setIsFormPending(false);
    }
  };

  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const brochureImages = Array.from({ length: 12 }, (_, i) => ({
    image: getContent(`about_brochure_image_${i + 1}`, `/brochure/page-${(i + 1).toString().padStart(2, "0")}.jpg`),
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
          getContent("about_hero_title", 'Institutional <br /> <span class="text-accent">Legacy.</span>')
        }
        subtitle={
          getContent("about_hero_desc", "MIWAY is an innovative educational publisher dedicated to creating engaging, neuroscience-based learning ecosystems.")
        }
        img={getContent("about_hero_background", "/images/45115730_bnn2.jpg")}
      />

      {/* 2. Pedagogy & Authority */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <OurPhilosophy content={content} />
        </div>
      </section>

      <OurEnvironment/>

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
        {getContent("about_beliefs_tag", "What We Stand For")}
      </span>

      <div className="w-10 h-px bg-accent" />
    </div>

    <h3 
      className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-[1.05]"
      dangerouslySetInnerHTML={{
        __html: getContent("about_beliefs_title", 'Six Beliefs That <span class="text-accent"> Define Everything We Do.</span>')
      }}
    />
  </div>

  <p className="text-xl text-muted font-medium font-serif max-w-xl md:text-right leading-[1.9]">
    {getContent("about_beliefs_desc", "These are not brand values on a wall. They are the engineering principles behind every book we create.")}
  </p>
</div>
            </FadeIn>
          </div>

          <SixBeliefs content={content} />
        </div>
      </section>

      {/* 3. Mission & Vision - Pillars UI */}
      <section
        className="py-10 relative overflow-hidden bg-slate-50"
        style={{
          backgroundImage: `url('${getContent("about_mandate_bg", "/missionvisionbg.png")}')`,
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
                  {getContent("about_mandate_tag", "Directives")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h2 
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight font-serif"
                dangerouslySetInnerHTML={{
                  __html: getContent("about_mandate_title", 'Institutional <span class="text-accent">Mandate.</span>')
                }}
              />
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
                  {getContent("about_mission_text", "To transform education through innovative, neuroscience-based tools that spark creativity, inspire critical thinking, and nurture personal growth.")}
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
                  {getContent("about_vision_text", "To redefine the learning experience by creating dynamic, neuroscience-driven educational resources that unlock creativity and sharpen critical thinking.")}
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

      <FounderMessage content={content} />
      {/* 3. Every Child Is Genius - Immersive Storytelling */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <GeniusSpiral content={content} />
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
                  {getContent("about_brochure_tag", "Academic Blueprint")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3 
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: getContent("about_brochure_title", 'Digital <span class="text-accent">Manifesto.</span>')
                }}
              />

              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
                {getContent("about_brochure_desc", "Explore the complete pedagogical architecture through the official MIWAY digital resources.")}
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

          {/* Download button below grid */}
          <div className="mt-16 flex justify-center">
            <FadeIn>
              <button
                onClick={() => {
                  setShowDownloadModal(true);
                  setIsFormSuccess(false);
                  setFormErrorMsg(null);
                }}
                className="group relative px-10 py-5 bg-primary text-white font-bold rounded-full overflow-hidden shadow-premium transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 uppercase tracking-wider text-sm border-none cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  Download Complete Manifesto
                </span>
              </button>
            </FadeIn>
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

      {/* Contact Form Popup Modal for PDF Download */}
      <AnimatePresence>
        {showDownloadModal && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isFormPending) setShowDownloadModal(false);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-primary/5 overflow-hidden z-10"
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />

              {/* Close Button */}
              {!isFormPending && (
                <button
                  onClick={() => setShowDownloadModal(false)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors border-none bg-transparent cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              )}

              {isFormSuccess ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <CheckCircle2 size={40} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                    Manifesto Unlocked
                  </h3>
                  <p className="text-lg text-muted font-medium font-serif max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for your interest. Your digital brochure download has started.
                  </p>
                  <Button
                    onClick={() => setShowDownloadModal(false)}
                    className="bg-primary text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-premium hover:scale-105 transition-all"
                  >
                    Close Window
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-8 h-px bg-accent" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Exclusive Access
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-primary tracking-tight">
                      Download Digital Manifesto
                    </h3>
                    <p className="text-[15px] text-muted font-medium font-serif mt-2">
                      Please provide your professional credentials to authorize the transfer.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-primary uppercase tracking-widest pl-1">
                          Executive Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Dr. Sarah Jenkins"
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-5 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-primary uppercase tracking-widest pl-1">
                          Institution
                        </label>
                        <input
                          type="text"
                          name="school"
                          required
                          placeholder="School Name"
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-5 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-primary uppercase tracking-widest pl-1">
                          Official Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="sarah@institution.edu"
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-5 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-primary uppercase tracking-widest pl-1">
                          Direct Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91..."
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-5 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-semibold text-primary uppercase tracking-widest pl-1">
                        Strategic Requirements
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Outline your institutional objectives..."
                        className="w-full bg-slate-50 border border-gray-300 rounded-sm px-5 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isFormPending}
                      className="w-full py-5 rounded-full text-sm font-bold uppercase tracking-[0.15em] bg-primary text-white shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
                    >
                      {isFormPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin mr-2" />
                          Authorizing...
                        </>
                      ) : (
                        <>
                          Unlock & Download
                          <Send
                            size={16}
                            className="ml-3 group-hover:translate-x-1.5 transition-transform"
                          />
                        </>
                      )}
                    </Button>

                    {formErrorMsg && (
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{formErrorMsg}</p>
                      </div>
                    )}

                    <p className="text-xs text-muted font-medium font-serif leading-relaxed text-center">
                      *By submitting, you agree to our terms of institutional engagement and data privacy protocols.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
