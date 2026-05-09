import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "À propos — Olivier Reynes Photography",
  description: "Photographe professionnel basé en Seine-et-Marne, spécialisé en immobilier, architecture et mariages.",
};

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Header />

      {/* About — split layout, image-led */}
      <section className="pt-32 pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden" style={{ borderRadius: "2px" }}>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/about-portrait.jpg')" }} />
            </div>
            {/* Gold accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24" style={{ borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", opacity: 0.4 }} />
          </div>

          {/* Text */}
          <div className="lg:pt-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
              L'artiste
            </p>
            <h2 className="mb-6">Olivier Reynes</h2>
            <div className="divider-gold-left mb-8" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>
              Photographe professionnel depuis plus de 12 ans, je capture l'essence de chaque sujet avec un regard unique et une attention méticuleuse au détail.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>
              Spécialisé dans la photographie immobilière et d'architecture, je transforme chaque espace en une histoire visuelle qui captive et vend. Mon approche combine technique de pointe et sensibilité artistique pour révéler la lumière là où elle se cache.
            </p>
            <p className="text-sm leading-relaxed mb-12" style={{ color: "var(--text-dim)" }}>
              Basé à Champagne-sur-Seine en Seine-et-Marne, je couvre l'Île-de-France et au-delà.
            </p>

            {/* Skills */}
            <div className="mb-12">
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
                Spécialisations
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {["Photographie immobilière", "Architecture intérieure", "Mariages & événements", "Portraits & lifestyle", "Vidéo immobilière", "Tirages Fine Art"].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 py-1">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                    <span className="text-xs" style={{ color: "var(--text-dim)" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/contact" className="btn-gold">Me contacter</a>
          </div>
        </div>
      </section>
    </main>
  );
}