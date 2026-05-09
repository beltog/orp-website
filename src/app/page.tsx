import Header from "@/components/Header";

const SERVICES = [
  {
    id: "immobilier",
    title: "Immobilier",
    desc: "Photos professionnelles qui vendent vos biens. Intérieurs, extérieurs, vues aériennes par drone.",
    icon: "🏠",
  },
  {
    id: "architecture",
    title: "Architecture",
    desc: "Mise en lumière des lignes, des volumes et des matériaux. Pour architectes et promoteurs.",
    icon: "🏛️",
  },
  {
    id: "mariages",
    title: "Mariages",
    desc: "Galeries privées et sécurisées pour chaque couple. Discrétion et émotion.",
    icon: "💍",
  },
  {
    id: "fine-art",
    title: "Fine Art",
    desc: "Tirages d'art limités sur papier Hahnemühle. Édités, signés, numérotés.",
    icon: "🖼️",
  },
];

const TESTIMONIALS = [
  {
    name: "Agence Lambert",
    text: "Olivier transforme chaque bien en histoire. Nos ventes ont accéléré depuis qu'il shoot nos listings.",
    role: "Agent immobilier",
  },
  {
    name: "Marie & Thomas",
    text: "Des photos magnifiques et une galerie privée où nos proches ont pu revivre notre journée. Merci Olivier !",
    role: "Mariage — Juin 2025",
  },
  {
    name: "Atelier Moreau",
    text: "Il comprend l'architecture avant de la photographier. Chaque image raconte notre projet.",
    role: "Cabinet d'architecture",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero — Full-screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,202,0,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1
            className="mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Olivier Reynes
          </h1>
          <p
            className="text-lg mb-8 tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.75rem" }}
          >
            Photographe — Immobilier · Architecture · Mariages
          </p>
          <div
            className="mx-auto mb-8"
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
            }}
          />
          <a href="/galleries" className="btn-gold">
            Voir mes réalisations
          </a>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4L8 20M8 20L14 14M8 20L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Services
        </h2>
        <p
          className="text-center mb-16 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          Ce que je fais de mieux
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.id === "fine-art" ? "/fine-art" : service.id === "mariages" ? "/galleries/mariages" : "/contact"}
              className="glass p-8 text-center group transition-all duration-500 hover:border-[var(--accent-gold)]"
              style={{ borderRadius: "2px" }}
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3
                className="mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {service.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Témoignages
          </h2>
          <p
            className="text-center mb-16 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            Ce qu'ils disent
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass p-8" style={{ borderRadius: "2px" }}>
                <svg
                  className="mb-4"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M0 16V10C0 4.477 4.477 0 10 0H12V4H10C7.239 4 5 6.239 5 9V16H0ZM14 16V10C14 4.477 18.477 0 24 0V4C21.239 4 19 6.239 19 9V16H14Z"
                    fill="var(--accent-gold)"
                    fillOpacity="0.3"
                  />
                </svg>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t.text}
                </p>
                <div>
                  <p className="text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2
            className="mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Un projet en tête ?
          </h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Immobilier, architecture, mariage ou tirage d'art — discutons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-gold">
              Demander un devis
            </a>
            <a href="/galleries" className="text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
              Voir les galeries
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}