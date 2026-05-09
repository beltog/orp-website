import { notFound } from "next/navigation";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const GALLERY_IMAGES: Record<string, { src: string; alt: string }[]> = {
  "interieurs-architecture": [
    { src: "/images/gallery-archi-1.jpg", alt: "Intérieur architecture" },
    { src: "/images/gallery-archi-2.jpg", alt: "Intérieur architecture" },
    { src: "/images/gallery-archi-3.jpg", alt: "Intérieur architecture" },
    { src: "/images/gallery-archi-4.jpg", alt: "Intérieur architecture" },
    { src: "/images/gallery-archi-5.jpg", alt: "Intérieur architecture" },
    { src: "/images/gallery-archi-6.jpg", alt: "Intérieur architecture" },
  ],
  "immobilier": [
    { src: "/images/gallery-immo-1.jpg", alt: "Immobilier" },
    { src: "/images/gallery-immo-2.jpg", alt: "Immobilier" },
    { src: "/images/gallery-immo-3.jpg", alt: "Immobilier" },
    { src: "/images/gallery-immo-4.jpg", alt: "Immobilier" },
  ],
  "paysages-fine-art": [
    { src: "/images/gallery-paysage-1.jpg", alt: "Paysage Fine Art" },
    { src: "/images/gallery-paysage-2.jpg", alt: "Paysage Fine Art" },
    { src: "/images/gallery-paysage-3.jpg", alt: "Paysage Fine Art" },
  ],
  "portraits": [
    { src: "/images/gallery-portrait-1.jpg", alt: "Portrait" },
  ],
  "mariages": [
    { src: "/images/gallery-mariage-1.jpg", alt: "Mariage" },
    { src: "/images/gallery-mariage-2.jpg", alt: "Mariage" },
    { src: "/images/gallery-mariage-3.jpg", alt: "Mariage" },
  ],
  "tirage-fine-art": [
    { src: "/images/gallery-paysage-1.jpg", alt: "Fine Art" },
    { src: "/images/gallery-paysage-2.jpg", alt: "Fine Art" },
    { src: "/images/gallery-paysage-3.jpg", alt: "Fine Art" },
  ],
};

const GALLERY_DATA: Record<string, { title: string; subtitle: string }> = {
  "interieurs-architecture": { title: "Intérieurs — Architecture", subtitle: "Photographie immobilière et d'architecture" },
  "immobilier": { title: "Immobilier", subtitle: "Photos et vidéos pour la vente et la location" },
  "paysages-fine-art": { title: "Paysages — Fine Art", subtitle: "Tirages d'art disponibles à la commande" },
  "portraits": { title: "Portraits — Lifestyle", subtitle: "Portraits professionnels et lifestyle" },
  "mariages": { title: "Mariages", subtitle: "Galeries privées pour chaque couple" },
  "tirage-fine-art": { title: "Tirages Fine Art", subtitle: "Commandez vos tirages d'art" },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gallery = GALLERY_DATA[slug];
  if (!gallery) return { title: "Galerie non trouvée" };
  return {
    title: `${gallery.title} — Olivier Reynes Photography`,
    description: gallery.subtitle,
    openGraph: { title: `${gallery.title} — Olivier Reynes Photography`, description: gallery.subtitle, type: "website" },
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = GALLERY_DATA[slug];
  if (!data) notFound();

  // Try DB images first, fallback to static
  let images = GALLERY_IMAGES[slug] || [];
  try {
    const prisma = getPrisma();
    const gallery = await prisma.gallery.findUnique({
      where: { slug },
      include: { images: { orderBy: { order: "asc" } } },
    });
    if (gallery && gallery.images.length > 0) {
      images = gallery.images.map((img: any) => ({
        src: img.url,
        alt: img.alt || gallery.title,
      }));
    }
  } catch {}

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            Portfolio
          </p>
          <h1 className="mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            {data.title}
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            {data.subtitle}
          </p>
          <div className="divider-gold mt-6" />
        </div>

        <GalleryGrid photos={images} galleryTitle={data.title} />

        <div className="text-center mt-16">
          <a href="/contact" className="btn-gold">Demander un devis</a>
        </div>
      </section>
    </main>
  );
}