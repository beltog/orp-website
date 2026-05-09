"use client";

import { usePathname } from "next/navigation";

const ROUTE_LABELS: Record<string, string> = {
  galleries: "Galeries",
  "fine-art": "Tirages Fine Art",
  videos: "Vidéos",
  about: "À propos",
  contact: "Contact",
  admin: "Administration",
  "mentions-legales": "Mentions légales",
  "politique-confidentialite": "Politique de confidentialité",
  cgv: "CGV",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Accueil", url: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    items.push({
      name: ROUTE_LABELS[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      url: currentPath,
    });
  }

  return (
    <nav className="px-6 pt-4 max-w-[1200px] mx-auto" aria-label="Fil d'Ariane">
      <ol className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: "var(--text-muted)" }}>/</span>}
            {i === items.length - 1 ? (
              <span style={{ color: "var(--accent-gold)" }}>{item.name}</span>
            ) : (
              <a href={item.url} className="transition-colors hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}