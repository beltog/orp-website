import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Olivier Reynes Photography",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Politique de confidentialité
        </h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Responsable du traitement</h2>
            <p>Olivier Reynes Photography, SIRET 440 391 043 00021, 9B rue du Docteur Mourier, 77430 Champagne-sur-Seine.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Données collectées</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Messages envoyés via le formulaire de contact</li>
              <li>Données de navigation (cookies anonymisés)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Finalités du traitement</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Répondre aux demandes de contact et devis</li>
              <li>Gérer les commandes de tirages Fine Art</li>
              <li>Envoyer des galeries privées sur demande</li>
              <li>Améliorer l&apos;expérience de navigation (cookies anonymisés)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Durée de conservation</h2>
            <p>Les données sont conservées pendant 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité, opposition. Exercez-les en contactant olivierreynesphotography@gmail.com.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Sécurité</h2>
            <p>Les données sont stockées sur des serveurs sécurisés au sein de l&apos;Union européenne. Le site utilise le protocole HTTPS pour chiffrer les échanges.</p>
          </section>
        </div>
      </div>
    </main>
  );
}