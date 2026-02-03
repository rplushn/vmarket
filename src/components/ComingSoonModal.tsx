'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

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

        {/* Badge */}
        <div className="inline-block px-4 py-1 rounded-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-xs font-black uppercase tracking-widest mb-6">
          Muy Pronto
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          Nace una nueva franquicia en <span className="text-[var(--vm-accent-lime)]">Ciudad Venecia</span>
        </h2>

        <p className="text-white/80 mb-8 leading-relaxed">
          V-Market llega para estar siempre cerca de ti. Conveniencia, servicio y acceso <span className="text-[var(--vm-accent-gold)] font-bold">24/7</span> en todos nuestros desarrollos.
        </p>

        {/* Locations Grid */}
        <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
          <h3 className="text-[var(--vm-accent-gold)] text-sm font-bold uppercase tracking-widest mb-4">
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
        <Link 
          href="https://wa.me/50489494639?text=Hola,%20quiero%20mi%20invitación%20para%20la%20inauguración%20de%20V-Market!"
          target="_blank"
          className="block w-full bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-center font-black uppercase tracking-wide py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-[var(--vm-accent-lime)]/20"
        >
          Recibir Invitación
        </Link>
        
        <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-widest">
          Siempre cerca. Siempre abierto.
        </p>
      </div>
    </div>
  );
}
