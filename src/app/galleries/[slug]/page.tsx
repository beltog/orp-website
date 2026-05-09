import { notFound } from "next/navigation";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

// TODO: Remplacer par des données Prisma
const GALLERY_DATA: Record<string, { title: string; subtitle: string; photos: any[] }> = {
  "interieurs-architecture": {
    title: "Intérieurs — Architecture",
    subtitle: "Photographie immobilière et d'architecture",
    photos: [],
  },
  immobilier: {
    title: "Immobilier",
    subtitle: "Photos et vidéos pour la vente et la location",
    photos: [],
  },
  "paysages-fine-art": {
    title: "Paysages — Fine Art",
    subtitle: "Tirages d'art disponibles à la commande",
    photos: [],
  },
  portraits: {
    title: "Portraits — Lifestyle",
    subtitle: "Portraits professionnels et lifestyle",
    photos: [],
  },
  mariages: {
    title: "Mariages",
    subtitle: "Galeries privées pour chaque couple",
    photos: [],
  },
  "tirage-fine-art": {
    title: "Tirages Fine Art",
    subtitle: "Commandez vos tirages d'art",
    photos: [],
  },
};

export async function generateStaticParams() {
  return Object.keys(GALLERY_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gallery = GALLERY_DATA[slug];
  if (!gallery) return { title: "Galerie non trouvée" };

  return {
    title: `${gallery.title} — Olivier Reynes Photography`,
    description: gallery.subtitle,
    openGraph: {
      title: `${gallery.title} — Olivier Reynes Photography`,
      description: gallery.subtitle,
      type: "website",
    },
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gallery = GALLERY_DATA[slug];

  if (!gallery) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-28 pb-24 px-6 max-w-[1400px] mx-auto">
        {/* Title */}
        <h1
          className="text-center mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {gallery.title}
        </h1>
        <p
          className="text-center mb-12 text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
        >
          {gallery.subtitle}
        </p>

        {/* Decorative line */}
        <div
          className="mx-auto mb-12"
          style={{
            width: "40px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
          }}
        />

        {/* Gallery grid or empty state */}
        {gallery.photos.length > 0 ? (
          <GalleryGrid photos={gallery.photos} galleryTitle={gallery.title} />
        ) : (
          <div className="text-center py-20">
            <p
              className="text-sm mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              Photos à venir
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Cette galerie sera bientôt remplie de photos.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/contact" className="btn-gold">
            Demander un devis
          </a>
        </div>
      </section>
    </main>
  );
}