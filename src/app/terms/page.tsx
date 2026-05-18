"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import Link from "next/link";
import {
  FileText,
  Key,
  ShieldAlert,
  Coins,
  Scale,
  MessageSquare,
  HelpCircle,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("agreement");

  const sections = [
    { id: "agreement", title: "1. Agreement & Parties", icon: FileText },
    { id: "license", title: "2. Intellectual Property", icon: Key },
    { id: "conduct", title: "3. Institutional Conduct", icon: ShieldAlert },
    { id: "commercial", title: "4. Licensing & Fees", icon: Coins },
    { id: "liability", title: "5. Liability & Warranty", icon: Scale },
    { id: "disputes", title: "6. Disputes & Jurisdiction", icon: MessageSquare },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <BannerAndBreadCrumb
        title="Terms of <span class='text-accent'>Service.</span>"
        subtitle="Operational parameters and legal frameworks for partner institutions."
        img="/images/45115730_bnn2.jpg"
      />

      <div className="container-premium py-20">
        <div className="grid lg:grid-cols-12 gap-12 relative">
          
          {/* ── LEFT: STICKY NAVIGATION ────────────────────────────────────── */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <div className="glass-card p-8 rounded bg-white border border-primary/5 shadow-premium space-y-6">
                <div className="pb-4 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                    MIWAY Corporate guidelines
                  </span>
                  <h3 className="text-xl font-bold text-primary tracking-tight">
                    Legal Framework
                  </h3>
                </div>

                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleScrollTo(section.id)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded text-left transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-lg scale-[1.02]"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-primary"
                        }`}
                      >
                        <Icon size={18} className={isActive ? "text-accent" : "text-slate-400"} />
                        <span className="text-[14px] font-bold tracking-tight">
                          {section.title}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-6 border-t border-slate-100">
                  <div className="p-5 rounded bg-primary/5 border border-primary/5 flex items-start gap-4">
                    <HelpCircle className="text-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1">
                        Corporate Liaison
                      </h4>
                      <p className="text-xs text-muted leading-relaxed font-serif mb-3">
                        Connect with our administrative division for licensing questions.
                      </p>
                      <a
                        href="mailto:info@miway.in"
                        className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group"
                      >
                        info@miway.in
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: DETAILED TERMS CONTENT ───────────────────────────────── */}
          <div className="lg:col-span-8 space-y-16">
            <FadeIn>
              <div className="prose prose-slate max-w-none space-y-16">
                
                {/* 1. Agreement & Parties */}
                <section
                  id="agreement"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <FileText size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      1. Agreement & Parties
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-4">
                    <p>
                      Welcome to the official platform of <strong>MIWAY Teaching Aids Pvt. Ltd.</strong> ("MIWAY", "we", "us", "our"). These Terms of Service ("Terms") constitute a legally binding agreement between MIWAY and your subscribing educational institution ("Partner Institution", "Subscribed School", "you").
                    </p>
                    <p>
                      By partnering with us, procuring our curricula, utilizing our textbooks, cognitive aids, diagnostic frameworks, or digital admin portals, you explicitly agree to compile and execute all pedagogical standards defined within this agreement.
                    </p>
                    <div className="p-5 rounded bg-amber-50/50 border border-amber-200 text-amber-900 text-sm font-sans flex items-start gap-4 my-6">
                      <Sparkles className="text-accent shrink-0 mt-0.5" size={20} />
                      <p className="margin-0 font-medium">
                        Engagement with MIWAY requires adherence to premium pedagogical standards, licensing compliance, and complete protection of our proprietary frameworks.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Intellectual Property */}
                <section
                  id="license"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <Key size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      2. Intellectual Property
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-6">
                    <p>
                      All structural pedagogical frameworks, textbooks, cognitive diagnostic algorithms, neural-spatial models, and digital systems (collectively, the "MIWAY Ecosystem") are the sole, exclusive intellectual property of MIWAY Teaching Aids Pvt. Ltd.
                    </p>
                    
                    <div className="p-6 rounded bg-slate-50 border border-slate-100 font-sans space-y-3">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                        License Scope & Restrictions:
                      </span>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 font-serif">
                        <li><strong>Authorized Use:</strong> You are granted a limited, non-exclusive, non-transferable right to utilize MIWAY curricula in classrooms of certified partner branches.</li>
                        <li><strong>Prohibitions:</strong> You may not digitize, photocopy, replicate, or commercially distribute MIWAY textbooks, teaching frameworks, or cognitive systems without our express written permission.</li>
                        <li><strong>No Derivative Works:</strong> Rebranding or combining MIWAY methodologies under separate institutional trademarks is strictly prohibited.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 3. Institutional Conduct */}
                <section
                  id="conduct"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <ShieldAlert size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      3. Institutional Conduct
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-4">
                    <p>
                      Subscribing partner administrators and teachers must maintain the confidentiality of administrative credentials granted for our portals.
                    </p>
                    <p>
                      Furthermore, you agree to conduct all academic exercises using our proprietary tools with high professional integrity, respecting the emotional and neural development pacing of participating students.
                    </p>
                  </div>
                </section>

                {/* 4. Licensing & Fees */}
                <section
                  id="commercial"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <Coins size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      4. Licensing & Fees
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-4">
                    <p>
                      Access to custom curriculum blueprints, diagnostic systems, and wholesale physical textbook orders are subject to the specific commercial licenses and invoices issued to your institution.
                    </p>
                    <p>
                      All invoices are payable in accordance with the specified schedules. Default on payments or unlicensed reproduction of resources can result in immediate termination of framework privileges and access.
                    </p>
                  </div>
                </section>

                {/* 5. Liability & Warranty */}
                <section
                  id="liability"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <Scale size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      5. Liability & Warranty
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-4">
                    <p>
                      While we offer state-of-the-art neuroscience-driven frameworks and high-fidelity physical books, the MIWAY Ecosystem is supplied to partner institutions on an "as is" and "as available" basis.
                    </p>
                    <p>
                      Individual cognitive development relies heavily on localized classroom environments, instructional quality, and parental engagement. Therefore, MIWAY cannot offer absolute guarantees regarding standardized student performance metrics.
                    </p>
                  </div>
                </section>

                {/* 6. Disputes & Jurisdiction */}
                <section
                  id="disputes"
                  className="glass-card p-10 md:p-12 rounded bg-white border border-primary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary">
                      <MessageSquare size={20} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider my-0">
                      6. Disputes & Jurisdiction
                    </h2>
                  </div>

                  <div className="text-slate-600 font-serif leading-relaxed text-lg space-y-4">
                    <p>
                      These Terms and all operational contracts between MIWAY Teaching Aids Pvt. Ltd. and subscribing partners are governed in accordance with the laws of Puducherry and India.
                    </p>
                    <p>
                      Any disputes arising out of these operations will be subject exclusively to the jurisdiction of the competent courts in Puducherry, India.
                    </p>
                    <div className="p-6 rounded bg-slate-50 border border-slate-100 flex items-center gap-4 font-sans mt-6">
                      <Mail className="text-accent" size={24} />
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-1">
                          Official Corporate Mailbox
                        </h4>
                        <a
                          href="mailto:info@miway.in"
                          className="text-base font-bold text-accent hover:text-primary transition-colors"
                        >
                          info@miway.in
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="pt-8 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest font-sans">
                    Last Updated: May 18, 2026
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
