import React from 'react';
import Image from 'next/image';
// Import the image directly from the app folder
// User must move image to src/app/portada.jpg
import portadaImg from '../../app/portada.jpg'; /* Corrected path: up 2 levels */

export default function Hero() {
  return (
    <section className="vm-section min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={portadaImg} /* Using the imported object directly */
          alt="Fachada Tienda V-Market Ciudad Venecia"
          fill
          priority
          placeholder="blur" /* Bonus: Adds a blur effect while loading */
          className="object-cover animate-slow-zoom"
          quality={90}
        />
      </div>

      {/* 2. OVERLAYS (Gradient Masks) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--vm-green-950)] via-[var(--vm-green-950)]/80 to-[var(--vm-green-950)]/30 -z-10" />
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--vm-green-950)_0%,_transparent_100%] opacity-40 -z-10" />

      {/* 3. HERO CONTENT */}
      <div className="vm-container relative z-10">
        
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[var(--vm-accent-lime)] text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
          Ciudad Venecia
        </span>
        
        {/* Main Title */}
        <h1 className="vm-h1 max-w-5xl mx-auto mb-8 leading-tight animate-fade-in-up-delay-1 drop-shadow-2xl">
          Tu mercado,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--vm-accent-lime)]">
            a un paso de casa.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="vm-p max-w-xl mx-auto mb-12 text-lg md:text-xl text-white/90 animate-fade-in-up-delay-2 drop-shadow-md">
          Canasta básica, comida típica y servicios del día a día. <br className="hidden md:block" />
          Siempre cerca. Siempre abierto.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
          <button className="bg-[var(--vm-text-100)] text-[var(--vm-green-950)] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto">
            Pedir por WhatsApp
          </button>
          <button className="group flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-[var(--vm-text-100)] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
            <span>Ver Ubicaciones</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <svg className="w-6 h-6 text-white drop-shadow-lg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
