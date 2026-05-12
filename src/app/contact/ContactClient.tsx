"use client";

import Button from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Zap,
  Globe,
  Sparkles,
  Clock,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { useState, useTransition } from "react";
import { submitEnquiry } from "@/lib/actions";
import { FadeIn } from "@/components/ui/FadeIn";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import Link from "next/link";

export default function ContactClient({
  content,
}: {
  content: Record<string, string>;
}) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await submitEnquiry(formData);
      setIsSuccess(true);
    });
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center bg-slate-50">
        <FadeIn>
          <div className="glass-card p-16 md:p-24 rounded-[3rem] max-w-2xl mx-auto bg-white shadow-premium border border-primary/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <CheckCircle2 size={48} className="text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight font-serif italic">
              Request Received.
            </h2>
            <p className="text-lg text-muted mb-12 font-medium leading-relaxed">
              Thank you for initiating this partnership. Our institutional
              specialists will review your requirements and provide a strategic
              response within{" "}
              <span className="text-primary font-bold">24 hours</span>.
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-primary text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest shadow-premium hover:scale-105 transition-all"
            >
              Submit Another Request
            </Button>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <BannerAndBreadCrumb
        title={
          content["contact_hero_title"] ||
          'Strategic <br /> <span class="text-accent">Access.</span>'
        }
        subtitle={
          content["contact_hero_desc"] ||
          "Initiate a high-level academic partnership. Discuss your institution's cognitive evolution with our specialist team."
        }
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* 1. Direct Intelligence (Info) */}
            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-accent" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Direct Access
                  </span>
                  <div className="w-10 h-px bg-accent" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter">
                  Institutional
                  <span className="font-serif  font-medium gradient-text">
                    {" "}
                    Partnership Hub.
                  </span>
                </h2>
                <p className="text-lg text-muted font-medium font-serif mb-8 leading-relaxed max-w-md">
                  Our executive team is available for high-level consultations
                  regarding curriculum engineering and neural-spatial
                  deployment.
                </p>

                <div className="space-y-2">
                  {[
                    {
                      icon: Mail,
                      title:
                        content["contact_info_1_title"] || "Executive Liaison",
                      desc:
                        content["contact_info_1_desc"] || "partners@miway.edu",
                      label: "Email",
                    },
                    {
                      icon: MessageSquare,
                      title:
                        content["contact_info_2_title"] ||
                        "Direct Consultation",
                      desc: content["contact_info_2_desc"] || "+91 98765 43210",
                      label: "WhatsApp / Call",
                    },
                    {
                      icon: MapPin,
                      title: content["contact_info_3_title"] || "Headquarters",
                      desc:
                        content["contact_info_3_desc"] ||
                        "#88, Candappa Mudaliar St,\nPuducherry - 605 001. India",
                      label: "Office",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group glass-card px-8 py-6 rounded-[1rem] border border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                      <div className="relative z-10 flex gap-6 items-start">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform">
                          <item.icon size={28} />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                            {item.label}
                          </span>
                          <h3 className="text-xl font-bold text-primary mb-1 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-[15px] text-muted font-medium whitespace-pre-line">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 p-8 rounded-[1rem] bg-primary text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 flex gap-6 items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white/90 mb-1 tracking-tight">
                        Institutional Hours
                      </h4>
                      <p className="text-white/80 font-medium text-sm">
                        Mon - Fri: 09:00 - 18:00 IST
                      </p>
                    </div>
                  </div>
                  <Globe
                    className="absolute -right-8 -bottom-8 text-white/5"
                    size={160}
                  />
                </div>
              </FadeIn>
            </div>

            {/* 2. Strategic Intake (Form) */}
            <div className="lg:col-span-6">
              <FadeIn direction="left">
                <div className="glass-card p-10 md:p-16 rounded-[1rem] bg-white shadow-premium border border-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter">
                        Request Strategic
                        <span className="font-serif  font-medium gradient-text">
                          {" "}
                          Partnership.
                        </span>
                      </h2>
                      <div className="border border-accent rounded-full p-3">
                        <ShieldCheck className="text-accent" size={48} />
                      </div>
                    </div>

                    <form action={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Executive Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                            placeholder="e.g. Dr. Sarah Jenkins"
                            required
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Institution
                          </label>
                          <input
                            type="text"
                            name="school"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                            placeholder="School Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Official Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                            placeholder="sarah@institution.edu"
                            required
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Direct Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                            placeholder="+91..."
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                          Strategic Requirements
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium resize-none"
                          placeholder="Outline your institutional objectives..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full py-8 rounded-full text-lg font-bold uppercase tracking-[0.2em] bg-primary text-white shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
                        disabled={isPending}
                      >
                        {isPending
                          ? "Authenticating..."
                          : "Initiate Partnership Request"}
                        {!isPending && (
                          <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                        )}
                      </Button>

                      <p className="text-sm text-muted font-medium font-serif mb-8 leading-relaxed max-w-mdmx-auto">
                        *By submitting, you agree to our terms of institutional
                        engagement and data privacy protocols.
                      </p>
                    </form>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      {/* <section className="section-padding bg-background-alt relative overflow-hidden border-t border-primary/5">
        <div className="container-premium text-center">
          <FadeIn>
            <Sparkles
              className="mx-auto text-accent mb-10 animate-pulse"
              size={64}
            />
            <h2
              className="text-5xl md:text-8xl font-bold text-primary mb-12 tracking-tight italic font-serif"
              dangerouslySetInnerHTML={{
                __html: content["contact_global_title"] || "Global Operations.",
              }}
            />
            <p className="text-xl md:text-2xl text-muted font-medium font-serif mb-20 leading-relaxed max-w-3xl mx-auto opacity-90">
              {content["contact_global_desc"] ||
                "Our specialized teams operate across primary education hubs, providing on-site neural-spatial deployment and curriculum integration."}
            </p>

            <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
              <div className="flex flex-col items-center gap-4">
                <Globe size={48} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Worldwide
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <ShieldCheck size={48} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Certified
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Zap size={48} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  On-Site
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(var(--primary) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </section> */}
    </div>
  );
}
