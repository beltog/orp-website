import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tirages Fine Art — Olivier Reynes Photography",
  description: "Tirages d'art limités, édités et signés par Olivier Reynes. Papier Hahnemühle, certificat d'authenticité inclus.",
};

const PRINTS = [
  { id: "paysage-seine", title: "Seine au crépuscule", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15", image: "/images/gallery-paysage-1.jpg" },
  { id: "architecture-verriere", title: "Verrière industrielle", category: "Architecture", price: 220, size: "50×70 cm", edition: "1/10", image: "/images/gallery-archi-2.jpg" },
  { id: "foret-brume", title: "Forêt dans la brume", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15", image: "/images/gallery-paysage-2.jpg" },
  { id: "pont-romantique", title: "Pont romantique", category: "Paysage", price: 200, size: "50×70 cm", edition: "1/12", image: "/images/gallery-paysage-3.jpg" },
  { id: "escalier-spirale", title: "Escalier spiral", category: "Architecture", price: 240, size: "50×70 cm", edition: "1/10", image: "/images/gallery-archi-3.jpg" },
  { id: "reflets-eau", title: "Reflets sur l'eau", category: "Paysage", price: 180, size: "40×60 cm", edition: "1/15", image: "/images/gallery-archi-5.jpg" },
];

export default function FineArtPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Header />

      {/* Hero — editorial, left-aligned */}
      <section className="pt-32 pb-16 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-[600px]">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "var(--mono)", color: "var(--gold)", fontSize: "0.65rem" }}>
            Éditions limitées
          </p>
          <h1 className="mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Tirages<br/>Fine Art
          </h1>
          <div className="divider-gold-left mb-8" />
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Chaque tirage est produit sur papier Hahnemühle Photo Rag 308g, édité en série limitée, numéroté et signé à la main. Un certificat d'authenticité accompagne chaque œuvre.
          </p>
        </div>
      </section>

      {/* Prints grid */}
      <section className="px-6 md:px-16 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINTS.map((print) => (
            <div key={print.id} className="gallery-item group" style={{ borderRadius: "2px" }}>
              <div className="aspect-[4/5] relative overflow-hidden" style={{ backgroundColor: "var(--bg-card)" }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${print.image}')` }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(10,10,10,0.9) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--mono)", color: "var(--gold)" }}>{print.category}</p>
                  <h3 className="mt-1" style={{ fontFamily: "var(--serif)", color: "var(--text)", fontSize: "1.1rem" }}>{print.title}</h3>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span style={{ fontFamily: "var(--serif)", color: "var(--gold)", fontSize: "1.2rem" }}>{print.price} €</span>
                    <span className="text-[0.65rem]" style={{ color: "var(--text-faint)", fontFamily: "var(--mono)" }}>{print.size} · Éd. {print.edition}</span>
                  </div>
                  <button className="btn-gold mt-3 text-xs" style={{ padding: "8px 20px", fontSize: "0.7rem" }}>Commander</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-16" style={{ background: "var(--bg-card)" }}>
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-center mb-12" style={{ fontFamily: "var(--serif)" }}>Comment commander</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", title: "Choisissez", desc: "Sélectionnez votre tirage et la taille souhaitée" },
              { step: "02", title: "Payez", desc: "Paiement sécurisé par CB, PayPal, Apple Pay ou Google Pay" },
              { step: "03", title: "Recevez", desc: "Expédition soignée sous 7 jours avec certificat d'authenticité" },
            ].map((s) => (
              <div key={s.step}>
                <span className="block text-4xl mb-3" style={{ fontFamily: "var(--serif)", color: "var(--gold)", fontWeight: 300 }}>{s.step}</span>
                <h3 className="mb-2 text-sm" style={{ fontFamily: "var(--mono)", color: "var(--text)", letterSpacing: "0.1em" }}>{s.title}</h3>
                <p className="text-xs" style={{ color: "var(--text-faint)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}