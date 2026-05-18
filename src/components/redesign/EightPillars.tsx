"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Star, Target, Lightbulb, Layers, Compass, Zap, Globe, Infinity, Sparkles } from 'lucide-react';

interface EightPillarsProps {
  content?: Record<string, string>;
}

const EightPillars = ({ content = {} }: EightPillarsProps) => {
  const getContent = (key: string, fallback: string = "") => {
    return content[key] || fallback;
  };

  const pillars = [
    { 
      title: getContent("pillar1_title", "Bloom's Taxonomy"), 
      icon: Layers, 
      desc: getContent("pillar1_desc", "A six-level cognitive journey, from remembering to creating, building mastery step by purposeful step."), 
      color: "var(--brand-purple-deep)" 
    },
    { 
      title: getContent("pillar2_title", "Whole Brain Learning"), 
      icon: Brain, 
      desc: getContent("pillar2_desc", "Activating both hemispheres simultaneously, blending logic with creativity and analysis with intuition."), 
      color: "var(--brand-blue)" 
    },
    { 
      title: getContent("pillar3_title", "Spiral Learning"), 
      icon: Target, 
      desc: getContent("pillar3_desc", "Returning to core concepts with ever-increasing depth, transforming understanding into unshakeable mastery."), 
      color: "var(--brand-purple-deep)" 
    },
    { 
      title: getContent("pillar4_title", "Integrated Learning"), 
      icon: Infinity, 
      desc: getContent("pillar4_desc", "Dissolving the walls between subjects, weaving science, art, mathematics, and language into one unified understanding."), 
      color: "var(--brand-rose)" 
    },
    { 
      title: getContent("pillar5_title", "Sensory Learning"), 
      icon: Sparkles, 
      desc: getContent("pillar5_desc", "Engaging all five senses to forge memories that last not days, but a lifetime of applied wisdom."), 
      color: "var(--brand-gold)" 
    },
    { 
      title: getContent("pillar6_title", "Power Learning"), 
      icon: Zap, 
      desc: getContent("pillar6_desc", "15+ proven memory and thinking techniques — from Mind Palace to SQ3R — making every student a confident learner."), 
      color: "var(--brand-purple-muted)" 
    },
    { 
      title: getContent("pillar7_title", "Multiple Intelligences"), 
      icon: Lightbulb, 
      desc: getContent("pillar7_desc", "Honouring all 10 forms of human intelligence, so every child discovers where they shine."), 
      color: "var(--brand-gold)" 
    },
    { 
      title: getContent("pillar8_title", "21st Century Skills"), 
      icon: Globe, 
      desc: getContent("pillar8_desc", "Creativity, critical thinking, communication, collaboration, and digital literacy for a world yet to be imagined."), 
      color: "var(--brand-blue)" 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
