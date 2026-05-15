import React from 'react'
import { FadeIn } from './ui/FadeIn'
import Link from 'next/link'
import Button from './ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion';

interface FounderMessageProps {
  content?: Record<string, string>;
}

const FounderMessage = ({ content = {} }: FounderMessageProps) => {
  const getLocalContent = (key: string, fallback: string = "") => {
    return content?.[key] || fallback;
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                    {getLocalContent("founder_tag", "Academic Leadership")}
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>
                <h3 
                  className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
                  dangerouslySetInnerHTML={{
                    __html: getLocalContent("founder_title", 'Architecting <br /><span class=" text-accent"> Neural Pathways.</span>')
                  }}
                />
              </div>
              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto mb-4">
                {getLocalContent("founder_quote_1", "&quot;I built MIWAY Teaching Aids Pvt. Ltd., because I believed deeply that every child is born a genius and that the world's greatest tragedy is a brilliant mind that was never shown how to shine.")}
              </p>
              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto mb-4">
                {getLocalContent("founder_quote_2", "I have seen classrooms where curiosity was quietly crushed. I have watched gifted children be labelled \"average\" simply because the system measured only one kind of intelligence. I refused to accept that.")}
              </p>
              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto mb-4">
                {getLocalContent("founder_quote_3", "MIWAY Teaching Aids Pvt. Ltd., is my answer - a complete learning ecosystem built on love, science, and the unwavering belief that when children are taught how to think, not just what to think, they become unstoppable.")}
              </p>
              <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto mb-12">
                {getLocalContent("founder_quote_4", "It is a movement. A promise. A new beginning for every learner who opens these pages. &quot;")}
              </p>
              <div className="space-y-12 mb-16">
                <div className="flex gap-8 items-center border-l-2 border-accent/20 pl-8">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 tracking-tight">
                      {getLocalContent("founder_name", "Dr. J. Arawindhan")}
                    </h4>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                      {getLocalContent("founder_role", "Chief Mentor & Visionary")}
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button
                  size="md"
                  className="rounded-full px-12 py-6 bg-primary text-white shadow-premium"
                >
                  {getLocalContent("founder_cta", "Discover Our Legacy")}
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="aspect-[4/5] bg-accent overflow-hidden shadow-premium relative group">
                <Image
                  src={getLocalContent("founder_image", "/Dr.-J.arawindhan.webp")}
                  alt="Dr. J. Arawindhan"
                  fill
                  className="object-cover group-hover:scale-105 shadow-sm transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating 3D Badge */}
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
                        {getLocalContent("genius_activation_commitment", "Potential Activation Commitment")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
  )
}

export default FounderMessage