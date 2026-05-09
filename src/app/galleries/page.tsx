import Header from "@/components/Header";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Galeries — Olivier Reynes Photography",
  description: "Explorez les galeries photographiques d'Olivier Reynes : immobilier, architecture, mariages, portraits, fine art.",
};

const FALLBACK_GALLERIES = [
  { slug: "interieurs-architecture", title: "Intérieurs — Architecture", subtitle: "Photographie immobilière et d'architecture", coverUrl: "" },
  { slug: "immobilier", title: "Immobilier", subtitle: "Photos et vidéos pour la vente et la location", coverUrl: "" },
  { slug: "paysages-fine-art", title: "Paysages — Fine Art", subtitle: "Tirages d'art disponibles à la commande", coverUrl: "" },
  { slug: "portraits", title: "Portraits — Lifestyle", subtitle: "Portraits professionnels et lifestyle", coverUrl: "" },
  { slug: "mariages", title: "Mariages", subtitle: "Galeries privées pour chaque couple", coverUrl: "" },
  { slug: "tirage-fine-art", title: "Tirages Fine Art", subtitle: "Commandez vos tirages d'art", coverUrl: "" },
];

export default async function GalleriesPage() {
  let galleries = FALLBACK_GALLERIES;

  try {
    const prisma = getPrisma();
    const dbGalleries = await prisma.gallery.findMany({
      where: { isPublic: true },
      orderBy: { order: "asc" },
      include: { images: { where: { isCover: true }, take: 1 } },
    });

    if (dbGalleries.length > 0) {
      galleries = dbGalleries.map((g: any) => ({
        slug: g.slug,
        title: g.title,
        subtitle: g.subtitle || g.description || "",
        coverUrl: g.images?.[0]?.url || g.coverUrl || "",
      }));
    }
  } catch {
    // DB not available — use fallback
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <h1
          className="text-center mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Galeries
        </h1>
        <p
          className="text-center mb-12 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          Immobilier · Architecture · Mariages · Portraits · Fine Art
        </p>
        <div
          className="mx-auto mb-16"
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery) => (
            <a
              key={gallery.slug}
              href={`/galleries/${gallery.slug}`}
              className="gallery-item group block aspect-[4/3] rounded-sm overflow-hidden relative"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              {gallery.coverUrl ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${gallery.coverUrl})` }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,202,0,0.03)" }}>
                  <span className="text-5xl opacity-10" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>
                    OR
                  </span>
                </div>
              )}
              {/* Lumen Reveal overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-6 z-10">
                <div>
                  <span className="text-sm tracking-[0.15em] uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)", opacity: 0, transitionDelay: "0.1s" }}>
                    {gallery.title}
                  </span>
                  {gallery.subtitle && (
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      {gallery.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}