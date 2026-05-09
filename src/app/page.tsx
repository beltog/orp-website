import Header from "@/components/Header";

const SERVICES = [
  { id: "immobilier", title: "Immobilier", desc: "Photos professionnelles qui vendent vos biens.", href: "/galleries/immobilier", image: "/images/gallery-immo-1.jpg" },
  { id: "architecture", title: "Architecture", desc: "Mise en lumière des lignes et des volumes.", href: "/galleries/interieurs-architecture", image: "/images/gallery-archi-2.jpg" },
  { id: "mariages", title: "Mariages", desc: "Galeries privées pour chaque couple.", href: "/galleries/mariages", image: "/images/gallery-mariage-2.jpg" },
  { id: "fine-art", title: "Fine Art", desc: "Tirages limités sur Hahnemühle.", href: "/fine-art", image: "/images/gallery-paysage-1.jpg" },
];

const TESTIMONIALS = [
  { name: "Agence Lambert", text: "Olivier transforme chaque bien en histoire. Nos ventes ont accéléré depuis qu'il shoot nos listings.", role: "Agent immobilier" },
  { name: "Marie & Thomas", text: "Des photos magnifiques et une galerie privée où nos proches ont pu revivre notre journée.", role: "Mariage — Juin 2025" },
  { name: "Atelier Moreau", text: "Il comprend l'architecture avant de la photographier. Chaque image raconte notre projet.", role: "Cabinet d'architecture" },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Header />

      {/* Hero — Full bleed image, minimal overlay, left-aligned text */}
      <section className="relative h-screen flex items-end overflow-hidden" style={{ paddingBottom: "12vh" }}>
        {/* Background image — NO heavy overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-architecture.jpg')" }}
        />
        {/* Gradient only on bottom third for text readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.9) 100%)" }} />

        <div className="relative z-10 px-6 md:px-16 max-w-[800px]">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 animate-fade-in stagger-1" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
            Photographe · Seine-et-Marne
          </p>
          <h1 className="mb-6 animate-fade-in-up stagger-2" style={{ fontFamily: "var(--serif)", lineHeight: "0.95" }}>
            Olivier<br />Reynes
          </h1>
          <p className="text-sm mb-8 tracking-[0.15em] uppercase animate-fade-in stagger-3" style={{ fontFamily: "var(--mono)", color: "var(--text-dim)", fontSize: "0.7rem" }}>
            Immobilier · Architecture · Mariages
          </p>
          <div className="flex gap-4 animate-fade-in stagger-4">
            <a href="/galleries" className="btn-gold">Voir les galeries</a>
            <a href="/contact" className="btn-outline">Demander un devis</a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-6 md:right-16 flex items-center gap-2 animate-fade-in stagger-6" style={{ color: "var(--text-faint)" }}>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--mono)" }}>Scroll</span>
          <div className="w-4 h-6 border border-[var(--text-faint)] rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* Services — asymmetric, image-led */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
              Expertise
            </p>
            <h2>Services</h2>
          </div>
          <div className="divider-gold-left mt-4 md:mt-0 md:hidden" />
          <p className="hidden md:block text-sm max-w-[300px]" style={{ color: "var(--text-dim)" }}>
            Chaque projet mérite un regard unique. De la prise de vue à la livraison, une attention méticuleuse au détail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <a key={service.id} href={service.href} className="gallery-item group block overflow-hidden" style={{ borderRadius: "2px" }}>
              <div className="aspect-[4/5] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="mb-1" style={{ fontSize: "1.1rem" }}>{service.title}</h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "var(--text-dim)" }}>{service.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials — editorial, left-aligned */}
      <section className="py-24 px-6 md:px-16" style={{ background: "var(--bg-card)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
              Confiance
            </p>
            <h2>Témoignages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass p-8" style={{ borderRadius: "2px" }}>
                <div className="mb-6" style={{ color: "var(--gold)", fontSize: "2rem", fontFamily: "var(--serif)", lineHeight: 1 }}>&ldquo;</div>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-dim)" }}>{t.text}</p>
                <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                  <p className="text-sm" style={{ fontFamily: "var(--serif)", color: "var(--gold)" }}>{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-faint)", fontFamily: "var(--mono)", fontSize: "0.65rem" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — bold and simple */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="mb-6" style={{ fontFamily: "var(--serif)" }}>Un projet en tête ?</h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Immobilier, architecture, mariage ou tirage d'art — discutons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-gold">Demander un devis</a>
            <a href="/galleries" className="btn-outline">Voir les galeries</a>
          </div>
        </div>
      </section>
    </main>
  );
}