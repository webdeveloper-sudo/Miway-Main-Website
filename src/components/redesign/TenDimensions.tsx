"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookText,
  Binary,
  Coins,
  Sparkles,
  Leaf,
  Image as ImageIcon,
  Music,
  Users2,
  UserCircle2,
  Activity,
} from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const dimensions = [
  {
    name: "Word Smart",
    sub: "Linguistic Intelligence",
    icon: <BookText className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Logic Smart",
    sub: "Logical-Mathematical",
    icon: <Binary className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Money Smart",
    sub: "Financial Intelligence",
    icon: <Coins className="w-5 h-5" />,
    color: "var(--brand-gold)",
  },
  {
    name: "Life Smart",
    sub: "Spiritual Intelligence",
    icon: <Sparkles className="w-5 h-5" />,
    color: "var(--brand-gold)",
  },
  {
    name: "Body Smart",
    sub: "Kinesthetic",
    icon: <Activity className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Nature Smart",
    sub: "Naturalistic",
    icon: <Leaf className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Picture Smart",
    sub: "Spatial Intelligence",
    icon: <ImageIcon className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Music Smart",
    sub: "Musical Intelligence",
    icon: <Music className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "People Smart",
    sub: "Interpersonal",
    icon: <Users2 className="w-5 h-5" />,
    color: "var(--accent)",
  },
  {
    name: "Self Smart",
    sub: "Intrapersonal",
    icon: <UserCircle2 className="w-5 h-5" />,
    color: "var(--accent)",
  },
];

interface TenDimensionsProps {
  content?: Record<string, string>;
}

