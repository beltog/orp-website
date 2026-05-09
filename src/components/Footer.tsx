"use client";

const LINKS = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/galleries", label: "Galeries" },
    { href: "/fine-art", label: "Tirages Fine Art" },
    { href: "/videos", label: "Vidéos" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/cgv", label: "CGV" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid var(--glass-border)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}>
                Olivier Reynes
              </span>
              <span className="block text-[0.6rem] tracking-[0.5em] uppercase opacity-60" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                Photography
              </span>
            </a>
            <p className="text-xs leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>
              Photographe professionnel spécialisé en immobilier, architecture et mariages. Île-de-France et au-delà.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {LINKS.navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
              Informations
            </h4>
            <ul className="space-y-2">
              {LINKS.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
              SIRET : 440 391 043 00021
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
              Contact
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                9B, rue du Docteur Mourier
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                77430 Champagne-sur-Seine
              </p>
              <a href="mailto:olivierreynesphotography@gmail.com" className="text-xs block transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                olivierreynesphotography@gmail.com
              </a>
            </address>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/olivier_reynes" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                Instagram
              </a>
              <a href="https://www.youtube.com/@olivierreynes" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider transition-colors duration-300 hover:text-[var(--accent-gold)]" style={{ color: "var(--text-muted)" }}>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8" style={{ borderTop: "1px solid var(--glass-border)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[0.65rem] tracking-[0.15em]" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Olivier Reynes Photography — Tous droits réservés
            </p>
            <p className="text-[0.6rem] tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Propulsé avec soin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}