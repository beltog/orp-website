"use client";

import { useState, useEffect, useCallback } from "react";

interface Photo {
  id?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryGridProps {
  photos: Photo[];
  galleryTitle: string;
}

export default function GalleryGrid({ photos, galleryTitle }: GalleryGridProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selected === null) return;
    if (e.key === "Escape") setSelected(null);
    if (e.key === "ArrowRight") setSelected((s) => (s !== null ? Math.min(s + 1, photos.length - 1) : s));
    if (e.key === "ArrowLeft") setSelected((s) => (s !== null ? Math.max(s - 1, 0) : s));
  }, [selected, photos.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-block mb-6" style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)" }} />
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>Photos à venir</p>
        <p className="text-xs mt-2" style={{ color: "var(--text-muted)", opacity: 0.6 }}>Cette galerie sera bientôt remplie de photos.</p>
      </div>
    );
  }

  return (
    <>
      {/* Masonry-ish Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => {
          const aspect = photo.width && photo.height ? photo.width / photo.height : 1.5;
          const isPortrait = aspect < 1;

          return (
            <div
              key={photo.id || index}
              className="break-inside-avoid gallery-item group relative cursor-pointer"
              style={{ borderRadius: "2px" }}
              onClick={() => setSelected(index)}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: isPortrait ? "3/4" : "4/3",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                {/* Placeholder shimmer */}
                {!loaded.has(index) && (
                  <div className="absolute inset-0 shimmer" />
                )}

                {/* Image */}
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={() => setLoaded((prev) => new Set(prev).add(index))}
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(255,202,0,0.02)" }}>
                    <span className="text-3xl opacity-10" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>OR</span>
                  </div>
                )}

                {/* Hover overlay — Lumen Reveal */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                    Voir
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-[101] w-10 h-10 flex items-center justify-center transition-colors hover:text-[var(--accent-gold)]"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4L16 16M16 4L4 16" />
            </svg>
          </button>

          {/* Nav buttons */}
          {selected > 0 && (
            <button
              className="absolute left-4 md:left-8 z-[101] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[var(--glass-hover)]"
              style={{ color: "var(--text-muted)" }}
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              aria-label="Précédente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
          )}
          {selected < photos.length - 1 && (
            <button
              className="absolute right-4 md:right-8 z-[101] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[var(--glass-hover)]"
              style={{ color: "var(--text-muted)" }}
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              aria-label="Suivante"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 6L15 12L9 18" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            {photos[selected].src ? (
              <img
                src={photos[selected].src}
                alt={photos[selected].alt}
                className="max-w-full max-h-[85vh] object-contain"
                style={{ animation: "fadeIn 0.3s ease-out" }}
              />
            ) : (
              <div className="w-[60vw] h-[60vh] flex items-center justify-center" style={{ backgroundColor: "var(--bg-secondary)" }}>
                <span style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)", fontSize: "2rem", opacity: 0.3 }}>OR</span>
              </div>
            )}
          </div>

          {/* Counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {selected + 1} / {photos.length}
          </div>

          {/* Lumen bar */}
          <div className="lumen-bar" style={{ animationDuration: "2s" }} />
        </div>
      )}
    </>
  );
}