const TenDimensions = ({ content = {} }: TenDimensionsProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const dimensions = [
    {
      name: getContent("dim1_name", "Word Smart"),
      sub: getContent("dim1_sub", "Linguistic Intelligence"),
      icon: <BookText className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim2_name", "Logic Smart"),
      sub: getContent("dim2_sub", "Logical-Mathematical"),
      icon: <Binary className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim3_name", "Money Smart"),
      sub: getContent("dim3_sub", "Financial Intelligence"),
      icon: <Coins className="w-5 h-5" />,
      color: "var(--brand-gold)",
    },
    {
      name: getContent("dim4_name", "Life Smart"),
      sub: getContent("dim4_sub", "Spiritual Intelligence"),
      icon: <Sparkles className="w-5 h-5" />,
      color: "var(--brand-gold)",
    },
    {
      name: getContent("dim5_name", "Body Smart"),
      sub: getContent("dim5_sub", "Kinesthetic"),
      icon: <Activity className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim6_name", "Nature Smart"),
      sub: getContent("dim6_sub", "Naturalistic"),
      icon: <Leaf className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim7_name", "Picture Smart"),
      sub: getContent("dim7_sub", "Spatial Intelligence"),
      icon: <ImageIcon className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim8_name", "Music Smart"),
      sub: getContent("dim8_sub", "Musical Intelligence"),
      icon: <Music className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim9_name", "People Smart"),
      sub: getContent("dim9_sub", "Interpersonal"),
      icon: <Users2 className="w-5 h-5" />,
      color: "var(--accent)",
    },
    {
      name: getContent("dim10_name", "Self Smart"),
      sub: getContent("dim10_sub", "Intrapersonal"),
      icon: <UserCircle2 className="w-5 h-5" />,
      color: "var(--accent)",
    },
  ];

  const leftDimensions = dimensions.slice(0, 5);
  const rightDimensions = dimensions.slice(5, 10);

  return (
    <section
      className="section-padding bg-white relative overflow-hidden"
      id="intelligence"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #1f2937 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-muted">
                {getContent("dim_tag", "The Intelligence Wheel")}
              </span>
              <div className="w-10 h-px bg-accent" />
            </div>
            <h3
              className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6"
              dangerouslySetInnerHTML={{
                __html: getContent(
                  "dim_title",
                  'Ten Dimensions of <span class=" text-accent"> Human Genius.</span>',
                ),
              }}
            />
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Items */}
          <div className="lg:col-span-3 space-y-4">
            {leftDimensions.map((dim, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="right">
                <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all duration-500 group">
                  <div className="flex items-center justify-end gap-4">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider font-heading text-gray-800">
                        {dim.name}
                      </div>
                      <div className="text-[10px] text-muted uppercase tracking-widest font-semibold">
                        {dim.sub}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-accent flex-shrink-0">
                      {dim.icon}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Center Wheel */}
          <div className="lg:col-span-6">
            <FadeIn className="relative w-full aspect-square mx-auto max-w-[650px]">
              <svg viewBox="0 0 520 520" className="w-full h-full">
                <circle
                  cx="260"
                  cy="260"
                  r="240"
                  fill="none"
                  stroke="rgba(31, 41, 55, 0.15)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="260"
                  cy="260"
                  r="180"
                  fill="none"
                  stroke="rgba(31, 41, 55, 0.12)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="260"
                  cy="260"
                  r="120"
                  fill="none"
                  stroke="rgba(31, 41, 55, 0.1)"
                  strokeWidth="1.5"
                />

                <g stroke="rgba(31, 41, 55, 0.2)" strokeWidth="1.2">
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1="260"
                      y1="260"
                      x2={
                        260 + 240 * Math.cos(((i * 36 - 90) * Math.PI) / 180)
                      }
                      y2={
                        260 + 240 * Math.sin(((i * 36 - 90) * Math.PI) / 180)
                      }
                    />
                  ))}
                </g>

                {dimensions.map((dim, i) => {
                  const angle = ((i * 36 - 90) * Math.PI) / 180;
                  const x = 260 + 210 * Math.cos(angle);
                  const y = 260 + 210 * Math.sin(angle);
                  return (
                    <g key={i} className="group cursor-pointer">
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="32"
                        className="fill-gray-50 stroke-gray-300"
                        strokeWidth="1"
                        whileHover={{ r: 35, strokeWidth: 2 }}
                      />
                      <text
                        x={x}
                        y={y - 2}
                        textAnchor="middle"
                        fill="#1f2937"
                        className="text-[8px] font-bold uppercase tracking-tighter pointer-events-none"
                      >
                        {dim.name.split(" ")[0]}
                      </text>
                      <text
                        x={x}
                        y={y + 8}
                        textAnchor="middle"
                        fill="#1f2937"
                        className="text-[8px] font-bold uppercase tracking-tighter pointer-events-none"
                      >
                        {dim.name.split(" ")[1]}
                      </text>
                    </g>
                  );
                })}

                <circle
                  cx="260"
                  cy="260"
                  r="78"
                  fill="rgba(0,0,0,0.05)"
                  className="blur-md"
                />
                <circle
                  cx="260"
                  cy="260"
                  r="75"
                  className="fill-white stroke-gray-200"
                  strokeWidth="2"
                />
                <text
                  x="260"
                  y="250"
                  textAnchor="middle"
                  fill="var(--accent)"
                  className="text-sm font-serif font-medium"
                >
                  Every Child
                </text>
                <text
                  x="260"
                  y="275"
                  textAnchor="middle"
                  fill="#1f2937"
                  className="text-md font-bold tracking-[0.1em] font-heading"
                >
                  IS GENIUS
                </text>
              </svg>
            </FadeIn>
          </div>

          {/* Right Side Items */}
          <div className="lg:col-span-3 space-y-4">
            {rightDimensions.map((dim, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition-all duration-500 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-accent flex-shrink-0">
                      {dim.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider font-heading text-gray-800">
                        {dim.name}
                      </div>
                      <div className="text-[10px] text-muted uppercase tracking-widest font-semibold">
                        {dim.sub}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/philosophy">
            <Button
              size="md"
              className="rounded-full bg-accent text-white px-10 py-6 text-xl font-bold shadow-gold hover:scale-105 transition-transform"
            >
              {getContent("dim_cta", "Discover the Full Spectrum")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TenDimensions;
