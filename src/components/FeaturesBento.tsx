import React from 'react';

// Reusable Card Component internal to this section
const BentoCard = ({ 
  children, 
  className = "", 
  title,
  subtitle 
}: { 
  children: React.ReactNode; 
  className?: string;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className={`
      relative overflow-hidden 
      bg-[var(--vm-surface)] 
      border border-[var(--vm-border)] 
      rounded-[var(--vm-radius-lg)] 
      p-8 hover:bg-[var(--vm-surface-2)] 
      transition-colors duration-300
      flex flex-col
      ${className}
    `}>
      <div className="mb-4 z-10 relative">
        <h3 className="vm-h3 mb-2 text-white">{title}</h3>
        {subtitle && <p className="vm-muted text-sm">{subtitle}</p>}
      </div>
      <div className="z-10 relative">
        {children}
      </div>
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--vm-green-900)] rounded-full blur-3xl opacity-20 pointer-events-none" />
    </div>
  );
};

export default function FeaturesBento() {
  return (
    <section className="vm-section bg-[var(--vm-green-950)]">
      <div className="vm-container">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <span className="text-[var(--vm-accent-lime)] font-medium tracking-widest uppercase text-sm mb-3 block">
            Propuesta de Valor
          </span>
          <h2 className="vm-h2 mb-6">
            Más que una tienda,<br />
            <span className="text-[var(--vm-text-300)]">es tu mercado vecino.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: Comida (Span 2 cols) */}
          <BentoCard 
            title="Sabor Catracho Real" 
            subtitle="Baleadas, desayunos y almuerzos hechos al momento."
            className="md:col-span-2 relative group"
          >
            <div className="mt-4">
               <p className="vm-p max-w-md mb-6">
                 Olvídate de la comida rápida industrial. Aquí cocinamos con cariño, ingredientes frescos y ese sazón casero que te encanta.
               </p>
               <ul className="grid grid-cols-2 gap-2 text-[var(--vm-text-300)] text-sm">
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)]" /> Baleadas recién hechas
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)]" /> Café de palo premium
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)]" /> Almuerzos caseros
                 </li>
               </ul>
            </div>
            {/* Visual placeholder for food image */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-[var(--vm-green-900)] to-transparent opacity-50" />
          </BentoCard>

          {/* Card 2: Locker 24/7 (Tall) */}
          <BentoCard 
            title="Locker 24/7" 
            subtitle="Tu pedido listo, incluso de madrugada."
            className="md:row-span-2 bg-[var(--vm-green-900)]"
          >
             <p className="vm-p text-sm mb-6">
               ¿Emergencia a las 2 AM? Pide por WhatsApp y recoge en nuestro locker inteligente con tu código QR. Sin filas, sin esperas.
             </p>
             <div className="mt-auto flex justify-center items-center h-48 bg-[var(--vm-surface)] rounded-2xl border border-[var(--vm-border)] border-dashed">
                <svg className="w-12 h-12 text-[var(--vm-accent-lime)] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4h8v-4m-4-8L3 14v7h18v-7L10 3z" />
                </svg>
             </div>
          </BentoCard>

          {/* Card 3: Hiperlocal */}
          <BentoCard 
            title="Comunidad" 
            subtitle="Apoyando al emprendedor local."
          >
            <p className="vm-p text-sm">
              Encuentra productos de tus propios vecinos: mermeladas, repostería y artesanías de Ciudad Venecia.
            </p>
          </BentoCard>

          {/* Card 4: Tech/Rewards */}
          <BentoCard 
            title="V-Rewards" 
            subtitle="Gana puntos sin complicaciones."
          >
             <div className="flex items-center gap-4 mt-2">
               <div className="text-3xl font-bold text-[var(--vm-accent-gold)]">1 pto</div>
               <div className="text-sm text-[var(--vm-text-500)]">por cada L10<br/>de compra</div>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
