import React from 'react';
import Image from 'next/image';
// Import the image directly from the app folder
import portadaImg from '../app/portada.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-32 pb-0 overflow-hidden bg-[var(--vm-green-950)]">
      
      {/* 1. ATMOSPHERIC GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[var(--vm-accent-lime)]/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[var(--vm-green-900)]/50 blur-[100px] -z-10 pointer-events-none" />

      {/* 2. HERO TEXT CONTENT */}
      <div className="vm-container relative z-10 flex flex-col items-center text-center px-4 mb-12">
        
        {/* Badge */}
        <span className="inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[var(--vm-accent-lime)] text-xs font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in-up shadow-lg shadow-black/20">
          Ciudad Venecia
        </span>
        
        {/* Main Title */}
        <h1 className="vm-h1 max-w-5xl mx-auto mb-8 leading-[0.95] animate-fade-in-up-delay-1 drop-shadow-2xl tracking-tight">
          Tu mercado,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--vm-accent-lime)]">
            a un paso de casa.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="vm-p max-w-2xl mx-auto mb-10 text-lg md:text-xl text-[var(--vm-text-300)] animate-fade-in-up-delay-2 leading-relaxed">
          Canasta básica, comida típica y servicios del día a día. <br className="hidden md:block" />
          Siempre cerca. Siempre abierto.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up-delay-2 w-full">
          <button className="bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] px-10 py-4 rounded-full font-extrabold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all duration-300 w-full sm:w-auto">
            Pedir por WhatsApp
          </button>
          <button className="group flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto hover:border-white/40">
            <span>Ver Ubicaciones</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 3. CENTERED COMPACT IMAGE */}
      <div className="relative w-full mt-auto animate-fade-in-up-delay-2 perspective-[2000px]">
        
        {/* Reduced width container: approx 30% smaller than full width (using max-w-5xl approx 64rem/1024px) */}
        <div className="relative w-full max-w-5xl mx-auto transform-style-3d group px-4">
            
            <div className="relative rounded-t-[2rem] overflow-hidden shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)] border-t border-x border-white/10 bg-[var(--vm-green-900)]">
                
                {/* Image */}
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src={portadaImg}
                        alt="Fachada V-Market"
                        fill
                        priority
                        placeholder="blur"
                        className="object-cover transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-105"
                        quality={100}
                    />
                </div>

                {/* Cinematic Fade to Black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--vm-green-950)] via-transparent to-transparent z-10" />
            </div>
        </div>
      </div>
      
    </section>
  );
}
