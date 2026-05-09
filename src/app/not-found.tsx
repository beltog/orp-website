import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center">
      <h1
        className="mb-4"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--accent-gold)",
          fontSize: "clamp(4rem, 10vw, 8rem)",
        }}
      >
        404
      </h1>
      <p
        className="mb-8 text-sm tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
      >
        Page non trouvée
      </p>
      <div
        className="mb-8"
        style={{
          width: "40px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
        }}
      />
      <a href="/" className="btn-gold">
        Retour à l'accueil
      </a>
    </main>
  );
}