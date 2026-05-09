import { notFound } from "next/navigation";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const prisma = getPrisma();
    const gallery = await prisma.gallery.findUnique({ where: { slug } });
    if (!gallery) return { title: "Galerie non trouvée" };
    return {
      title: `${gallery.title} — Olivier Reynes Photography`,
      description: gallery.description || gallery.subtitle || `Galerie ${gallery.title}`,
      openGraph: {
        title: `${gallery.title} — Olivier Reynes Photography`,
        description: gallery.description || gallery.subtitle || "",
        type: "website",
      },
    };
  } catch {
    return { title: "Galerie — Olivier Reynes Photography" };
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let gallery: any;
  let images: any[] = [];

  try {
    const prisma = getPrisma();
    gallery = await prisma.gallery.findUnique({
      where: { slug },
      include: { images: { orderBy: { order: "asc" } } },
    });
    if (gallery) {
      images = gallery.images.map((img: any) => ({
        id: img.id,
        src: img.url,
        alt: img.alt || gallery.title,
        width: img.width || 1200,
        height: img.height || 800,
      }));
    }
  } catch {
    // DB not available — fallback to static
  }

  // Fallback static data if DB has no gallery yet
  if (!gallery) {
    const STATIC_GALLERIES: Record<string, { title: string; subtitle: string }> = {
      "interieurs-architecture": { title: "Intérieurs — Architecture", subtitle: "Photographie immobilière et d'architecture" },
      immobilier: { title: "Immobilier", subtitle: "Photos et vidéos pour la vente et la location" },
      "paysages-fine-art": { title: "Paysages — Fine Art", subtitle: "Tirages d'art disponibles à la commande" },
      portraits: { title: "Portraits — Lifestyle", subtitle: "Portraits professionnels et lifestyle" },
      mariages: { title: "Mariages", subtitle: "Galeries privées pour chaque couple" },
      "tirage-fine-art": { title: "Tirages Fine Art", subtitle: "Commandez vos tirages d'art" },
    };

    const staticData = STATIC_GALLERIES[slug];
    if (!staticData) notFound();

    gallery = { title: staticData.title, subtitle: staticData.subtitle, description: "", isPublic: true, isPrivate: false };
    images = [];
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-28 pb-24 px-6 max-w-[1400px] mx-auto">
        <h1
          className="text-center mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {gallery.title}
        </h1>
        {gallery.subtitle && (
          <p
            className="text-center mb-12 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {gallery.subtitle}
          </p>
        )}
        <div
          className="mx-auto mb-12"
          style={{
            width: "40px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
          }}
        />

        {images.length > 0 ? (
          <GalleryGrid photos={images} galleryTitle={gallery.title} />
        ) : (
          <div className="text-center py-20">
            <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
              Photos à venir
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Cette galerie sera bientôt remplie de photos.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <a href="/contact" className="btn-gold">
            Demander un devis
          </a>
        </div>
      </section>
    </main>
  );
}