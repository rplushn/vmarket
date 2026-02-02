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
      <div className="z-10 relative flex-1">
        {children}
      </div>
      {/* Decorative gradient blob - Fixed size to prevent overflow */}
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

        {/* Bento Grid Layout - Grid rows control fixed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Comida (Span 2 cols) */}
          <BentoCard 
            title="Sabor Catracho Real" 
            subtitle="Baleadas, desayunos y almuerzos hechos al momento."
            className="md:col-span-2 min-h-[300px]"
          >
            <div className="mt-4 relative z-20">
               <p className="vm-p max-w-md mb-6 text-sm md:text-base">
                 Olvídate de la comida rápida industrial. Aquí cocinamos con cariño, ingredientes frescos y ese sazón casero que te encanta.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[var(--vm-text-300)] text-sm">
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)] shrink-0" /> Baleadas recién hechas
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)] shrink-0" /> Café de palo premium
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--vm-accent-lime)] shrink-0" /> Almuerzos caseros
                 </li>
               </ul>
            </div>
            {/* Gradient Overlay instead of layout breaking div */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--vm-green-900)] to-transparent opacity-50 rounded-r-[var(--vm-radius-lg)]" />
          </BentoCard>

          {/* Card 2: Locker 24/7 (Tall) - Fixed SVG size */}
          <BentoCard 
            title="Locker 24/7" 
            subtitle="Tu pedido listo, incluso de madrugada."
            className="md:row-span-2 bg-[var(--vm-green-900)] min-h-[400px]"
          >
             <p className="vm-p text-sm mb-8">
               ¿Emergencia a las 2 AM? Pide por WhatsApp y recoge en nuestro locker inteligente con tu código QR.
             </p>
             
             {/* Centered Icon Container with STRICT dimensions */}
             <div className="mt-auto mx-auto w-32 h-32 bg-[var(--vm-surface)] rounded-2xl border border-[var(--vm-border)] border-dashed flex justify-center items-center">
                {/* SVG with strict w-12 h-12 classes */}
                <svg className="w-12 h-12 text-[var(--vm-accent-lime)] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4h8v-4m-4-8L3 14v7h18v-7L10 3z" />
                </svg>
             </div>
          </BentoCard>

          {/* Card 3: Hiperlocal */}
          <BentoCard 
            title="Comunidad" 
            subtitle="Apoyando al emprendedor local."
            className="min-h-[200px]"
          >
            <p className="vm-p text-sm">
              Encuentra productos de tus propios vecinos: mermeladas, repostería y artesanías.
            </p>
          </BentoCard>

          {/* Card 4: Tech/Rewards */}
          <BentoCard 
            title="V-Rewards" 
            subtitle="Gana puntos sin complicaciones."
            className="min-h-[200px]"
          >
             <div className="flex items-center gap-4 mt-4">
               <div className="text-4xl font-bold text-[var(--vm-accent-gold)]">1 pto</div>
               <div className="text-xs text-[var(--vm-text-500)] uppercase tracking-wider leading-tight">por cada L10<br/>de compra</div>
             </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
