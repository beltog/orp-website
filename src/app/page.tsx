import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero — Full-screen with Lumen Reveal */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background placeholder — sera remplacé par slideshow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,202,0,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1
            className="mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Olivier Reynes
          </h1>
          <p
            className="text-lg mb-8 tracking-[0.15em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              fontSize: "0.75rem",
            }}
          >
            Photographe — Immobilier · Architecture · Mariages
          </p>

          {/* Lumen bar decorative */}
          <div
            className="mx-auto mb-8"
            style={{
              width: "60px",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
            }}
          />

          <a href="/galleries" className="btn-gold">
            Voir mes réalisations
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: "var(--text-muted)" }}
        >
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path
              d="M8 4L8 20M8 20L14 14M8 20L2 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Galeries preview section */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <h2
          className="text-center mb-16"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Galeries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder gallery cards — sera dynamique */}
          {[
            { title: "Intérieurs — Architecture", slug: "interieurs-architecture" },
            { title: "Mariages", slug: "mariages" },
            { title: "Immobilier", slug: "immobilier" },
          ].map((gallery) => (
            <a
              key={gallery.slug}
              href={`/galleries/${gallery.slug}`}
              className="gallery-item group block aspect-[4/3] rounded-sm overflow-hidden"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="absolute inset-0 flex items-end p-6 z-10">
                <span
                  className="text-sm tracking-[0.15em] uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--accent-gold)",
                    opacity: 0,
                    transitionDelay: "0.1s",
                  }}
                >
                  {gallery.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 text-center"
        style={{ borderTop: "1px solid var(--glass-border)" }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          Olivier Reynes Photography
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          9B, rue du Docteur Mourier — 77430 Champagne-sur-Seine
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/olivier_reynes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@olivierreynes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            YouTube
          </a>
        </div>
      </footer>
    </main>
  );
}