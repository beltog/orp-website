import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Olivier Reynes Photography",
};

export default function CGV() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Conditions Générales de Vente
        </h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>1. Objet</h2>
            <p>Les présentes CGV régissent les ventes de tirages photographiques Fine Art et de prestations de services photographiques proposées par Olivier Reynes Photography.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>2. Prix</h2>
            <p>Les prix sont indiqués en euros TTC. Ils incluent la TVA applicable. Olivier Reynes Photography se réserve le droit de modifier les prix à tout moment, sous réserve que les commandes en cours ne soient pas affectées.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>3. Paiement</h2>
            <p>Le paiement s&apos;effectue en ligne de manière sécurisée par carte bancaire, PayPal, Apple Pay ou Google Pay via Stripe. Aucune donnée bancaire n&apos;est stockée sur nos serveurs.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>4. Livraison</h2>
            <p>Les tirages sont expédiés sous 7 jours ouvrés après confirmation du paiement, dans un emballage adapté à la conservation des œuvres photographiques. Les délais de livraison indicatifs sont de 2 à 5 jours en France métropolitaine.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>5. Droit de rétractation</h2>
            <p>Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation. Les tirages personnalisés ou signés ne sont pas éligibles au droit de rétractation (article L221-28).</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>6. Propriété intellectuelle</h2>
            <p>L&apos;achat d&apos;un tirage n&apos;emporte pas cession des droits d&apos;auteur. Toute reproduction, diffusion ou utilisation commerciale de l&apos;image est interdite sans autorisation écrite préalable.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>7. Responsabilité</h2>
            <p>Olivier Reynes Photography ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation du site ou des produits achetés.</p>
          </section>
          <section>
            <h2 className="text-base mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>8. Litiges</h2>
            <p>Les présentes CGV sont soumises au droit français. En cas de litige, le tribunal compétent sera celui du ressort du siège social d&apos;Olivier Reynes Photography.</p>
          </section>
        </div>
      </div>
    </main>
  );
}