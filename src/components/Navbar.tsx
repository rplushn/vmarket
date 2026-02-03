'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { openWhatsApp } from '@/utils/whatsapp';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if user is scrolling up or down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true);  // Show on scroll up
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-[var(--vm-green-950)]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="vm-container flex items-center justify-between px-6">
        
        {/* LEFT: Official Logo V-MKT */}
        <Link href="/" className="text-white font-black text-3xl tracking-tighter hover:text-white transition-colors select-none">
          V-MKT
        </Link>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {['INICIO', 'PRODUCTOS', 'PEDIDO EN LÍNEA', 'CONTACTO', 'AYUDA'].map((item) =>
            item === 'CONTACTO' ? (
              <button
                key={item}
                type="button"
                onClick={() => openWhatsApp()}
                className="text-white/80 hover:text-white text-xs font-medium tracking-widest transition-colors bg-transparent border-none cursor-pointer p-0 font-inherit"
              >
                {item}
              </button>
            ) : (
              <Link
                key={item}
                href="#"
                className="text-white/80 hover:text-white text-xs font-medium tracking-widest transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT: Login & Socials */}
        <div className="flex items-center gap-6">
          
          {/* Social Icons (Matte White) */}
          <div className="hidden lg:flex items-center gap-4 text-white/60">
            <span className="text-[10px] uppercase tracking-wide opacity-50 mr-2">Síguenos</span>
            {/* Instagram */}
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            {/* TikTok (Simplified path) */}
            <Link href="#" className="hover:text-white transition-colors">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.33-3.92 1.83-6.08 1.23-2.16-.6-3.95-2.25-4.66-4.33-.71-2.08-.33-4.42 1.02-6.12 1.35-1.7 3.42-2.6 5.6-2.39v4.02c-1.3-.17-2.6.46-3.37 1.55-.77 1.09-.77 2.57 0 3.66.77 1.09 2.07 1.72 3.37 1.55 1.3-.17 2.37-1.1 2.56-2.42.06-.46.06-.93 0-1.39V.02h.38z"/></svg>
            </Link>
            {/* Facebook */}
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.962.925-1.962 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
          </div>

          <div className="h-4 w-px bg-white/20 hidden lg:block"></div>

          {/* Login Button */}
          <Link href="/login" className="bg-white text-[var(--vm-green-950)] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-[var(--vm-accent-lime)] hover:text-[var(--vm-green-950)] transition-all">
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}
