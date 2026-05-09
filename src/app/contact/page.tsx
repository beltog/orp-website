"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: appel API /api/contact
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <section className="pt-32 pb-24 px-6 max-w-[600px] mx-auto">
        <h1
          className="text-center mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Contact
        </h1>
        <p
          className="text-center mb-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Discutons de votre projet — je réponds sous 24h.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder=" "
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
              style={{ color: "var(--text-primary)" }}
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              Nom
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder=" "
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
              style={{ color: "var(--text-primary)" }}
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              Email
            </label>
          </div>

          {/* Service */}
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
              style={{ color: "var(--text-secondary)" }}
              defaultValue=""
            >
              <option value="" disabled style={{ background: "var(--bg-primary)" }}>
                Type de prestation
              </option>
              <option value="immobilier" style={{ background: "var(--bg-primary)" }}>Immobilier / Architecture</option>
              <option value="mariage" style={{ background: "var(--bg-primary)" }}>Mariage</option>
              <option value="portrait" style={{ background: "var(--bg-primary)" }}>Portrait / Corporate</option>
              <option value="drone" style={{ background: "var(--bg-primary)" }}>Drone / Vidéo</option>
              <option value="homestaging" style={{ background: "var(--bg-primary)" }}>Homestaging virtuel</option>
              <option value="autre" style={{ background: "var(--bg-primary)" }}>Autre</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder=" "
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none peer"
              style={{ color: "var(--text-primary)" }}
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-gold w-full mt-4"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi en cours..." : status === "sent" ? "✓ Message envoyé" : "Envoyer"}
          </button>

          {status === "sent" && (
            <p
              className="text-center text-xs mt-4"
              style={{ color: "var(--success)" }}
            >
              Merci ! Je vous réponds sous 24h.
            </p>
          )}
        </form>

        {/* Info */}
        <div className="mt-16 text-center space-y-2">
          <p
            className="text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            9B, rue du Docteur Mourier
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            77430 Champagne-sur-Seine
          </p>
          <a
            href="mailto:olivierreynesphotography@gmail.com"
            className="text-xs"
            style={{ color: "var(--accent-gold)" }}
          >
            olivierreynesphotography@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}