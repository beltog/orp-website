export default function AuthErrorPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 style={{ fontFamily: "var(--font-display)", color: "var(--error)", fontSize: "2rem" }}>
          Erreur d&apos;authentification
        </h1>
        <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
          Une erreur est survenue lors de la connexion.
        </p>
        <a href="/auth/signin" className="btn-gold inline-block mt-8">
          Réessayer
        </a>
      </div>
    </main>
  );
}