"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Star, Target, Lightbulb, Layers, Compass, Zap, Globe } from 'lucide-react';

interface EightPillarsProps {
  content?: Record<string, string>;
}

const EightPillars = ({ content = {} }: EightPillarsProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const pillars = [
    { title: getContent("pillar1_title", "Spiral Learning"), icon: Target, desc: getContent("pillar1_desc", "Revisiting concepts with progressive complexity."), color: "var(--brand-purple-deep)" },
    { title: getContent("pillar2_title", "7 Habits Integration"), icon: Star, desc: getContent("pillar2_desc", "Fostering proactivity and synergy."), color: "var(--brand-gold)" },
    { title: getContent("pillar3_title", "Neural Integration"), icon: Brain, desc: getContent("pillar3_desc", "Engaging both analytical and creative minds."), color: "var(--brand-blue)" },
    { title: getContent("pillar4_title", "Multiple Intelligences"), icon: Lightbulb, desc: getContent("pillar4_desc", "Engaging diverse cognitive capacities."), color: "var(--brand-rose)" },
    { title: getContent("pillar5_title", "Bloom’s Taxonomy"), icon: Layers, desc: getContent("pillar5_desc", "Structured cognitive journey to mastery."), color: "var(--brand-purple-muted)" },
    { title: getContent("pillar6_title", "Six Thinking Hats"), icon: Compass, desc: getContent("pillar6_desc", "Solving complex problems through perspectives."), color: "var(--brand-purple-deep)" },
    { title: getContent("pillar7_title", "Whole Brain Mastery"), icon: Zap, desc: getContent("pillar7_desc", "Philosophical activation of brain regions."), color: "var(--brand-gold)" },
    { title: getContent("pillar8_title", "21st Century Skills"), icon: Globe, desc: getContent("pillar8_desc", "Digital literacy and global collaboration."), color: "var(--brand-blue)" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {pillars.map((pillar, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative"
        >
          {/* Subtle Background Glow */}
          <div
            className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent"
          />

          <div className="relative glass-card p-10 h-full flex flex-col hover:border-primary/20 transition-colors overflow-hidden">
            {/* Watermark Icon */}
            <pillar.icon
              className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
              size={180}
            />

            <div
              className="w-16 h-16 rounded-full border text-accent bg-primary  border-200 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500"
            >
              <pillar.icon size={32} />
            </div>

            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              {pillar.title}
            </h3>

            <p className="text-[16px] text-muted font-medium font-serif">
              {pillar.desc}
            </p>

            <div className="mt-auto pt-8">
              <div
                className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EightPillars;
