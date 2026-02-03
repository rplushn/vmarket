import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#EAE4D3] text-[var(--vm-green-950)] pt-24 pb-12 rounded-t-[3rem] mt-[-2rem] relative z-30">
      <div className="vm-container px-6">
        
        {/* TOP SECTION: Massive Logo & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24 border-b border-[var(--vm-green-950)]/10 pb-16">
            
            {/* Brand Identity */}
            <div className="max-w-md">
                <h2 className="text-[12vw] lg:text-[8rem] font-black leading-none tracking-tighter mb-6 select-none opacity-90">
                    V-MKT
                </h2>
                <p className="text-xl font-medium max-w-xs leading-relaxed opacity-80">
                    Tu mercado local, reinventado para la vida moderna. Calidad que conoces, comodidad que mereces.
                </p>
            </div>

            {/* Newsletter Minimal */}
            <div className="w-full max-w-md lg:pt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Mantente al día</h3>
                <div className="flex gap-0 border-b-2 border-[var(--vm-green-950)] pb-2">
                    <input 
                        type="email" 
                        placeholder="tu@correo.com" 
                        className="bg-transparent w-full outline-none placeholder-[var(--vm-green-950)]/40 text-lg font-medium"
                    />
                    <button className="text-lg font-bold hover:opacity-60 transition-opacity">
                        →
                    </button>
                </div>
            </div>
        </div>

        {/* MIDDLE SECTION: Clean Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2">Comprar</h4>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Canasta Básica</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Lácteos & Quesos</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Frutas & Verduras</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Panadería</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2">Servicios</h4>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Envíos a Domicilio</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Pick-up Express</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Pedidos Empresariales</Link>
            </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2">Empresa</h4>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Nuestra Historia</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Bolsa de Trabajo</Link>
                <Link href="#" className="hover:underline decoration-1 underline-offset-4">Sostenibilidad</Link>
            </div>

            {/* Column 4: Contact Minimal */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold mb-2">Contacto</h4>
                <p className="opacity-80">Ciudad Venecia,<br/>Tegucigalpa, HN</p>
                <Link href="tel:+50499999999" className="font-medium hover:opacity-70">+504 9999-9999</Link>
                <Link href="mailto:hola@vmarket.hn" className="font-medium hover:opacity-70">hola@vmarket.hn</Link>
            </div>

        </div>

        {/* BOTTOM SECTION: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium opacity-60">
            <p>© 2026 V-Market Honduras. All rights reserved.</p>
            
            <div className="flex gap-8">
                <Link href="#" className="hover:text-black transition-colors">INSTAGRAM</Link>
                <Link href="#" className="hover:text-black transition-colors">FACEBOOK</Link>
                <Link href="#" className="hover:text-black transition-colors">WHATSAPP</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}
