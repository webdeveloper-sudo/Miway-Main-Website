"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, BrainIcon, Infinity, Waypoints } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const GeniusSpiral = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      {/* Visual Side */}
      <div className="flex-1 relative order-2 lg:order-1">
        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
          {/* Main Image with Layered Shadows */}
          <motion.div
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/visionary-success.jpg"
              alt="Every Child Is Genius"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </motion.div>

          {/* Decorative Rings - Using CSS for seamless loop without breaking layout */}
          <style>
            {`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes spin-slow-reverse {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 30s linear infinite;
              }
              .animate-spin-slow-reverse {
                animation: spin-slow-reverse 40s linear infinite;
              }
            `}
          </style>
          <div
            className="absolute -inset-10 border-2 border-dashed border-accent/20 rounded-[5rem] -z-10 animate-spin-slow"
          />
          <div
            className="absolute -inset-20 border border-primary/10 rounded-[6rem] -z-20 animate-spin-slow-reverse"
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-10 -right-10 z-30"
            style={{
              perspective: "1200px",
            }}
          >
            {/* Outer Thick 3D Ring */}
            <div className="relative w-52 h-52 flex items-center justify-center">
              {/* Back Shadow Circle */}
              {/* <div className="absolute inset-0 rounded-full bg-white blur-2xl scale-110" /> */}

              {/* Thick Border Ring */}
              <div
                className="
        absolute
        inset-0
        rounded-full
        border-[18px]
        border-white
        bg-gradient-to-br
        from-white
        via-white
        to-white 
        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
      "
                style={{
                  transform: "translateZ(-40px) rotateX(10deg)",
                }}
              />

              {/* Main 3D Circle */}
              <div
                className="
        relative
        w-48
        h-48
        rounded-full
        bg-gradient-to-br
        from-[#2391CF]
        via-[#4db8ff]
        to-[#0b6ea8]
        flex
        flex-col
        items-center
        justify-center
        text-center
        overflow-hidden
        border
        border-white/20
      "
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
                <div className="absolute top-5 left-8 w-24 h-10 bg-white/20 rounded-full blur-xl rotate-[-20deg]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <h3 className="relative flex items-end leading-none">
                    <span className="text-6xl font-semibold text-white drop-shadow-2xl leading-none">
                      100
                    </span>

                    <span className="text-3xl font-bold text-white mb-4 ml-1 leading-none">
                      %
                    </span>
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 px-6 leading-relaxed">
                    Potential Activation Commitment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Side */}
      <div className="flex-1 order-1 lg:order-2 items-start">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/10 bg-primary/5 mb-6">
            <BrainIcon className="w-4 h-4 text-accent font-medium animate-pulse" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-primary">
              Neural Evolution
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter">
            Every Child is a
            <span className="font-serif  font-medium gradient-text">
              {" "}
              Latent Genius.
            </span>
          </h2>

          <p className="text-md text-muted font-medium font-serif max-w-2xl mx-auto mb-8">
            Our pedagogical architecture is built on the scientific conviction
            that cognitive excellence is not inherited, but engineered through
            structured curiosity and sensory immersion.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Personalized Trajectories",
                desc: "Adaptive learning paths for unique neural patterns.",
                icon: <Waypoints className="w-5 h-5 " />,
              },
              {
                title: "Neuro-Spatial Mastery",
                desc: "Leveraging spatial intelligence for complex conceptualization.",
                icon: <BrainCircuit className="w-5 h-5" />,
              },
              {
                title: "Continuous Iteration",
                desc: "The spiral approach ensures no core concept is ever lost.",
                icon: <Infinity className="w-5 h-5" />,
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

          <div className=" py-10">
            <Link href="/philosophy">
              <Button
                size="md"
                className="rounded-full  bg-primary text-white text-lg font-bold"
              >
                Explore Framework
              </Button>
            </Link>
          </div>

          {/* <Link href="/contact">
            <Button
              size="sm"
              className="bg-primary text-white rounded-full px-8 py-4 mt-10 shadow-premium hover:bg-primary-hover transition-all text-[10px] font-black uppercase tracking-[0.2em]"
            >
              Partner With Us
            </Button>
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default GeniusSpiral;
