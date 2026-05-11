'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import styles from './navbar.module.css';
import Button from '@/components/ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Hide Navbar on Admin and Login pages (Command Center mode)
    if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) return null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Philosophy', href: '/philosophy' },
        { name: 'Curriculum', href: '/bundles' },
        { name: 'Partner Schools', href: '/schools' },
    ];

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : 'bg-transparent pt-8'}`}>
                <div className={`container-premium ${styles.navContainer}`}>
                    <Link href="/" className="flex items-center gap-2 group">
                        <img
                            src="/official-logo.png"
                            alt="MIWAY"
                            className={`h-10 lg:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110`}
                        />
                    </Link>

                    {/* Desktop Nav - Institutional Aesthetic */}
                    <nav className={styles.navLinks}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[12px] font-semibold transition-all tracking-[0.2em] uppercase ${isScrolled ? "text-gray-800" : "text-white"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="h-4 w-px bg-primary/10 mx-4" />
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="bg-primary text-white rounded-full px-8 py-4 shadow-premium hover:bg-primary-hover transition-all text-[12px] font-semibold uppercase tracking-[0.2em]"
                            >
                                Partner With Us
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden w-12 h-12 flex items-center justify-center bg-primary/5 rounded-2xl text-primary border border-primary/5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Premium Cinematic Transition */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[9999] bg-white flex flex-col p-6 md:p-12 overflow-hidden h-[100dvh] w-screen"
                    >
                        {/* Background Detail */}
                        <div className="absolute inset-0 opacity-[0.03] mesh-bg-primary pointer-events-none" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />

                        <div className="relative z-10 flex justify-between items-center mb-12 md:mb-20">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block">
                                <img src="/official-logo.png" alt="MIWAY" className="h-10 md:h-12 w-auto object-contain" />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl shadow-sm text-slate-900 active:scale-95 transition-all"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <nav className="relative z-10 flex flex-col gap-6 md:gap-8">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group flex items-center justify-between"
                                >
                                    <span className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 group-hover:text-primary transition-all tracking-tighter font-serif">
                                        {item.name}
                                    </span>
                                    <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={28} />
                                </Link>
                            ))}
                        </nav>

                        <div className="relative z-10 mt-auto pt-10 border-t border-slate-100/50 flex flex-col gap-6">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button size="lg" className="w-full py-6 md:py-8 text-xl md:text-2xl font-semibold rounded-[1.5rem] md:rounded-[2rem] shadow-2xl hover:scale-105 transition-all">Partner With Us</Button>
                            </Link>

                            <div className="flex justify-between items-center text-slate-400">
                                <div className="flex gap-4">
                                    <Globe size={16} />
                                    <span className="text-[12px] font-semibold uppercase tracking-widest">Global Authority</span>
                                </div>
                                <p className="text-[12px] font-semibold uppercase tracking-widest">© {new Date().getFullYear()} MIWAY Hub</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
