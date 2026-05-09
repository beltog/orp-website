import Header from "@/components/Header";

export const metadata = {
  title: "Galeries — Olivier Reynes Photography",
  description: "Découvrez les galeries photographiques d'Olivier Reynes : immobilier, architecture, mariages, portraits, fine art.",
};

const GALLERIES = [
  {
    slug: "interieurs-architecture",
    title: "Intérieurs — Architecture",
    subtitle: "Photographie immobilière et d'architecture",
    type: "PUBLIC",
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    subtitle: "Photos et vidéos pour la vente et la location",
    type: "IMMOBILIER",
  },
  {
    slug: "mariages",
    title: "Mariages",
    subtitle: "Galeries privées pour chaque couple",
    type: "PRIVATE",
  },
  {
    slug: "portraits-lifestyle",
    title: "Portraits — Lifestyle",
    subtitle: "Portraits professionnels et lifestyle",
    type: "PUBLIC",
  },
  {
    slug: "paysages",
    title: "Paysages — Fine Art",
    subtitle: "Tirages d'art disponibles à la commande",
    type: "FINE_ART",
  },
  {
    slug: "tirage-fine-art",
    title: "Tirages Fine Art",
    subtitle: "Commandez vos tirages d'art",
    type: "FINE_ART",
  },
];

export default function GalleriesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Galeries
        </h1>
        <div
          className="mx-auto mb-16"
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERIES.map((gallery) => (
            <a
              key={gallery.slug}
              href={`/galleries/${gallery.slug}`}
              className="gallery-item group block rounded-sm overflow-hidden"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              {/* Placeholder cover */}
              <div className="aspect-[16/10] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))" }}
              >
                <span
                  className="text-xs tracking-[0.2em] uppercase opacity-30"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                >
                  {gallery.type === "PRIVATE" ? "🔒" : gallery.type === "FINE_ART" ? "✦" : "📷"}
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="text-base mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {gallery.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                >
                  {gallery.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}