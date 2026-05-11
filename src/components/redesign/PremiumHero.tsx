import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

const heroImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentSlide]}
              alt={`Slide ${currentSlide}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Advanced Overlays */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
      </div>

      {/* Institutional Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" 
        style={{ backgroundImage: 'linear-gradient(var(--brand-purple-deep) 1px, transparent 1px), linear-gradient(90deg, var(--brand-purple-deep) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="container-premium relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/5 rounded-full mb-8 border border-primary/10 backdrop-blur-md">
              <Sparkles size={14} className="text-accent" />
              <span className="text-white/90 font-semibold text-[12px] uppercase tracking-[0.3em]">The Future of Pedagogy</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-10 leading-[0.9] tracking-tight text-white">
              Cognitive <br />
              <span className="font-serif font-medium text-accent">Architecture.</span>
            </h1>

            <p className="text-xl text-white font-medium font-serif max-w-2xl mx-auto mb-12">
              We are not just publishers. We are architects of the mind, engineering neural pathways for the next generation of global genius.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <Link href="/about">
                <Button 
                  size="md" 
                  className="bg-primary text-white hover:bg-primary-hover px-10 py-5 rounded-full text-xl font-bold shadow-premium group"
                >
                  Explore Methodology
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30">
        <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent" />
        <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-white/90">Discover More</span>
        <ChevronDown className='mx-auto w-4 h-5 animate-bounce text-white/90'/>
      </div>
    </section>
  );
};

export default PremiumHero;
