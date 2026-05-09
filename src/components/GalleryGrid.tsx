"use client";

import { useState } from "react";
import Image from "next/image";

interface Photo {
  id: string;
  cloudinaryUrl: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  exifData?: {
    camera?: string;
    lens?: string;
    iso?: number;
    shutter?: string;
    aperture?: string;
  };
  isForSale?: boolean;
}

interface GalleryGridProps {
  photos: Photo[];
  galleryTitle: string;
}

export default function GalleryGrid({ photos, galleryTitle }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showExif, setShowExif] = useState(false);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => {
    setLightboxIndex(null);
    setShowExif(false);
  };
  const prev = () => lightboxIndex !== null && setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : photos.length - 1);
  const next = () => lightboxIndex !== null && setLightboxIndex(lightboxIndex < photos.length - 1 ? lightboxIndex + 1 : 0);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className="gallery-item break-inside-avoid rounded-sm overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(i)}
            role="button"
            tabIndex={0}
            aria-label={`Voir ${photo.alt}`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
          >
            <Image
              src={photo.cloudinaryUrl}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBAAyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAAA=="
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {photo.title && (
                <span
                  className="text-sm tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}
                >
                  {photo.title}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.98)" }}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          {/* Photo */}
          <div className="relative max-w-[90vw] max-h-[85vh]">
            <Image
              src={currentPhoto.cloudinaryUrl}
              alt={currentPhoto.alt}
              width={currentPhoto.width}
              height={currentPhoto.height}
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
            {/* Lumen bar */}
            <div className="lumen-bar" key={lightboxIndex} />
          </div>

          {/* Counter */}
          <div
            className="absolute bottom-6 right-6 text-xs tracking-[0.2em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {String(lightboxIndex! + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </div>

          {/* EXIF toggle */}
          <button
            onClick={() => setShowExif(!showExif)}
            className="absolute bottom-6 left-6 text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {showExif ? "Masquer EXIF" : "EXIF"}
          </button>

          {/* EXIF data */}
          {showExif && currentPhoto.exifData && (
            <div
              className="absolute bottom-14 left-6 glass p-4 text-xs space-y-1"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {currentPhoto.exifData.camera && (
                <p style={{ color: "var(--text-muted)" }}>
                  Appareil : <span style={{ color: "var(--text-primary)" }}>{currentPhoto.exifData.camera}</span>
                </p>
              )}
              {currentPhoto.exifData.lens && (
                <p style={{ color: "var(--text-muted)" }}>
                  Objectif : <span style={{ color: "var(--text-primary)" }}>{currentPhoto.exifData.lens}</span>
                </p>
              )}
              {currentPhoto.exifData.iso && (
                <p style={{ color: "var(--text-muted)" }}>
                  ISO : <span style={{ color: "var(--text-primary)" }}>{currentPhoto.exifData.iso}</span>
                </p>
              )}
              {currentPhoto.exifData.shutter && (
                <p style={{ color: "var(--text-muted)" }}>
                  Vitesse : <span style={{ color: "var(--text-primary)" }}>{currentPhoto.exifData.shutter}</span>
                </p>
              )}
              {currentPhoto.exifData.aperture && (
                <p style={{ color: "var(--text-muted)" }}>
                  Ouverture : <span style={{ color: "var(--text-primary)" }}>{currentPhoto.exifData.aperture}</span>
                </p>
              )}
            </div>
          )}

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-2xl"
            style={{ color: "var(--text-muted)" }}
            aria-label="Fermer"
          >
            ×
          </button>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-primary)" }}
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-primary)" }}
            aria-label="Photo suivante"
          >
            ›
          </button>

          {/* Order button (Fine Art) */}
          {currentPhoto.isForSale && (
            <a
              href={`/fine-art/order?photo=${currentPhoto.id}`}
              className="btn-gold absolute bottom-6 left-1/2 -translate-x-1/2 text-xs"
            >
              Commander ce tirage
            </a>
          )}
        </div>
      )}
    </div>
  );
}