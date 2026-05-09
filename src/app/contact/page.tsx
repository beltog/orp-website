import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Olivier Reynes Photography",
  description: "Demandez un devis ou prenez rendez-vous pour votre projet photographique.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <section className="relative pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
            Parlons de votre projet
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Contact
          </h1>
          <div className="divider-gold mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div className="space-y-8">
            <div className="glass p-8">
              <h3 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                Coordonnées
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: "var(--text-muted)" }}>Email</p>
                  <a href="mailto:olivierreynesphotography@gmail.com" className="text-sm transition-colors hover:text-[var(--accent-gold)]" style={{ color: "var(--text-secondary)" }}>
                    olivierreynesphotography@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: "var(--text-muted)" }}>Adresse</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    9B, rue du Docteur Mourier<br />77430 Champagne-sur-Seine
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.1em] uppercase mb-1" style={{ color: "var(--text-muted)" }}>Zone d&apos;intervention</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Île-de-France et au-delà</p>
                </div>
              </div>
            </div>

            <div className="glass p-8">
              <h3 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                Réseaux sociaux
              </h3>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/olivier_reynes" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider transition-colors hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>Instagram</a>
                <a href="https://www.youtube.com/@olivierreynes" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider transition-colors hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>YouTube</a>
              </div>
            </div>

            <div className="glass p-8">
              <h3 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)" }}>
                Informations
              </h3>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                SIRET : 440 391 043 00021<br />Photographie professionnelle<br />Délai de livraison moyen : 48h
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}