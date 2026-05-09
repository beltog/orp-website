import Header from "@/components/Header";

export const metadata = {
  title: "À propos — Olivier Reynes Photography",
  description: "Photographe professionnel basé en Seine-et-Marne. Lauréat Concours PHOTO 2013, Phototrend 2017, Compétence Photo 2024.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Portrait */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <div className="w-full h-full flex items-center justify-center opacity-20">
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: "0.7rem" }}>
                Portrait
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h1
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Olivier Reynes
            </h1>
            <div
              className="mb-8"
              style={{ width: "40px", height: "2px", background: "var(--accent-gold)" }}
            />

            <p className="mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Photographe professionnel basé à Champagne-sur-Seine en Seine-et-Marne, je capture la lumière dans les espaces — qu&apos;ils soient immobiliers, architecturaux, ou le jour d&apos;un mariage.
            </p>

            <p className="mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Lauréat du Concours PHOTO 2013, du concours Phototrend 2017, et du Concours Compétence Photo 2024, je mets mon œil et mon expérience au service de vos projets : photos immobilières, reportages d&apos;architecture, séances drone, homestaging virtuel, et couverture de mariages.
            </p>

            <p className="mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Chaque projet est unique. Discutons du vôtre.
            </p>

            {/* Awards */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Concours PHOTO 2013", "Phototrend 2017", "Compétence Photo 2024"].map((award) => (
                <span
                  key={award}
                  className="px-3 py-1 text-xs tracking-[0.1em] uppercase"
                  style={{
                    fontFamily: "var(--font-mono)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--accent-gold)",
                    borderRadius: "2px",
                  }}
                >
                  ✦ {award}
                </span>
              ))}
            </div>

            <a href="/contact" className="btn-gold">
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}