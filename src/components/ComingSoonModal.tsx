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
      {/* Modal Content */}
      <div className="relative bg-[var(--vm-green-950)] border border-[var(--vm-accent-lime)]/30 w-full max-w-lg rounded-[2rem] p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="csTextZoomOut">
          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-xs font-black uppercase tracking-widest mb-6">
            Muy Pronto
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 leading-tight">
            Nace una nueva franquicia en <span className="text-[var(--vm-accent-lime)]">Ciudad Venecia</span>
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            V-Market llega para estar siempre cerca de ti. Conveniencia, servicio y acceso <span className="text-[var(--vm-accent-gold)] font-bold">24/7</span> en todos nuestros desarrollos.
          </p>

          {/* Locations Grid */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
            <h3 className="text-[var(--vm-accent-gold)] text-sm font-normal uppercase tracking-widest mb-4">
              📅 Marzo • Grandes Inauguraciones
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[var(--vm-accent-lime)] mt-1">📍</span>
                <div>
                  <strong className="text-white block">Plaza de Ciudad Venecia Danlí</strong>
                  <span className="text-xs text-white/50">Centro Comercial Venecia</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--vm-accent-lime)] mt-1">📍</span>
                <div>
                  <strong className="text-white block">Casa Club de Ciudad Venecia Olancho</strong>
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
            className="block w-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-center font-medium uppercase tracking-wide py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-[var(--vm-accent-lime)]/20"
          >
            Recibir Invitación
          </button>

          <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-widest">
            Siempre cerca. Siempre abierto.
          </p>
        </div>
      </div>
    </div>
  );
}
