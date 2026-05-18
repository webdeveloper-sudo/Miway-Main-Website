"use client";

import Button from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Globe,
  Clock,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  Send,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import Link from "next/link";


export default function ContactClient({
  content,
}: {
  content: Record<string, string>;
}) {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsPending(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      school: formData.get("school") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      /**
       * ─────────────────────────────────────────────
       * SAVE TO DATABASE & TRIGGER SERVER SYNC TO SHEET
       * ─────────────────────────────────────────────
       */
      const dbRes = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!dbRes.ok) {
        const err = await dbRes.json().catch(() => ({}));

        throw new Error(
          err?.error || "Database submission failed"
        );
      }

      /**
       * ─────────────────────────────────────────────
       * SUCCESS
       * ─────────────────────────────────────────────
       */
      formRef.current?.reset();

      setIsSuccess(true);
    } catch (err: any) {
      console.error("[Contact Form Error]", err);

      setErrorMsg(
        err?.message ||
          "Submission failed. Please try again later."
      );
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center bg-slate-50">
        <FadeIn>
          <div className="glass-card p-16 md:p-24 rounded max-w-2xl mx-auto bg-white shadow-premium border border-primary/5 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <CheckCircle2
                size={48}
                className="text-accent"
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter text-primary">
              Response Received
            </h2>

            <p className="text-lg text-muted font-medium font-serif mb-8 leading-relaxed max-w-md mx-auto">
              Thank you for initiating this partnership.
              Our institutional specialists will review
              your requirements and provide a strategic
              response within{" "}
              <span className="text-primary font-bold">
                24 hours
              </span>
              .
            </p>

            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-primary text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest shadow-premium hover:scale-105 transition-all"
            >
              <Link href="/">Return Home</Link>
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
          'Connect with <br /> <span class="text-accent">MIWAY</span>'
        }
        subtitle={
          content["contact_hero_desc"] ||
          "Initiate a high-level academic partnership. Discuss your institution's cognitive evolution with our specialist team."
        }
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* LEFT SIDE */}
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
                  <span className="font-serif font-medium gradient-text">
                    {" "}
                    Partnership Hub.
                  </span>
                </h2>

                <p className="text-lg text-muted font-medium font-serif mb-8 leading-relaxed max-w-md">
                  Our executive team is available for
                  high-level consultations regarding
                  curriculum engineering and
                  neural-spatial deployment.
                </p>

                <div className="space-y-2">
                  {[
                    {
                      icon: Mail,
                      title:
                        content["contact_info_1_title"] ||
                        "Executive Liaison",
                      desc:
                        content["contact_info_1_desc"] ||
                        "partners@miway.edu",
                      label: "Email",
                    },
                    {
                      icon: MessageSquare,
                      title:
                        content["contact_info_2_title"] ||
                        "Direct Consultation",
                      desc:
                        content["contact_info_2_desc"] ||
                        "+91 98765 43210",
                      label: "WhatsApp / Call",
                    },
                    {
                      icon: MapPin,
                      title:
                        content["contact_info_3_title"] ||
                        "Headquarters",
                      desc:
                        content["contact_info_3_desc"] ||
                        "#88, Candappa Mudaliar St,\nPuducherry - 605 001. India",
                      label: "Office",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group glass-card px-8 py-6 rounded border border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden"
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

                          <p className="text-[15px] text-muted font-medium font-sans leading-relaxed max-w-md whitespace-pre-line">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 p-8 rounded bg-primary text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 flex gap-6 items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Clock
                        size={24}
                        className="text-primary"
                      />
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

            {/* RIGHT SIDE */}
            <div className="lg:col-span-6">
              <FadeIn direction="left">
                <div className="glass-card p-10 md:p-16 bg-white shadow-premium border border-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[0.9] tracking-tighter">
                        Request Strategic
                        <span className="font-serif font-medium gradient-text">
                          {" "}
                          Partnership.
                        </span>
                      </h2>

                      <div className="border border-accent rounded-full p-3">
                        <ShieldCheck
                          className="text-accent"
                          size={48}
                        />
                      </div>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Executive Name
                          </label>

                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Dr. Sarah Jenkins"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                          />
                        </div>

                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Institution
                          </label>

                          <input
                            type="text"
                            name="school"
                            required
                            placeholder="School Name"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
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
                            required
                            placeholder="sarah@institution.edu"
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
                          />
                        </div>

                        <div className="space-y-3">
                          <label className="text-[13px] font-semibold text-primary uppercase tracking-widest pl-2">
                            Direct Phone
                          </label>

                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91..."
                            className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium"
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
                          placeholder="Outline your institutional objectives..."
                          className="w-full bg-slate-50 border border-gray-300 rounded-sm px-6 py-3 text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-300 font-medium resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-8 rounded-full text-lg font-bold uppercase tracking-[0.2em] bg-primary text-white shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center group"
                      >
                        {isPending
                          ? "Submitting..."
                          : "Submit Enquiry"}

                        {!isPending && (
                          <Send
                            size={18}
                            className="ml-4 group-hover:translate-x-2 transition-transform"
                          />
                        )}
                      </Button>

                      {errorMsg && (
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
                          <AlertCircle
                            size={18}
                            className="shrink-0 mt-0.5"
                          />

                          <p className="text-sm font-medium">
                            {errorMsg}
                          </p>
                        </div>
                      )}

                      <p className="text-sm text-muted font-medium font-serif leading-relaxed max-w-md mx-auto">
                        *By submitting, you agree to our
                        terms of institutional engagement
                        and data privacy protocols.
                      </p>
                    </form>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}