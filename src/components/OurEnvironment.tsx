import React from 'react'
import { FadeIn } from './ui/FadeIn'

const OurEnvironment = () => {
  return (
    <div>
        <section className="container mx-auto flex flex-col justify-center lg:px-24 md:px-20 px-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-accent" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em]">
                Our Environment
              </span>
              <div className="w-10 h-px bg-accent" />
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6 md:mb-6">
              Inside Our Learning{" "}
              <span className="text-accent"> Environment.</span>
            </h3>

            <p className="text-xl text-muted font-medium font-serif max-w-2xl mx-auto">
              Discover how curiosity, creativity, and collaboration come
              together every day.
            </p>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-full ">
          {[
            "AQM4_UlADd680PDzoQxhbJ7azYnFdnCCNH1NRRBvQTeqwdc2tcavrsxCKDNjnbAsC9GuUyQfX2Ya0ReuywNuMlShW_NJNLutMp5fQBg_ikol1r",
            "AQPy0cDduwcpUjpskXZKfSLLBhrHqnVcuj_qSR7E5-WNT5xbZ_B-phmNoE-j-IhxeGInLoZGvWwkjsjStqnTuLMOdMZgfCflBROCzZE_lyvy98",
            "AQNlWDCzelkaijFObe2feJC3gVLJADfnDXDv7NOIr54qMCUNn8rvnNcUDn1vBFNmDxk5q2vlazEK16kiYAn74PaAJtxNH8mR4iGbX4M_s5osz9",
          ].map((publicId, index) => (
            <div
              key={index}
              className="glass-card shadow-2xl transition-all duration-300 hover:border-primary/20 w-full mx-auto group"
            >
              <div className="relative w-full aspect-[9/16] overflow-hidden bg-black">
                <iframe
                  src={`https://player.cloudinary.com/embed/?cloud_name=dn743e2bt&public_id=${publicId}`}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurEnvironment