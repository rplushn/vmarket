'use client';

import React, { useState, useEffect } from 'react';
import { openWhatsApp } from '@/utils/whatsapp';

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 15s so the user can enjoy the Hero first (wow effect)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Content - compact on mobile, full on desktop */}
      <div className="relative bg-[var(--vm-green-950)] border border-[var(--vm-accent-lime)]/30 w-[92vw] max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl md:rounded-[2rem] p-5 md:p-8 lg:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="csTextZoomOut">
          {/* Badge */}
          <div className="inline-block px-3 py-0.5 md:px-4 md:py-1 rounded-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
            Muy Pronto
          </div>

          {/* Content */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-medium text-white mb-3 md:mb-4 leading-tight">
            Nace una nueva franquicia en <span className="text-[var(--vm-accent-lime)]">Ciudad Venecia</span>
          </h2>

          <p className="text-white/80 text-sm md:text-base mb-5 md:mb-8 leading-relaxed">
            V-Market llega para estar siempre cerca de ti. Conveniencia, servicio y acceso <span className="text-[var(--vm-accent-gold)] font-bold">24/7</span> en todos nuestros desarrollos.
          </p>

          {/* Locations Grid */}
          <div className="bg-white/5 rounded-lg md:rounded-xl p-4 mb-5 md:p-6 md:mb-8 border border-white/10">
            <h3 className="text-[var(--vm-accent-gold)] text-xs md:text-sm font-normal uppercase tracking-widest mb-3 md:mb-4">
              📅 Marzo • Grandes Inauguraciones
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[var(--vm-accent-lime)] mt-0.5 md:mt-1 text-sm">📍</span>
                <div className="min-w-0">
                  <strong className="text-white block text-sm md:text-base">Plaza de Ciudad Venecia Danlí</strong>
                  <span className="text-[10px] md:text-xs text-white/50">Centro Comercial Venecia</span>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[var(--vm-accent-lime)] mt-0.5 md:mt-1 text-sm">📍</span>
                <div className="min-w-0">
                  <strong className="text-white block text-sm md:text-base">Casa Club de Ciudad Venecia Olancho</strong>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openWhatsApp();
            }}
            className="block w-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-center font-medium uppercase tracking-wide text-sm md:text-base py-3 md:py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-[var(--vm-accent-lime)]/20"
          >
            Recibir Invitación
          </button>

          <p className="text-center text-white/30 text-[9px] md:text-[10px] mt-3 md:mt-4 uppercase tracking-widest">
            Siempre cerca. Siempre abierto.
          </p>
        </div>
      </div>
    </div>
  );
}
