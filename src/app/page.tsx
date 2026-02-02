import FeaturesBento from "@/components/FeaturesBento";
import MenuSplit from "@/components/MenuSplit";
import VRewardsSection from "@/components/VRewardsSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--vm-green-950)] text-[var(--vm-text-100)] selection:bg-[var(--vm-accent-lime)] selection:text-[var(--vm-green-950)]">
      
      {/* 1. HERO SECTION (With Cinematic Background) */}
      <Hero />

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

      {/* 4. FOOD SECTION */}
      <MenuSplit />

      {/* 5. REWARDS SECTION */}
      <VRewardsSection />

      {/* 6. FOOTER SIMPLE (Placeholder) */}
      <footer className="vm-section--gold py-12 mt-0">
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
