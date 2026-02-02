export default function Page() {
    return (
      <main>
        <section className="vm-section-dark py-20">
          <div className="vm-container">
            <div className="vm-chip mb-6">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--vm-accent-lime)" }}
              />
              Design System V-Market
            </div>
  
            <h1 className="vm-h1">V-Market</h1>
            <p className="vm-p mt-4 max-w-2xl">
              Verde oscuro predominante, alternancia con segundo verde, y footer
              beige/dorado premium. Tipografía fuerte + cards con borde suave.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="vm-btn vm-btn-primary">CTA Primario</button>
              <button className="vm-btn vm-btn-secondary">CTA Secundario</button>
            </div>
  
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="vm-card p-6">
                <h2 className="vm-h2 text-xl">Cards</h2>
                <p className="vm-muted mt-2">
                  Bordes sutiles + superficie + sombra suave.
                </p>
              </div>
              <div className="vm-card-plain p-6">
                <h2 className="vm-h2 text-xl">Alternancia</h2>
                <p className="vm-muted mt-2">
                  Secciones alternas sin perder la base dark.
                </p>
              </div>
              <div className="vm-card p-6">
                <h2 className="vm-h2 text-xl">Consistencia</h2>
                <p className="vm-muted mt-2">
                  Tokens para escalar a 14 secciones y futuras páginas.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="vm-section-alt py-20">
          <div className="vm-container">
            <h2 className="vm-h2">Sección alterna (verde secundario)</h2>
            <p className="vm-p mt-4 max-w-2xl">
              Aquí se ve el contraste suave, sin convertirlo en “verde barato”.
            </p>
            <div className="mt-10 vm-divider" />
          </div>
        </section>
  
        <footer className="vm-footer-gold py-14">
          <div className="vm-container">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-extrabold tracking-tight">
                  V-Market
                </div>
                <div className="text-sm opacity-80">
                  Siempre cerca. Siempre abierto.
                </div>
              </div>
  
              <div className="text-sm opacity-80">
                © {new Date().getFullYear()} V-Market. Una franquicia nacida en
                Ciudad Venecia.
              </div>
            </div>
          </div>
        </footer>
      </main>
    );
  }
  