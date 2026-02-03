import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--vm-green-900)] text-[#EAE4D3] pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-30 border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      <div className="vm-container px-6">
        
        {/* TOP SECTION: Massive Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 border-b border-[#EAE4D3]/10 pb-16">
            
            {/* Brand Identity */}
            <div className="max-w-md">
                <h2 className="text-[12vw] lg:text-[8rem] font-black leading-none tracking-tighter mb-6 select-none opacity-100 text-[var(--vm-accent-lime)] mix-blend-screen">
                    V-MKT
                </h2>
                <p className="text-xl font-light max-w-xs leading-relaxed opacity-80 text-white/90">
                    Tu mercado local, reinventado para la vida moderna. Calidad que conoces, comodidad que mereces.
                </p>
            </div>

            {/* Newsletter Minimal */}
            <div className="w-full max-w-md lg:pt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[var(--vm-accent-gold)]">Mantente al día</h3>
                <div className="flex gap-0 border-b-2 border-[#EAE4D3]/20 pb-2 focus-within:border-[var(--vm-accent-lime)] transition-colors">
                    <input 
                        type="email" 
                        placeholder="tu@correo.com" 
                        className="bg-transparent w-full outline-none placeholder-white/30 text-lg font-medium text-white"
                    />
                    <button className="text-lg font-bold hover:text-[var(--vm-accent-lime)] transition-colors">
                        →
                    </button>
                </div>
            </div>
        </div>

        {/* MIDDLE SECTION: Clean Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 text-sm md:text-base">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2 text-white">Comprar</h4>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Canasta Básica</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Lácteos & Quesos</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Frutas & Verduras</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Panadería</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2 text-white">Servicios</h4>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Envíos a Domicilio</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Pick-up Express</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Pedidos Empresariales</Link>
            </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2 text-white">Empresa</h4>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Nuestra Historia</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Bolsa de Trabajo</Link>
                <Link href="#" className="hover:text-[var(--vm-accent-lime)] transition-colors">Sostenibilidad</Link>
            </div>

            {/* Column 4: Contact Minimal */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2 text-white">Contacto</h4>
                <p className="opacity-80">Ciudad Venecia,<br/>Tegucigalpa, HN</p>
                <Link href="tel:+50499999999" className="font-medium hover:text-[var(--vm-accent-lime)] transition-colors">+504 9999-9999</Link>
                <Link href="mailto:hola@vmarket.hn" className="font-medium hover:text-[var(--vm-accent-lime)] transition-colors">hola@vmarket.hn</Link>
            </div>

        </div>

        {/* BOTTOM SECTION: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium opacity-60 border-t border-white/5 pt-8">
            <p>© 2026 V-Market Honduras. All rights reserved.</p>
            
            <div className="flex gap-8">
                <Link href="#" className="hover:text-white transition-colors">INSTAGRAM</Link>
                <Link href="#" className="hover:text-white transition-colors">FACEBOOK</Link>
                <Link href="#" className="hover:text-white transition-colors">WHATSAPP</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}
