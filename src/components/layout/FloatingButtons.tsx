"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingButtons() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTooltip, setShowScrollTooltip] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }

      // Show scroll-to-top button after 150px of scroll
      setIsVisible(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to capture state on page reload
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const primaryWhatsAppNumber = "919025224871"; // miway contact
  const whatsAppUrl = `https://wa.me/${primaryWhatsAppNumber}?text=Hi%20MIWAY%20team,%20I'd%20like%20to%20enquire%20about%20your%20educational%20curriculums%20and%20partnership%20opportunities.`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3.5 items-center select-none pointer-events-none">
      
      {/* WhatsApp Floating Button */}
      <div 
        className="pointer-events-auto relative group"
        onMouseEnter={() => setShowWhatsAppTooltip(true)}
        onMouseLeave={() => setShowWhatsAppTooltip(false)}
      >
        <AnimatePresence>
          {showWhatsAppTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider whitespace-nowrap shadow-xl border border-white/10 hidden sm:block"
            >
              Chat on WhatsApp
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact MIWAY on WhatsApp"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300 border-2 border-white/20 hover:scale-110 active:scale-95 cursor-pointer relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Pulsing ring background */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '3s' }} />
          
          {/* Custom SVG logo inside + lucide fallback check */}
          <svg
            className="w-6 h-6 md:w-7 md:h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.365 0-.082 5.447-.085 12.133a11.904 11.904 0 001.605 5.955L0 24l6.135-1.61a11.854 11.854 0 005.91 1.586h.005c6.68 0 12.13-5.447 12.133-12.135a11.82 11.82 0 00-3.414-8.543" />
          </svg>
        </motion.a>
      </div>

      {/* Scroll to Top Floating Button with Scroll Percentage */}
      <AnimatePresence>
        {isVisible && (
          <div 
            className="pointer-events-auto relative group"
            onMouseEnter={() => setShowScrollTooltip(true)}
            onMouseLeave={() => setShowScrollTooltip(false)}
          >
            <AnimatePresence>
              {showScrollTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider whitespace-nowrap shadow-xl border border-white/10 hidden sm:block"
                >
                  Scroll to Top ({Math.round(scrollProgress)}%)
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-[#1A121F] text-[#694684] dark:text-[#F3B041] shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-200 dark:border-white/10 cursor-pointer relative overflow-hidden group/btn"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Progress Ring */}
              <svg className="absolute -rotate-90 top-0 left-0 w-full h-full p-0.5" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="stroke-slate-100 dark:stroke-white/5"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="stroke-[#F3B041]"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={276.46} // 2 * Math.PI * 44 = 276.460
                  strokeDashoffset={276.46 - (scrollProgress / 100) * 276.46}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
                />
              </svg>

              {/* Chevron Up Icon */}
              <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#694684] dark:text-[#F3B041] z-10 transition-transform duration-300 group-hover/btn:-translate-y-1" />

              {/* Minimalist progress background glow on hover */}
              <div className="absolute inset-0 bg-[#694684]/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
