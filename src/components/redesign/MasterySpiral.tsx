"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MasterySpiral = () => {
  const levels = [
    { title: "Foundation", desc: "Sensory & Motor Basics", color: "var(--brand-blue)" },
    { title: "Conceptual", desc: "Neural Pathway Mapping", color: "var(--brand-rose)" },
    { title: "Analytical", desc: "Critical Thinking Synthesis", color: "var(--brand-purple-muted)" },
    { title: "Creative", desc: "Innovative Solutions", color: "var(--brand-gold)" },
    { title: "Mastery", desc: "Self-Actualized Learning", color: "var(--brand-purple-deep)" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center p-8">
      {/* Background Rings */}
      {levels.map((level, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-gray-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          style={{
            width: `${(i + 1) * 20}%`,
            height: `${(i + 1) * 20}%`,
            borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
          }}
        />
      ))}

      {/* Rotating Dots / Markers */}
      {levels.map((level, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${(i + 1) * 20}%`,
            height: `${(i + 1) * 20}%`,
          }}
        >
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg"
            style={{ backgroundColor: level.color }}
          >
            <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: level.color }} />
          </div>
        </motion.div>
      ))}

      {/* Center Piece */}
      <motion.div 
        className="relative z-10 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center text-center p-4 border border-primary/5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
      >
        <div>
          <span className="block text-[12px] font-semibold uppercase tracking-widest text-primary/40 mb-1">MIWAY</span>
          <span className="block text-xl font-serif font-bold text-primary">Mastery</span>
        </div>
      </motion.div>

      {/* Labels - Positioned around */}
      <div className="absolute inset-0 pointer-events-none">
        {levels.map((level, i) => {
          const angle = (i * (360 / levels.length)) - 90;
          const radius = 45; // percentage
          return (
            <motion.div
              key={`label-${i}`}
              className="absolute"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              style={{
                top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
                left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="glass-card p-3 rounded-xl min-w-[120px] text-center">
                <span className="block text-[12px] font-semibold text-primary uppercase tracking-wider mb-1">{level.title}</span>
                <span className="block text-[9px] text-muted leading-tight">{level.desc}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MasterySpiral;
