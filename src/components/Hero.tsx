import React from 'react';
import Image from 'next/image';
// Import the image directly from the app folder
import portadaImg from '../app/portada.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden bg-[var(--vm-green-950)]">
      
      {/* Background Gradients for depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_top,_var(--vm-green-900)_0%,_var(--vm-green-950)_50%] opacity-50 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--vm-accent-lime)]/10 blur-[120px] rounded-full -z-10" />

      {/* 1. HERO TEXT CONTENT */}
      <div className="vm-container relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-16">
        
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[var(--vm-accent-lime)] text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
          Ciudad Venecia
        </span>
        
        {/* Main Title */}
        <h1 className="vm-h1 max-w-4xl mx-auto mb-6 leading-tight animate-fade-in-up-delay-1 drop-shadow-2xl">
          Tu mercado,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--vm-accent-lime)]">
            a un paso de casa.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="vm-p max-w-xl mx-auto mb-10 text-lg md:text-xl text-[var(--vm-text-300)] animate-fade-in-up-delay-2">
          Canasta básica, comida típica y servicios del día a día. <br className="hidden md:block" />
          Siempre cerca. Siempre abierto.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2 w-full">
          <button className="bg-[var(--vm-text-100)] text-[var(--vm-green-950)] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto">
            Pedir por WhatsApp
          </button>
          <button className="group flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-[var(--vm-text-100)] px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
            <span>Ver Ubicaciones</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. DASHBOARD IMAGE CONTAINER */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-auto animate-fade-in-up-delay-2">
        <div className="relative rounded-t-3xl overflow-hidden border border-white/10 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.5)] bg-[var(--vm-green-900)] ring-1 ring-white/5">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />
            
            {/* The Image */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                <Image
                src={portadaImg}
                alt="Fachada V-Market Dashboard Style"
                fill
                priority
                placeholder="blur"
                className="object-cover"
                quality={95}
                />
            </div>

            {/* Bottom fade to blend with next section if needed */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--vm-green-950)] to-transparent z-10 opacity-40" />
        </div>
      </div>
      
    </section>
  );
}
