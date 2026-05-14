import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Star, Target, Lightbulb, Layers, Compass, Zap, Globe, Heart, Globe2 } from 'lucide-react';

const reasons = [
  { title: "Neuroscience-Backed", icon: Brain, desc: "Revisiting concepts with progressive complexity.", color: "var(--brand-purple-deep)" },
  { title: "Crafted with Love", icon: Heart, desc: "Built by educators who believe every child deserves to experience the joy of truly understanding something.", color: "var(--brand-gold)" },
  { title: "Globally Relevant", icon: Globe2, desc: "Designed for the international education market — timeless enough for today, visionary enough for tomorrow.", color: "var(--brand-blue)" },
  
];

const ParentChoose = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {reasons.map((reason, i) => (
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
            <reason.icon 
              className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" 
              size={180} 
            />
            
            <div 
              className="w-16 h-16 rounded-full border text-accent bg-primary  border-200 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500"
            >
              <reason.icon size={32} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              {reason.title}
            </h3>
            
            <p className="text-[16px] text-muted font-medium font-serif">
              {reason.desc}
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

export default ParentChoose;