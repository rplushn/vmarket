import FeaturesBento from "@/components/FeaturesBento";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--vm-green-950)] text-[var(--vm-text-100)] selection:bg-[var(--vm-accent-lime)] selection:text-[var(--vm-green-950)]">
      
      {/* 1. HERO SECTION */}
      <section className="vm-section min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vm-green-950)] via-[var(--vm-green-900)] to-[var(--vm-green-950)] opacity-80 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--vm-accent-lime)] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none" />

        <div className="vm-container relative z-10">
          <span className="inline-block py-1 px-3 rounded-full border border-[var(--vm-border)] bg-[var(--vm-surface)] text-[var(--vm-accent-lime)] text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
            Ciudad Venecia
          </span>
          
          <h1 className="vm-h1 max-w-5xl mx-auto mb-8 leading-tight">
            Tu mercado,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--vm-text-300)]">
              a un paso de casa.
            </span>
          </h1>
          
          <p className="vm-p max-w-xl mx-auto mb-12 text-lg md:text-xl">
            Canasta básica, comida típica y servicios del día a día. <br className="hidden md:block" />
            Siempre cerca. Siempre abierto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[var(--vm-text-100)] text-[var(--vm-green-950)] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[var(--vm-shadow)] transition-all duration-300 w-full sm:w-auto">
              Pedir por WhatsApp
            </button>
            <button className="group flex items-center gap-2 border border-[var(--vm-border)] text-[var(--vm-text-100)] px-8 py-4 rounded-full font-medium text-lg hover:bg-[var(--vm-surface)] transition-all duration-300 w-full sm:w-auto">
              <span>Ver Ubicaciones</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. MANIFESTO (Text-heavy editorial section) */}
      <section className="vm-section bg-[var(--vm-green-950)] py-20 border-t border-[var(--vm-border)]">
        <div className="vm-container--narrow text-center">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[var(--vm-text-100)]">
            "V-Market nace para resolver un problema simple: <span className="text-[var(--vm-accent-gold)]">nadie debería manejar 20 minutos</span> solo para comprar leche o pan."
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
             <div className="h-px w-12 bg-[var(--vm-border)]"></div>
             <p className="text-sm text-[var(--vm-text-500)] uppercase tracking-widest">El Mercado del Vecino</p>
             <div className="h-px w-12 bg-[var(--vm-border)]"></div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID FEATURES */}
      <FeaturesBento />

      {/* 4. FOOTER SIMPLE (Placeholder) */}
      <footer className="vm-section--gold py-12 mt-20">
        <div className="vm-container text-center">
          <h3 className="text-[var(--vm-green-950)] font-bold text-2xl mb-4">V-MARKET</h3>
          <p className="text-[var(--vm-green-950)] opacity-80 mb-8">
            Nacida en Ciudad Venecia.
          </p>
          <div className="flex justify-center gap-6 text-[var(--vm-green-950)] font-medium text-sm uppercase tracking-wide">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">WhatsApp</a>
          </div>
          <div className="mt-12 text-xs text-[var(--vm-green-950)] opacity-60">
            © 2026 V-Market Honduras. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
