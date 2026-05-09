"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function PrivateGalleryPage() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: appel API /api/private-access/verify
    setTimeout(() => {
      setError("Code d'accès non reconnu. Vérifiez avec Olivier.");
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="w-full max-w-[400px]">
          {/* Background blur */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "radial-gradient(ellipse at 50% 30%, rgba(255,202,0,0.03) 0%, transparent 60%)",
            }}
          />

          <h1
            className="text-center mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Galerie privée
          </h1>
          <p
            className="text-center mb-8 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Entrez le code d&apos;accès fourni par Olivier
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                placeholder=" "
                className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
                style={{ color: "var(--text-primary)" }}
              />
              <label
                htmlFor="code"
                className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                Code d&apos;accès
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder=" "
                className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
                style={{ color: "var(--text-primary)" }}
              />
              <label
                htmlFor="password"
                className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                Mot de passe
              </label>
            </div>

            <button
              type="submit"
              className="btn-gold w-full"
              disabled={loading}
            >
              {loading ? "Vérification..." : "Accéder"}
            </button>
          </form>

          {error && (
            <p
              className="text-center text-xs mt-4"
              style={{ color: "var(--error)" }}
            >
              {error}
            </p>
          )}

          <p
            className="text-center text-xs mt-8"
            style={{ color: "var(--text-muted)" }}
          >
            Vous n&apos;avez pas de code ?{" "}
            <a href="/contact" style={{ color: "var(--accent-gold)" }}>
              Contactez Olivier
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}