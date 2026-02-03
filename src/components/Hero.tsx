'use client';

import React from 'react';
import Image from 'next/image';
import { openWhatsApp } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-screen flex flex-col items-center text-center overflow-hidden bg-[var(--vm-green-950)] isolation-auto md:justify-center">
      
      {/* 1. BACKGROUND IMAGE (z-0 to ensure it sits on top of section background but behind content) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/portada.jpg"
          alt="Fachada Tienda V-Market"
          fill
          priority
          className="object-cover animate-slow-zoom"
          quality={95}
        />
      </div>

      {/* 2. OVERLAYS (z-10 to sit on top of image) */}
      {/* Reduced darkness to 60% (from 80%) to let image shine through more */}
      <div className="absolute inset-0 bg-[var(--vm-green-950)]/60 z-10" />
      
      {/* Subtle Golden Glow (Center-Top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--vm-accent-gold)]/10 blur-[150px] rounded-full z-10 mix-blend-screen opacity-60 pointer-events-none" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--vm-green-950)] to-transparent z-10" />

      {/* 3. HERO CONTENT (z-20 to sit on top of everything) */}
      <div className="vm-container relative z-20 px-4 flex-1 flex flex-col justify-between pt-8 md:flex-none md:justify-center md:pt-0 md:mt-[300px] w-full max-w-5xl">
        {/* Top block: badge + title + subtitle (center stays clear on mobile) */}
        <div>
          <span className="inline-block py-1 px-3 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-[10px] font-medium tracking-[0.2em] uppercase animate-fade-in-up">
            Ciudad Venecia
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up-delay-1 drop-shadow-lg">
            Tu mercado,<br />
            <span className="font-normal text-[var(--vm-accent-lime)]">
              a un paso de casa.
            </span>
          </h1>
          <p className="max-w-xl mx-auto mb-12 text-lg md:text-xl font-light text-white/90 animate-fade-in-up-delay-2 leading-relaxed">
            Canasta básica, comida típica y servicios del día a día. <br className="hidden md:block" />
            Siempre cerca. Siempre abierto.
          </p>
        </div>

        {/* Buttons: on mobile bottom-aligned with safe margin above floating WA button */}
        <div className="relative flex flex-col gap-4 justify-center items-center animate-fade-in-up-delay-2 mt-auto pt-4 mb-24 pb-8 md:mt-0 md:pt-0 md:mb-5 md:pb-0">
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="bg-white text-[var(--vm-green-950)] px-8 py-4 rounded-full font-medium text-lg hover:bg-[var(--vm-accent-lime)] hover:text-[var(--vm-green-950)] transition-all duration-300 w-full sm:w-auto min-w-[200px] text-center"
          >
            Pedir por WhatsApp
          </button>
          <button className="group flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-light text-lg hover:text-[var(--vm-accent-lime)] transition-all duration-300 w-full sm:w-auto md:min-w-[200px]">
            <span>Ver Ubicaciones</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
