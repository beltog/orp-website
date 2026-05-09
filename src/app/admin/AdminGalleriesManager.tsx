"use client";

import { useState } from "react";

// Admin gallery management — will be connected to Prisma
// For now, displays empty state with create button

export default function AdminGalleriesManager() {
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [galleryType, setGalleryType] = useState("PUBLIC");

  const handleCreate = async () => {
    setCreating(true);
    try {
      const res = await fetch("/api/admin/galleries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, galleryType, isPublic: galleryType === "PUBLIC" }),
      });
      if (res.ok) {
        setTitle("");
        setSlug("");
        setGalleryType("PUBLIC");
      }
    } finally {
      setCreating(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Galeries
        </h1>
        <button className="btn-gold text-xs" onClick={() => setCreating(true)}>
          + Nouvelle galerie
        </button>
      </div>

      {creating && (
        <div className="glass p-6 mb-6" style={{ borderRadius: "4px" }}>
          <h3 className="text-sm mb-4" style={{ color: "var(--accent-gold)" }}>
            Nouvelle galerie
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de la galerie"
                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)]"
                style={{ color: "var(--text-primary)" }}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""))}
                placeholder="Slug (ex: interieurs-architecture)"
                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)]"
                style={{ color: "var(--text-primary)" }}
              />
            </div>
            <div className="relative">
              <select
                value={galleryType}
                onChange={(e) => setGalleryType(e.target.value)}
                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <option value="PUBLIC" style={{ background: "var(--bg-primary)" }}>Publique</option>
                <option value="PRIVATE" style={{ background: "var(--bg-primary)" }}>Privée (mariage)</option>
                <option value="FINE_ART" style={{ background: "var(--bg-primary)" }}>Fine Art (achat)</option>
                <option value="VIDEO" style={{ background: "var(--bg-primary)" }}>Vidéo</option>
                <option value="IMMOBILIER" style={{ background: "var(--bg-primary)" }}>Immobilier</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button onClick={handleCreate} className="btn-gold text-xs" disabled={creating}>
                {creating ? "Création..." : "Créer"}
              </button>
              <button onClick={() => setCreating(false)} className="text-xs" style={{ color: "var(--text-muted)" }}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Les galeries apparaîtront ici une fois créées.
      </p>
    </div>
  );
}