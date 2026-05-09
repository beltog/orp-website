import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidéos — Olivier Reynes Photography",
  description: "Vidéos de présentation immobilière, architecture et créations IA par Olivier Reynes.",
};

const CATEGORIES = [
  { id: "immobilier", title: "Immobilier", desc: "Visites virtuelles et présentations de biens", icon: "🏠" },
  { id: "architecture", title: "Architecture", desc: "Mise en valeur d'espaces architecturaux", icon: "🏛️" },
  { id: "ia", title: "Créations IA", desc: "Expérimentations visuelles avec l'intelligence artificielle", icon: "✨" },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            En mouvement
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Vidéos
          </h1>
          <div className="mx-auto mt-6 mb-8" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass p-8 text-center group cursor-pointer" style={{ borderRadius: "2px" }}>
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h2 className="mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{cat.title}</h2>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{cat.desc}</p>
              <p className="mt-6 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--accent-gold)" }}>Bientôt disponible</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 text-center">
        <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          Vous avez besoin d&apos;une vidéo immobilière ou architecturale ?
        </p>
        <a href="/contact" className="btn-gold">Demander un devis</a>
      </section>
    </main>
  );
}