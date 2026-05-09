// Admin sub-components — simple, intuitive, noir et or

export function AdminHome() {
  return (
    <div>
      <h1 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        Bienvenue, Olivier
      </h1>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Ajouter des photos", icon: "📤", href: "#upload" },
          { label: "Partager une galerie", icon: "🔐", href: "#private" },
          { label: "Répondre aux messages", icon: "💬", href: "#messages" },
        ].map((action) => (
          <button
            key={action.label}
            className="glass p-5 text-left transition-colors hover:bg-[var(--glass-hover)]"
            style={{ borderRadius: "4px" }}
          >
            <span className="text-2xl block mb-2">{action.icon}</span>
            <span className="text-sm" style={{ color: "var(--text-primary)" }}>{action.label}</span>
          </button>
        ))}
      </div>

      {/* Stats placeholders */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Visites aujourd'hui", value: "—" },
          { label: "Commandes en attente", value: "—" },
          { label: "Nouveaux messages", value: "—" },
          { label: "Galeries actives", value: "—" },
        ].map((stat) => (
          <div key={stat.label} className="glass p-4" style={{ borderRadius: "4px" }}>
            <p className="text-xs tracking-wider uppercase mb-1" style={{ color: "var(--text-muted)" }}>
              {stat.label}
            </p>
            <p className="text-2xl font-bold" style={{ color: "var(--accent-gold)" }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdminGalleries() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Galeries
        </h1>
        <button className="btn-gold text-xs">+ Nouvelle galerie</button>
      </div>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        Aucune galerie pour le moment. Cliquez sur &quot;Nouvelle galerie&quot; pour commencer.
      </p>
    </div>
  );
}

export function AdminPrivate() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          Accès privés
        </h1>
        <button className="btn-gold text-xs">+ Partager une galerie</button>
      </div>

      {/* Options explanation */}
      <div className="glass p-5 mb-6" style={{ borderRadius: "4px" }}>
        <h3 className="text-sm mb-3" style={{ color: "var(--accent-gold)" }}>Options d'accès conditionnel</h3>
        <ul className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>💳 <strong>Accès après paiement</strong> — Le client doit avoir payé pour accéder à la galerie</li>
          <li>✅ <strong>Accès sur approbation</strong> — Vous devez valider manuellement chaque demande</li>
          <li>⏰ <strong>Expiration automatique</strong> — L'accès expire après X jours (défaut : 90j)</li>
          <li>🔒 <strong>Watermark</strong> — Filigrane &quot;Olivier Reynes Photography&quot; sur les photos</li>
          <li>🚫 <strong>Anti-clic droit</strong> — Désactive le clic droit et la copie d'image</li>
          <li>📥 <strong>Limite de téléchargement</strong> — Maximum N téléchargements par photo</li>
        </ul>
      </div>

      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Aucun accès privé configuré.
      </p>
    </div>
  );
}

export function AdminUpload() {
  return (
    <div>
      <h1 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        Upload photos
      </h1>

      {/* Drop zone */}
      <div
        className="border-2 border-dashed rounded-lg p-16 text-center transition-colors"
        style={{ borderColor: "var(--glass-border)", backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="text-4xl mb-4">📤</div>
        <p className="text-sm mb-2" style={{ color: "var(--text-primary)" }}>
          Glissez vos photos ici
        </p>
        <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          ou cliquez pour sélectionner — JPG, PNG, WebP, MP4
        </p>
        <button className="btn-gold text-xs">Parcourir</button>
      </div>

      <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
        ⚡ Optimisation automatique : redimensionnement, WebP, metadata EXIF préservés
      </p>
    </div>
  );
}

export function AdminOrders() {
  return (
    <div>
      <h1 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        Commandes
      </h1>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Aucune commande pour le moment.
      </p>
    </div>
  );
}

export function AdminMessages() {
  return (
    <div>
      <h1 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        Messages
      </h1>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Aucun message pour le moment.
      </p>
    </div>
  );
}

export function AdminContent() {
  return (
    <div>
      <h1 className="text-2xl mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
        Contenu du site
      </h1>

      <div className="space-y-3">
        {[
          { page: "À propos", slug: "about" },
          { page: "Contact", slug: "contact" },
          { page: "Mentions légales", slug: "mentions-legales" },
          { page: "Politique de confidentialité", slug: "privacy" },
        ].map((p) => (
          <div
            key={p.slug}
            className="glass p-4 flex items-center justify-between"
            style={{ borderRadius: "4px" }}
          >
            <span className="text-sm" style={{ color: "var(--text-primary)" }}>{p.page}</span>
            <button className="text-xs tracking-wider uppercase" style={{ color: "var(--accent-gold)" }}>
              Modifier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}