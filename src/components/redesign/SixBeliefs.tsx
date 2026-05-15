"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Star, Target, Lightbulb, Layers, Compass, Zap, Globe, HeartHandshake, Rocket, ShieldCheck, Infinity } from 'lucide-react';

interface SixBeliefsProps {
  content?: Record<string, string>;
}

const SixBeliefs = ({ content = {} }: SixBeliefsProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const beliefs = [
    {
      title: getContent("about_belief1_title", "Think First, Then Know"),
      icon: Brain,
      desc: getContent("about_belief1_desc", "We build thinkers before we build knowledge-holders. Cognition precedes content in everything we design."),
      color: "var(--brand-purple-deep)",
    },
    {
      title: getContent("about_belief2_title", "See the Whole Child"),
      icon: HeartHandshake,
      desc: getContent("about_belief2_desc", "Academic achievement is one dimension of a human being. We nurture all ten — including soul and money wisdom."),
      color: "var(--brand-gold)",
    },
    {
      title: getContent("about_belief3_title", "Learning Is Lifelong"),
      icon: Infinity,
      desc: getContent("about_belief3_desc", "We build habits and frameworks that serve a child at age 8, age 28, and age 58. Education for life, not exams."),
      color: "var(--brand-blue)",
    },
    {
      title: getContent("about_belief4_title", "Creativity Is Intelligence"),
      icon: Lightbulb,
      desc: getContent("about_belief4_desc", "The highest level of Bloom's Taxonomy is creation. We treat imagination as a measurable, teachable cognitive skill."),
      color: "var(--brand-rose)",
    },
    {
      title: getContent("about_belief5_title", "Character Before Content"),
      icon: ShieldCheck,
      desc: getContent("about_belief5_desc", "Empathy, integrity, and purpose are not extracurricular. They are the first subjects we teach, and the last we forget."),
      color: "var(--brand-purple-muted)",
    },
    {
      title: getContent("about_belief6_title", "Built for Tomorrow"),
      icon: Rocket,
      desc: getContent("about_belief6_desc", "We design for the world that doesn't exist yet — equipping children with adaptability, resilience, and digital confidence."),
      color: "var(--brand-purple-deep)",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {beliefs.map((belief, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -inset-2 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 bg-accent" />

          <div className="relative glass-card p-10 h-full flex flex-col hover:border-primary/20 transition-colors overflow-hidden">
            {/* Watermark Icon */}
            <belief.icon
              className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
              size={180}
            />

            <div className="w-16 h-16 rounded-full border text-accent bg-primary  border-200 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <belief.icon size={32} />
            </div>

            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              {belief.title}
            </h3>

            <p className="text-[16px] text-muted font-medium font-serif">
              {belief.desc}
            </p>

            <div className="mt-auto pt-8">
              <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SixBeliefs;
