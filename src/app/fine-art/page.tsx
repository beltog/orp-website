import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirages Fine Art — Olivier Reynes Photography",
  description: "Tirages d'art limités, édités et signés par Olivier Reynes. Papier Hahnemühle, certificat d'authenticité inclus.",
};

const PRINTS = [
  { id: "paysage-seine", title: "Seine au crépuscule", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15" },
  { id: "architecture-verriere", title: "Verrière industrielle", category: "Architecture", price: 220, size: "50×70 cm", edition: "1/10" },
  { id: "foret-brume", title: "Forêt dans la brume", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15" },
  { id: "pont-romantique", title: "Pont romantique", category: "Paysage", price: 200, size: "50×70 cm", edition: "1/12" },
  { id: "escalier-spirale", title: "Escalier spiral", category: "Architecture", price: 240, size: "50×70 cm", edition: "1/10" },
  { id: "reflets-eau", title: "Reflets sur l'eau", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15" },
];

export default function FineArtPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            Éditions limitées
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Tirages Fine Art
          </h1>
          <div className="mx-auto mt-6 mb-8" style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
          <p className="max-w-[600px] mx-auto text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Chaque tirage est produit sur papier Hahnemühle Photo Rag 308g, édité en série limitée, numéroté et signé. Un certificat d&apos;authenticité accompagne chaque œuvre.
          </p>
        </div>
      </section>

      {/* Prints grid */}
      <section className="px-6 pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINTS.map((print) => (
            <div key={print.id} className="group relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
              {/* Placeholder — real images will come from Cloudinary */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,202,0,0.03)" }}>
                <span className="text-6xl" style={{ color: "var(--glass-border)", fontFamily: "var(--font-display)" }}>OR</span>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--accent-gold)" }}>{print.category}</p>
                <h3 className="mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{print.title}</h3>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-lg" style={{ color: "var(--accent-gold)" }}>{print.price} €</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{print.size} · Édition {print.edition}</span>
                </div>
                <button className="mt-4 btn-gold text-xs w-fit">Commander ce tirage</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="px-6 pb-24 max-w-[800px] mx-auto">
        <div className="glass p-8" style={{ borderRadius: "2px" }}>
          <h2 className="text-center mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Comment commander
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { step: "01", title: "Choisissez", desc: "Sélectionnez votre tirage et la taille souhaitée" },
              { step: "02", title: "Payez", desc: "Paiement sécurisé par CB, PayPal, Apple Pay ou Google Pay" },
              { step: "03", title: "Recevez", desc: "Expédition soignée sous 7 jours avec certificat d'authenticité" },
            ].map((s) => (
              <div key={s.step}>
                <span className="block text-3xl mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>{s.step}</span>
                <h3 className="text-sm mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}