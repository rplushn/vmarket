'use client';

import React from 'react';

type MenuComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuComingSoonModal({ isOpen, onClose }: MenuComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      <div
        className="relative bg-[var(--vm-green-950)] border border-[var(--vm-accent-lime)]/30 w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close X */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="menu-modal-title"
          className="text-2xl md:text-3xl text-white font-normal mb-4 leading-tight pr-8"
        >
          ¡Menú en el horno!
        </h2>
        <p className="text-white/80 text-base font-normal leading-relaxed mb-8">
          Estamos terminando de cocinar nuestro menú completo. Muy pronto podrás ver todas nuestras delicias aquí.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl border border-[var(--vm-accent-lime)]/50 text-[var(--vm-accent-lime)] font-medium hover:bg-[var(--vm-accent-lime)]/10 transition-colors"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
