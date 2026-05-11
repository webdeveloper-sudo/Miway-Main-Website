"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Footer() {
  const pathname = usePathname();

  // Hide Footer on Admin and Login pages
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/login"))
    return null;

  return (
    <footer className="bg-background-alt pt-20 pb-12 relative overflow-hidden border-t border-primary/5">
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <img
                src="/official-logo.png"
                alt="MIWAY"
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-md text-muted font-medium font-serif max-w-sm">
              Redefining the educational landscape through diverse intelligence
              and neuroscience-driven pedagogy. Redefining the educational
              landscape through diverse
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-primary/5 flex items-center justify-center text-muted hover:text-white hover:bg-primary transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[15px] font-black text-primary font-serif uppercase tracking-[0.1em] mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Curriculum", href: "/bundles" },
                { name: "Partner Schools", href: "/schools" },
                { name: "Philosophy", href: "/philosophy" },
                { name: "Manifesto", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-muted font-medium font-serif max-w-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-black text-primary font-serif uppercase tracking-[0.1em] mb-6">
              Corporate
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Leadership", href: "/about" },
                { name: "Careers", href: "/contact" },
                { name: "Partners", href: "/publish" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-muted font-medium font-serif max-w-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[15px] font-black text-primary font-serif uppercase tracking-[0.1em] mb-6">
              Contact Us
            </h4>
            <div className="space-y-2">
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-background border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-white shadow-sm flex-shrink-0">
                  <Phone
                    size={18}
                    className="text-muted hover:bg-primary hover:text-white"
                  />
                </div>
                <div className="flex flex-col text-md text-muted font-medium font-serif max-w-sm pt-1">
                  <span>+91 90252 24871</span>
                  <span>+91 93459 17094</span>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-10 h-10 rounded-full bg-background border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-white shadow-sm flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-muted hover:bg-primary hover:text-white"
                  />
                </div>
                <a
                  href="mailto:info@miway.in"
                  className="text-md text-muted font-medium font-serif max-w-sm hover:text-primary transition-colors"
                >
                  info@miway.in
                </a>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-background border border-primary/5 flex items-center justify-center hover:bg-primary hover:text-white shadow-sm flex-shrink-0">
                  <MapPin
                    size={18}
                    className="text-muted hover:bg-primary hover:text-white"
                  />
                </div>
                <span className="text-md text-muted font-medium font-serif max-w-sm pt-1">
                  #88, Candappa Mudaliar St,
                  <br />
                  Puducherry - 605 001. India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted mb-4">
              © {new Date().getFullYear()} MIWAY Teaching Aids Pvt. Ltd.
            </span>
            {/* <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                           
                        </p> */}
          </div>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <Link
                key={link}
                href="/privacy"
                className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted mb-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
