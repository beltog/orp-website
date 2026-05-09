"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            Nom *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm transition-colors focus:border-[var(--accent-gold)]"
            style={{ color: "var(--text-primary)" }}
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm transition-colors focus:border-[var(--accent-gold)]"
            style={{ color: "var(--text-primary)" }}
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          Téléphone
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm transition-colors focus:border-[var(--accent-gold)]"
          style={{ color: "var(--text-primary)" }}
          placeholder="06 00 00 00 00"
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          Type de prestation *
        </label>
        <select
          name="service"
          required
          className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm transition-colors focus:border-[var(--accent-gold)]"
          style={{ color: "var(--text-secondary)" }}
        >
          <option value="" style={{ background: "var(--bg-primary)" }}>Choisir…</option>
          <option value="immobilier" style={{ background: "var(--bg-primary)" }}>Photographie immobilière</option>
          <option value="architecture" style={{ background: "var(--bg-primary)" }}>Photographie d&apos;architecture</option>
          <option value="mariage" style={{ background: "var(--bg-primary)" }}>Photographie de mariage</option>
          <option value="portrait" style={{ background: "var(--bg-primary)" }}>Portrait &amp; Lifestyle</option>
          <option value="video" style={{ background: "var(--bg-primary)" }}>Vidéo immobilière / architecture</option>
          <option value="fine-art" style={{ background: "var(--bg-primary)" }}>Tirage Fine Art</option>
          <option value="autre" style={{ background: "var(--bg-primary)" }}>Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm transition-colors focus:border-[var(--accent-gold)] resize-none"
          style={{ color: "var(--text-primary)" }}
          placeholder="Décrivez votre projet…"
        />
      </div>

      <button type="submit" className="btn-gold" disabled={status === "sending"}>
        {status === "sending" ? "Envoi…" : status === "sent" ? "✓ Envoyé !" : status === "error" ? "✗ Erreur" : "Envoyer"}
      </button>
    </form>
  );
}