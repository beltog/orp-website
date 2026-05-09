import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Olivier Reynes Photography",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Mentions légales
        </h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Éditeur du site</h2>
            <p><strong style={{ color: "var(--text-secondary)" }}>Olivier Reynes Photography</strong></p>
            <p>Entreprise individuelle</p>
            <p>SIRET : 440 391 043 00021</p>
            <p>9B, rue du Docteur Mourier — 77430 Champagne-sur-Seine — France</p>
            <p>Email : olivierreynesphotography@gmail.com</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Hébergement</h2>
            <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (photographies, textes, logos, éléments graphiques) est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Données personnelles</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à l&apos;adresse email indiquée ci-dessus.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires au fonctionnement et des cookies d&apos;analyse anonymisés. Vous pouvez gérer vos préférences dans les paramètres de votre navigateur.</p>
          </section>
        </div>
      </div>
    </main>
  );
}