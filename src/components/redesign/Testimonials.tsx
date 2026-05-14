import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const testimonials = [
  {
    name: "Arjun",
    role: "Parent of Grade 3 Student",
    text: "MIWAY Books have completely transformed how my son approaches learning. He no longer just memorizes; he truly understands the 'why' behind every concept. The cognitive growth I've seen is remarkable.",
    rating: 5
  },
  {
    name: "Kavitha",
    role: "Parent of Pre-Primary Student",
    text: "The sensory-based approach in the Pre-Primary modules is genius. My daughter is so engaged with the tactile elements and visual storytelling. It's the first time she's genuinely excited about books.",
    rating: 5
  },
  {
    name: "Murugan",
    role: "Parent of Grade 7 Student",
    text: "As a parent, I was always looking for something that goes beyond the standard curriculum. MIWAY's focus on neural pathways and critical thinking is exactly what the modern education system needs.",
    rating: 5
  },
  {
    name: "Latha",
    role: "Parent of Grade 5 Student",
    text: "The Mastery Spiral methodology is a game-changer. I've noticed my child retaining information much longer because concepts are revisited with increasing complexity. It builds real confidence.",
    rating: 5
  },
  {
    name: "Kumar",
    role: "Parent of Grade 2 Student",
    text: "The quality of the materials and the depth of the research behind MIWAY are evident in every page. It's not just a book series; it's a complete brain-development ecosystem.",
    rating: 5
  },
  {
    name: "Priya",
    role: "Parent of Grade 4 Student",
    text: "I am amazed at how MIWAY simplifies complex topics through visual mapping. My child's spatial intelligence has improved significantly, and her problem-solving skills are now far beyond her age.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsVisible = 3;
  // Limit index so we don't show empty space at the end
  const maxIndex = testimonials.length - itemsVisible;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]" 
        style={{ backgroundImage: 'radial-gradient(var(--brand-purple-deep) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="container-premium relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                Parental Voices
              </span>
              <div className="w-10 h-px bg-accent" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
              Voices of <span className="text-accent">Transformation.</span>
            </h2>
            <p className="text-xl text-muted font-medium font-serif">
              Real stories from parents who have witnessed the cognitive evolution of their children.
            </p>
          </FadeIn>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden -mx-4">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsVisible)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-1/3 px-4">
                <div className="glass-card p-10 h-full flex flex-col relative group hover:border-primary/20 transition-all duration-500 bg-white/5">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-primary/5 group-hover:text-accent/10 transition-colors duration-500">
                    <Quote size={60} strokeWidth={1} />
                  </div>

                  <div className="flex gap-1 my-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-lg text-muted font-medium font-serif mb-10 leading-relaxed relative z-10 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-xl border border-primary/10">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-[12px] font-semibold text-muted uppercase tracking-widest">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
