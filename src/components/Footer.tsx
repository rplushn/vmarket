'use client';

import React from 'react';
import Link from 'next/link';
import { openWhatsApp } from '@/utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-[var(--vm-green-900)] text-[#EAE4D3] pt-20 pb-8 rounded-t-[3rem] mt-[-2rem] relative z-30 border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      <div className="vm-container px-6">
        
        {/* TOP SECTION: Massive Logo & Newsletter (Unchanged WOW factor) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-[#EAE4D3]/10 pb-12">
            
            {/* Brand Identity */}
            <div className="max-w-md">
                <h2 className="text-[12vw] lg:text-[7rem] font-black leading-none tracking-tighter mb-4 select-none opacity-100 text-[var(--vm-accent-lime)] mix-blend-screen">
                    V-MKT
                </h2>
                <p className="text-lg font-light max-w-xs leading-relaxed opacity-80 text-white/90">
                    Tu mercado local, reinventado.
                </p>
            </div>

            {/* Newsletter Minimal */}
            <div className="w-full max-w-sm lg:pt-4">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-[var(--vm-accent-gold)]">Mantente al día</h3>
                <div className="flex gap-0 border-b border-[#EAE4D3]/20 pb-2 focus-within:border-[var(--vm-accent-lime)] transition-colors">
                    <input 
                        type="email" 
                        placeholder="tu@correo.com" 
                        className="bg-transparent w-full outline-none placeholder-white/30 text-base font-medium text-white"
                    />
                    <button className="text-base font-bold hover:text-[var(--vm-accent-lime)] transition-colors">
                        →
                    </button>
                </div>
            </div>
        </div>

        {/* BOTTOM COMPACT SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 text-sm">
            
            {/* Links Horizontal Compact */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/70">
                <Link href="#" className="hover:text-white transition-colors">Comprar</Link>
                <Link href="#" className="hover:text-white transition-colors">Servicios</Link>
                <Link href="#" className="hover:text-white transition-colors">Nuestra Historia</Link>
                <Link href="#" className="hover:text-white transition-colors">Soporte</Link>
            </div>

            {/* Direct Contact & Socials */}
            <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Pedidos & Info</p>
                <button
                    type="button"
                    onClick={() => openWhatsApp()}
                    className="text-lg font-medium text-[var(--vm-accent-lime)] hover:text-white transition-colors block mb-4 bg-transparent border-none cursor-pointer p-0 font-inherit text-right w-full"
                >
                    +504 8949-4639
                </button>
                
                <div className="flex justify-end gap-6 text-[10px] font-bold tracking-widest text-white/40">
                    <Link href="#" className="hover:text-white transition-colors">INSTAGRAM</Link>
                    <Link href="#" className="hover:text-white transition-colors">FACEBOOK</Link>
                </div>
            </div>

        </div>
        
        {/* Copyright Line */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center md:text-left">
            <p className="text-[10px] opacity-30">© 2026 V-Market Honduras. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
