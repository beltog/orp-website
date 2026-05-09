import Header from "@/components/Header";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Galeries — Olivier Reynes Photography",
  description: "Explorez les galeries photographiques d'Olivier Reynes : immobilier, architecture, mariages, portraits, fine art.",
};

const GALLERIES = [
  {
    slug: "interieurs-architecture",
    title: "Intérieurs — Architecture",
    subtitle: "Photographie immobilière et d'architecture",
    image: "/images/gallery-archi-2.jpg",
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    subtitle: "Photos et vidéos pour la vente et la location",
    image: "/images/gallery-immo-1.jpg",
  },
  {
    slug: "paysages-fine-art",
    title: "Paysages — Fine Art",
    subtitle: "Tirages d'art disponibles à la commande",
    image: "/images/gallery-paysage-1.jpg",
  },
  {
    slug: "portraits",
    title: "Portraits — Lifestyle",
    subtitle: "Portraits professionnels et lifestyle",
    image: "/images/gallery-portrait-1.jpg",
  },
  {
    slug: "mariages",
    title: "Mariages",
    subtitle: "Galeries privées pour chaque couple",
    image: "/images/gallery-mariage-2.jpg",
  },
  {
    slug: "tirage-fine-art",
    title: "Tirages Fine Art",
    subtitle: "Commandez vos tirages d'art",
    image: "/images/gallery-paysage-2.jpg",
  },
];

export default async function GalleriesPage() {
  // Try to get galleries from DB
  let dbGalleries: any[] = [];
  try {
    const prisma = getPrisma();
    dbGalleries = await prisma.gallery.findMany({
      where: { isPublic: true },
      orderBy: { order: "asc" },
      include: { images: { where: { isCover: true }, take: 1 } },
    });
  } catch {}

  const galleries = dbGalleries.length > 0
    ? dbGalleries.map((g: any) => ({
        slug: g.slug,
        title: g.title,
        subtitle: g.subtitle || g.description || "",
        image: g.images?.[0]?.url || g.coverUrl || `/images/gallery-archi-${((GALLERIES.findIndex(x => x.slug === g.slug) % 6) + 1) || 1}.jpg`,
      }))
    : GALLERIES;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            Portfolio
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Galeries
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Immobilier · Architecture · Mariages · Portraits · Fine Art
          </p>
          <div className="divider-gold mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery) => (
            <a
              key={gallery.slug}
              href={`/galleries/${gallery.slug}`}
              className="gallery-item group block aspect-[4/3] rounded-sm overflow-hidden relative"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${gallery.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              {/* Lumen Reveal */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,202,0,0.15) 50%, transparent 60%, transparent 100%)",
                opacity: 0,
                transition: "opacity 0.6s ease-out",
              }} />
              <style>{`.gallery-item:hover > div:nth-child(3) { opacity: 1 !important; }`}</style>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                <h3 className="text-lg mb-2 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  {gallery.title}
                </h3>
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  {gallery.subtitle}
                </p>
              </div>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}