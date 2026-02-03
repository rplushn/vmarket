import React from 'react';
import Image from 'next/image';

export default function MenuSplit() {
  return (
    <section className="vm-section bg-[var(--vm-green-950)] py-24">
      <div className="vm-container">
        
        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Image (Visual Anchor) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[var(--vm-radius-xl)] overflow-hidden relative shadow-2xl group">
               {/* Real Food Image */}
               <Image 
                 src="/comida.jpg" 
                 alt="Hamburguesa Clásica V-Market"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Overlay Content */}
               <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[var(--vm-green-950)] to-transparent">
                  <span className="inline-block px-3 py-1 bg-[var(--vm-accent-lime)] text-[var(--vm-green-950)] text-xs font-bold rounded-full mb-2">
                    Desayunos hasta 11:30 AM
                  </span>
                  <p className="text-white font-medium">Sabor que te encanta</p>
               </div>
            </div>
            
            {/* Decor element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-[var(--vm-border)] rounded-[var(--vm-radius-xl)] hidden lg:block" />
          </div>

          {/* Right: Content & Menu */}
          <div className="w-full lg:w-1/2">
            <span className="text-[var(--vm-accent-lime)] font-medium tracking-widest uppercase text-sm mb-3 block">
              Comida & Café
            </span>
            <h2 className="vm-h2 mb-6">
              Sazón casero,<br/>
              <span className="text-[var(--vm-text-300)]">sin cocinar en casa.</span>
            </h2>
            <p className="vm-p mb-10">
              Desayunos típicos, almuerzos caseros y el mejor café de la zona. Todo preparado al momento con ingredientes frescos.
            </p>

            {/* Menu Highlights List */}\n            <div className="space-y-6">
              
              {/* Item 1 */}
              <div className="flex justify-between items-start group border-b border-[var(--vm-border)] pb-4">
                <div>
                  <h4 className="text-[var(--vm-text-100)] font-bold text-lg group-hover:text-[var(--vm-accent-lime)] transition-colors">
                    Hamburguesa Clásica
                  </h4>
                  <p className="text-[var(--vm-text-500)] text-sm mt-1">Carne de res, lechuga, tomate, cebolla y aderezo especial.</p>
                </div>
                <span className="text-[var(--vm-accent-gold)] font-bold">L85</span>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-start group border-b border-[var(--vm-border)] pb-4">
                <div>
                  <h4 className="text-[var(--vm-text-100)] font-bold text-lg group-hover:text-[var(--vm-accent-lime)] transition-colors">
                    Desayuno Típico
                  </h4>
                  <p className="text-[var(--vm-text-500)] text-sm mt-1">Huevos al gusto, plátano, frijoles, queso y tortillas.</p>
                </div>
                <span className="text-[var(--vm-accent-gold)] font-bold">L60</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-start group border-b border-[var(--vm-border)] pb-4">
                <div>
                  <h4 className="text-[var(--vm-text-100)] font-bold text-lg group-hover:text-[var(--vm-accent-lime)] transition-colors">
                    Cappuccino V-Caffé
                  </h4>
                  <p className="text-[var(--vm-text-500)] text-sm mt-1">Grano de altura hondureño, leche espumada.</p>
                </div>
                <span className="text-[var(--vm-accent-gold)] font-bold">L35</span>
              </div>

            </div>

            <div className="mt-10">
              <button className="text-[var(--vm-text-100)] border-b border-[var(--vm-accent-lime)] pb-1 hover:text-[var(--vm-accent-lime)] transition-colors text-sm uppercase tracking-widest font-bold">
                Ver Menú Completo →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
