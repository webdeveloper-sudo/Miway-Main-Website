import Button from '@/components/ui/Button';
import Link from 'next/link';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 relative overflow-hidden flex flex-col">
            <BannerAndBreadCrumb 
                title="Signal <span class='text-accent'>Lost.</span>"
                subtitle="The requested coordinate exists beyond our mapped curriculum."
            />
            <div className="flex-grow flex items-center justify-center relative py-20">
                {/* Cinematic Background */}
                <div className="absolute inset-0 opacity-20 mesh-bg-primary" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

                <div className="relative z-10 text-center max-w-2xl px-6">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 mb-12 shadow-2xl animate-pulse-slow">
                        <span className="text-6xl font-black text-white/20">404</span>
                    </div>

                    <p className="text-xl text-slate-500 mb-16 max-w-lg mx-auto leading-relaxed">
                        Let&apos;s guide you back to the foundation.
                    </p>

                    <Link href="/">
                        <Button size="lg" className="bg-white text-slate-900 shadow-2xl hover:scale-105 transition-all px-12 py-6 text-lg font-black rounded-full">
                            Return to Base
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
