"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  BrainCircuit,
  Globe2,
  Waypoints,
  Infinity,
  BrainIcon,
} from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { FadeIn } from "../ui/FadeIn";

interface OurPhilosophyProps {
  content?: Record<string, string>;
}

const OurPhilosophy = ({ content = {} }: OurPhilosophyProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      {/* Content Side */}
      <div className="flex-1 order-2 lg:order-1 items-start">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-accent" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                  {getContent("phil_tag", "Our Philosophy")}
                </span>
                <div className="w-10 h-px bg-accent" />
              </div>
              <h3
                className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-8"
                dangerouslySetInnerHTML={{
                  __html: getContent(
                    "phil_title",
                    'Learning Reimagined for a <span class=" text-accent">New World.</span>',
                  ),
                }}
              />
            </FadeIn>
          </div>

          <p className="text-md text-muted font-medium font-serif max-w-2xl mx-auto mb-4">
            {getContent(
              "phil_desc_1",
              "MIWAY Teaching Aids Pvt. Ltd., was born from a singular conviction: that every child carries within them an extraordinary potential waiting to be ignited — not with rote memorization, but with purposeful, joyful, whole-brain learning.",
            )}
          </p>
          <p className="text-md text-muted font-medium font-serif max-w-2xl mx-auto mb-8">
            {getContent(
              "phil_desc_2",
              "We don't teach subjects. We cultivate thinkers. We don't fill minds. We illuminate them. Our methodology weaves together the world's most powerful educational frameworks into one seamless, transformative experience.",
            )}
          </p>

          <div className="space-y-2">
            {[
              {
                title: "",
                desc: getContent(
                  "phil_point1_desc",
                  "Neuroscience-backed learning architecture.",
                ),
                icon: <Waypoints className="w-5 h-5 " />,
              },
              {
                title: getContent("phil_point2_title", "Neuro-Spatial Mastery"),
                desc: getContent(
                  "phil_point2_desc",
                  "Holistic intelligence development across 10 dimensions.",
                ),
                icon: <BrainCircuit className="w-5 h-5" />,
              },
              {
                title: "",
                desc: getContent(
                  "phil_point3_desc",
                  "Real-world application beyond the classroom.",
                ),
                icon: <Infinity className="w-5 h-5" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-center bg-primary p-4 rounded-sm"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-primary p-2 flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                  {item.icon}
                </div>
                <div>
                  {item.title && (
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  )}
                  <p className="text-[16px] text-white font-medium font-serif max-w-2xl mx-auto">
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
                {getContent("phil_cta", "Explore Framework")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Visual Side */}
      <div className="flex-1 relative order-1 lg:order-2">
        <div className="relative w-full aspect-square max-w-[650px] mx-auto">
          {/* Main Image Card */}
          <motion.div
            className="
        absolute
        inset-0
        overflow-hidden
        border
        border-white/10
        bg-primary/5
        shadow-2xl
        z-20
      "
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            {/* Image */}
            <Image
              src={getContent("phil_main_image", "/visionary-success.jpg")}
              alt="Learning Reimagined"
              fill
              className="object-cover"
            />

            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06154A]/40 via-transparent to-[#020617]/70" />

            {/* Quote */}
            <div className="absolute bottom-4 left-10 max-w-md">
              <p
                className="text-xl md:text-2xl leading-[1.5] font-serif italic text-white"
                dangerouslySetInnerHTML={{
                  __html: getContent(
                    "phil_quote",
                    '“Education is not the filling of a pail,<br />but the lighting of a fire.”',
                  ),
                }}
              />
            </div>
          </motion.div>

          {/* Floating Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
        absolute
        top-[-20px]
        right-[-20px]
        z-30
        w-48
        bg-[#60BAF4]
        backdrop-blur-xl
        border
        border-accent
        border-2
        p-4
        shadow-2xl
      "
          >
            {/* Mission Label */}
            <div className="inline-flex items-center justify-center border border-accent border-2 px-5 py-2 mb-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-white font-semibold">
                {getContent("phil_mission_tag", "Mission")}
              </span>
            </div>

            {/* Mission Text */}
            <p className="text-[13px] leading-[2] text-white/80 font-medium">
              {getContent(
                "phil_mission_desc",
                "Transforming children into confident, creative, and future-ready human beings.",
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
