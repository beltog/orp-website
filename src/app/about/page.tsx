import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "À propos — Olivier Reynes Photography",
  description: "Photographe professionnel basé en Seine-et-Marne, spécialisé en immobilier, architecture et mariages.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
              L'artiste
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
              À propos
            </h1>
            <div className="divider-gold mt-6" />
          </div>

          {/* Portrait + Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="relative">
              <div
                className="aspect-[3/4] overflow-hidden"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                {/* Placeholder — will be replaced with real photo */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/about-portrait.jpg')" }}>
                  <div className="text-center">
                  </div>
                </div>
              </div>
              {/* Gold accent line */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20" style={{ borderRight: "2px solid var(--accent-gold)", borderBottom: "2px solid var(--accent-gold)", opacity: 0.3 }} />
            </div>

            {/* Bio */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  Olivier Reynes
                </h2>
                <div className="divider-gold-left mb-6" style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, var(--accent-gold), transparent)" }} />
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  Photographe professionnel depuis plus de 12 ans, je capture l'essence de chaque sujet avec un regard unique et une attention méticuleuse au détail.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  Spécialisé dans la photographie immobilière et d'architecture, je transforme chaque espace en une histoire visuelle qui captive et vend. Mon approche combine technique de pointe et sensibilité artistique pour révéler la lumière là où elle se cache.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Basé à Champagne-sur-Seine en Seine-et-Marne, je couvre l'Île-de-France et au-delà. Chaque projet est unique et mérite une attention personnalisée.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                  Spécialisations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Photographie immobilière",
                    "Architecture intérieure",
                    "Mariages & événements",
                    "Portraits & lifestyle",
                    "Vidéo immobilière",
                    "Tirages Fine Art",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--accent-gold)" }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                  Matériel
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Sony Alpha", "DJI Drone", "Flash Godox", "Tilt-Shift", "Trépied"].map((eq) => (
                    <span
                      key={eq}
                      className="text-[0.65rem] tracking-wider uppercase px-3 py-1"
                      style={{ border: "1px solid var(--glass-border)", color: "var(--text-muted)" }}
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="divider-gold mb-10" />
          <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Travaillons ensemble
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Chaque projet est unique. Parlons du vôtre.
          </p>
          <a href="/contact" className="btn-gold">
            Me contacter
          </a>
        </div>
      </section>
    </main>
  );
}