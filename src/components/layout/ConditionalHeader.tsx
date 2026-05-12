"use client";

import { usePathname } from "next/navigation";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";

const routeTitles: Record<string, string> = {
  "/about": "About Us",
  "/contact": "Contact Us",
  "/philosophy": "Our Philosophy",
  "/bundles": "Curriculum Bundles",
  "/schools": "Partner Schools",
  "/publish": "Publish With Us",
  "/privacy": "Privacy Policy",
  "/login": "Admin Login",
  "/admin": "Admin Dashboard",
};

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === "/" || pathname === "/home") {
    return null;
  }

  // Get title from mapping or generate from pathname
  const title = routeTitles[pathname] || 
                pathname.split("/").pop()?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || 
                "MIWAY";

  return <BannerAndBreadCrumb title={title} />;
}
