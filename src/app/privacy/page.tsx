import { FadeIn } from '@/components/ui/FadeIn';
import BannerAndBreadCrumb from '@/components/BannerAndBreadCrumb';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <BannerAndBreadCrumb 
                title="Privacy <span class='text-accent'>Policy.</span>"
                subtitle="Institutional data protection and privacy standards at MIWAY."
            />
            <div className="container max-w-4xl pt-24 pb-20">
                <FadeIn>
                    <div className="prose prose-slate prose-xl max-w-none font-medium text-slate-600 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-6">1. Information Collection</h2>
                            <p>MIWAY Teaching Aids Pvt. Ltd. collects minimal institutional data required to facilitate pedagogical partnerships and curriculum distribution.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-6">2. Data Usage</h2>
                            <p>Information collected via our contact portals is used exclusively for strategic academic consulting and is never shared with third-party marketing entities.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-6">3. Security Standards</h2>
                            <p>We employ industry-standard encryption to protect institutional data and ensure the integrity of our neuro-scientific diagnostic results.</p>
                        </section>
                        <section className="pt-12 border-t border-slate-100">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last Updated: February 4, 2026</p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
