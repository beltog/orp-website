import Header from "@/components/Header";

const SERVICES = [
  {
    id: "immobilier",
    title: "Immobilier",
    desc: "Photos professionnelles qui vendent vos biens. Intérieurs, extérieurs, vues aériennes par drone.",
    icon: "🏠",
    href: "/galleries/immobilier",
    image: "/images/gallery-immo-1.jpg",
  },
  {
    id: "architecture",
    title: "Architecture",
    desc: "Mise en lumière des lignes, des volumes et des matériaux. Pour architectes et promoteurs.",
    icon: "🏛️",
    href: "/galleries/interieurs-architecture",
    image: "/images/gallery-archi-2.jpg",
  },
  {
    id: "mariages",
    title: "Mariages",
    desc: "Galeries privées et sécurisées pour chaque couple. Discrétion et émotion.",
    icon: "💍",
    href: "/galleries/mariages",
    image: "/images/gallery-mariage-2.jpg",
  },
  {
    id: "fine-art",
    title: "Fine Art",
    desc: "Tirages d'art limités sur papier Hahnemühle. Édités, signés, numérotés.",
    icon: "🖼️",
    href: "/fine-art",
    image: "/images/gallery-paysage-1.jpg",
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

const STATS = [
  { value: "12+", label: "Années d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "48h", label: "Délai de livraison" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero — Full screen with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-architecture.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)" }} />
        {/* Gold gradient accent */}
        <div className="absolute inset-0 hero-gradient" style={{ opacity: 0.5 }} />

        <div className="relative z-10 text-center px-6 hero-text-reveal">
          <p className="text-xs tracking-[0.5em] uppercase mb-6 animate-fade-in stagger-1" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            Photographe professionnel
          </p>
          <h1 className="mb-6 animate-fade-in-up stagger-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1.05" }}>
            Olivier Reynes
          </h1>
          <p className="text-sm md:text-base mb-4 tracking-[0.3em] uppercase animate-fade-in stagger-3" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", opacity: 0.8 }}>
            Immobilier · Architecture · Mariages
          </p>
          <div className="mx-auto mb-10 animate-fade-in stagger-4" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
          <a href="/galleries" className="btn-gold animate-fade-in stagger-5">
            Voir mes réalisations
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in stagger-6">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            Scroll
          </span>
          <div className="w-5 h-8 border border-[var(--glass-border)] rounded-full flex justify-center">
            <div className="w-1 h-2 rounded-full mt-1" style={{ backgroundColor: "var(--accent-gold)", animation: "goldPulse 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>{stat.value}</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services with images */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>Expertise</p>
          <h2 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Services</h2>
          <div className="divider-gold mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <a key={service.id} href={service.href} className="gallery-item group block aspect-[4/3] rounded-sm overflow-hidden relative" style={{ backgroundColor: "var(--bg-secondary)" }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <span className="text-3xl mb-3">{service.icon}</span>
                <h3 className="mb-2 text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{service.title}</h3>
                <p className="text-xs leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "var(--accent-gold)" }}>Découvrir →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>Confiance</p>
            <h2 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Témoignages</h2>
            <div className="divider-gold mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass card-hover p-8" style={{ borderRadius: "2px" }}>
                <svg className="mb-6" width="32" height="20" viewBox="0 0 32 20" fill="none">
                  <path d="M0 20V12C0 5.373 5.373 0 12 0H14V5.333H12C8.318 5.333 5.333 8.318 5.333 12V20H0ZM18.667 20V12C18.667 5.373 24.039 0 30.667 0V5.333C27.463 5.333 24.889 7.907 24 10.667V20H18.667Z" fill="var(--accent-gold)" fillOpacity="0.25" />
                </svg>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.text}</p>
                <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "1rem" }}>
                  <p className="text-sm" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(255,202,0,0.03) 0%, transparent 60%)" }} />
        <div className="relative max-w-[600px] mx-auto">
          <div className="divider-gold mb-10" />
          <h2 className="mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Un projet en tête ?</h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Immobilier, architecture, mariage ou tirage d'art — chaque projet mérite un regard professionnel. Discutons-en.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-gold">Demander un devis</a>
            <a href="/galleries" className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-transparent hover:border-[var(--glass-border)] transition-all duration-300" style={{ color: "var(--text-muted)" }}>
              Voir les galeries
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}