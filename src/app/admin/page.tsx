"use client";

import { useState } from "react";
import { AdminHome, AdminGalleries, AdminPrivate, AdminUpload, AdminOrders, AdminMessages, AdminContent } from "./AdminSections";

type Section = "home" | "galleries" | "private" | "upload" | "orders" | "messages" | "content";

const NAV_ITEMS: { key: Section; label: string; icon: string }[] = [
  { key: "home", label: "Accueil", icon: "🏠" },
  { key: "galleries", label: "Galeries", icon: "📸" },
  { key: "private", label: "Accès privés", icon: "🔐" },
  { key: "upload", label: "Upload photos", icon: "📤" },
  { key: "orders", label: "Commandes", icon: "💰" },
  { key: "messages", label: "Messages", icon: "📬" },
  { key: "content", label: "Contenu", icon: "✏️" },
];

export default function AdminDashboard() {
  const [section, setSection] = useState<Section>("home");

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col border-r"
        style={{ borderColor: "var(--glass-border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="p-5 border-b" style={{ borderColor: "var(--glass-border)" }}>
          <h2
            className="text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}
          >
            Admin
          </h2>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            Olivier Reynes
          </p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => setSection(item.key)}
              className="w-full text-left px-3 py-2.5 rounded text-sm flex items-center gap-3 transition-colors"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: section === item.key ? "var(--glass-hover)" : "transparent",
                color: section === item.key ? "var(--accent-gold)" : "var(--text-muted)",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t" style={{ borderColor: "var(--glass-border)" }}>
          <a
            href="/"
            className="block text-center text-xs py-2 tracking-[0.1em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            ← Voir le site
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        {section === "home" && <AdminHome />}
        {section === "galleries" && <AdminGalleries />}
        {section === "private" && <AdminPrivate />}
        {section === "upload" && <AdminUpload />}
        {section === "orders" && <AdminOrders />}
        {section === "messages" && <AdminMessages />}
        {section === "content" && <AdminContent />}
      </main>
    </div>
  );
}