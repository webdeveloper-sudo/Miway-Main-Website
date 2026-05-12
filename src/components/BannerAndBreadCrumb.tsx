"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type BannerAndBreadCrumbProps = {
  title: string;
  subtitle?: string;
  img?: string;
}

const BannerAndBreadCrumb = ({ title = "Page Title", subtitle, img }: BannerAndBreadCrumbProps) => {
  const pathname = usePathname();
  
  const defaultBanner = "/images/45115730_bnn2.jpg";
  const safeImage = img || defaultBanner;

  // Breadcrumb path segments
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <section
      className="
        w-full 
        h-[350px] sm:h-[400px] md:h-[550px]
        relative flex items-center justify-center text-white
        overflow-hidden pt-20
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0  z-10" />
        <Image
          src={safeImage}
          alt={title}
          fill
          priority
          className="object-cover scale-105"
        />
      </div>

      {/* Breadcrumb Overlay */}
      <div
        className="
          absolute top-28 left-4 sm:left-6 md:left-10
          text-[13px] sm:text-[13px] font-semibold uppercase tracking-[0.2em]
          flex flex-wrap items-center gap-2 z-20 text-gray-600
        "
      >
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>

        {pathnames.length > 0 && <span className="text-primary">/</span>}

        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          const routePath = "/" + pathnames.slice(0, index + 1).join("/");

          return isLast ? (
            <span key={name} className="text-primary/60">
              {name.replace(/-/g, " ")}
            </span>
          ) : (
            <React.Fragment key={name}>
              <Link href={routePath} className="hover:text-accent transition-colors">
                {name.replace(/-/g, " ")}
              </Link>
              <span className="text-white/20">/</span>
            </React.Fragment>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1
          className="
            text-4xl sm:text-4xl md:text-6xl lg:text-7xl
            font-bold drop-shadow-2xl
            text-primary mb-6 uppercase
          "
          dangerouslySetInnerHTML={{ __html: title }}
        />
       
        <div className="w-48 h-1 bg-gradient-to-r from-primary via-accent/90 to-accent mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]" />
      </div>

      </section>
  );
};

export default BannerAndBreadCrumb;
