"use client";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import OurEnvironment from "@/components/OurEnvironment";
import Testimonials from "@/components/redesign/Testimonials";
import { FadeIn } from "@/components/ui/FadeIn";
import React from "react";

const page = () => {
  return (
    <div>
      <BannerAndBreadCrumb
        title={"Parent Trust"}
        subtitle={"When Parents Choose MIWAY They Choose Certainty"}
      />
      <section className="container mx-auto flex justify-center">
        <Testimonials />
      </section>

      <OurEnvironment/>
    </div>
  );
};

export default page;
