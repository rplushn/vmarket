import React from 'react';

export default function VRewardsSection() {
  return (
    <section className="vm-section bg-[var(--vm-green-950)] py-20 border-t border-[var(--vm-border)] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--vm-green-900)] rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="vm-container relative z-10 text-center">
        
        <span className="text-[var(--vm-accent-gold)] font-medium tracking-widest uppercase text-sm mb-4 block">
          Programa de Lealtad
        </span>
        
        <h2 className="vm-h2 mb-6">
          Gana puntos<br />
          <span className="text-[var(--vm-text-300)]">sin complicaciones.</span>
        </h2>
        
        <p className="vm-p max-w-2xl mx-auto mb-16">
          Olvídate de tarjetas plásticas o apps complicadas. Regístrate con tu número de teléfono y acumula puntos automáticamente en cada visita.
        </p>

        {/* Rewards Steps / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-[var(--vm-surface)] border border-[var(--vm-border)] rounded-[var(--vm-radius-lg)] p-8 hover:bg-[var(--vm-surface-2)] transition-colors group">
            <div className="w-12 h-12 bg-[var(--vm-green-900)] rounded-full flex items-center justify-center text-[var(--vm-accent-lime)] font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Regístrate</h3>
            <p className="vm-muted text-sm">
              Solo necesitas tu número de celular. Sin formularios largos ni apps obligatorias.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[var(--vm-surface)] border border-[var(--vm-border)] rounded-[var(--vm-radius-lg)] p-8 hover:bg-[var(--vm-surface-2)] transition-colors group relative">
            <div className="w-12 h-12 bg-[var(--vm-green-900)] rounded-full flex items-center justify-center text-[var(--vm-accent-lime)] font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Acumula</h3>
            <p className="vm-muted text-sm">
              Gana <span className="text-[var(--vm-accent-gold)]">1 punto</span> por cada L10 de compra. Presenta tu número en caja y listo.
            </p>
             {/* Decor line connecting steps (hidden on mobile) */}
             <div className="hidden md:block absolute top-14 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--vm-border)] to-transparent -z-10" />
          </div>

          {/* Step 3 */}
          <div className="bg-[var(--vm-surface)] border border-[var(--vm-border)] rounded-[var(--vm-radius-lg)] p-8 hover:bg-[var(--vm-surface-2)] transition-colors group">
            <div className="w-12 h-12 bg-[var(--vm-green-900)] rounded-full flex items-center justify-center text-[var(--vm-accent-lime)] font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Canjea</h3>
            <p className="vm-muted text-sm">
              100 puntos = <span className="text-[var(--vm-accent-gold)]">L10 de crédito</span>. Úsalos para pagar tu café, baleada o lo que quieras.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="inline-flex items-center gap-2 bg-[var(--vm-surface)] hover:bg-[var(--vm-green-900)] border border-[var(--vm-accent-gold)] text-[var(--vm-accent-gold)] px-8 py-3 rounded-full font-bold transition-all duration-300">
            <span>Unirme a V-Rewards</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-[var(--vm-text-500)] text-xs mt-4">
            *Términos y condiciones aplican. Programa válido en todas las sucursales V-Market.
          </p>
        </div>

      </div>
    </section>
  );
}
