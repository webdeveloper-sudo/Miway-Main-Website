"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers3,
  BrainCircuit,
  Workflow,
  Gem,
} from "lucide-react";

const MasterySpiral = () => {
  const levels = [
    {
      title: "Foundation",
      desc: "Core concepts and sensory understanding.",
      color: "var(--brand-blue)",
      icon: <Layers3 className="w-4 h-4" />,
    },
    {
      title: "Deepening",
      desc: "Expanding neural pathways through repetition.",
      color: "var(--brand-rose)",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
    {
      title: "Integration",
      desc: "Connecting interdisciplinary knowledge systems.",
      color: "var(--brand-purple-muted)",
      icon: <Workflow className="w-4 h-4" />,
    },
    {
      title: "Mastery",
      desc: "Achieving confident independent learning.",
      color: "var(--brand-gold)",
      icon: <Gem className="w-4 h-4" />,
    },
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
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.2 }}
          style={{
            width: `${(i + 1) * 25}%`,
            height: `${(i + 1) * 25}%`,
            borderStyle: i % 2 === 0 ? "solid" : "dashed",
          }}
        />
      ))}

      {/* Rotating Icon Markers */}
      {levels.map((level, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${(i + 1) * 25}%`,
            height: `${(i + 1) * 25}%`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-lg flex items-center justify-center text-white"
            style={{ backgroundColor: level.color }}
          >
            

            <div
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ backgroundColor: level.color }}
            />
          </div>
        </motion.div>
      ))}

      {/* Center Circle */}
      <motion.div
        className="relative z-10 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center text-center p-4 border border-primary/5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
      >
        <div>
          <span className="block text-[12px] font-semibold uppercase tracking-widest text-primary/40 mb-1">
            MIWAY
          </span>

          <span className="block text-xl font-serif font-bold text-primary">
            Spiral
          </span>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {levels.map((level, i) => {
          const angle = i * (360 / levels.length) - 90;
          const radius = 45;

          return (
            <motion.div
              key={`label-${i}`}
              className="absolute"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 + i * 0.1 }}
              style={{
                top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
                left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="glass-card p-3 rounded-xl min-w-[130px] text-center backdrop-blur-xl border border-white/10">

                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white"
                  style={{ backgroundColor: level.color }}
                >
                  {level.icon}
                </div>

                <span className="block text-[12px] font-semibold text-primary uppercase tracking-wider mb-1">
                  {level.title}
                </span>

                <span className="block text-[9px] text-muted leading-tight">
                  {level.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MasterySpiral;