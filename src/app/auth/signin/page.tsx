"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      window.location.href = "/admin";
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">
        <h1
          className="text-center mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Connexion
        </h1>
        <p
          className="text-center mb-8 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          Espace réservé à Olivier
        </p>

        <div
          className="mb-8"
          style={{
            width: "40px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)",
            margin: "0 auto",
          }}
        />

        {/* Google Sign In */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/admin" })}
          className="w-full mb-6 py-3 px-4 border border-[var(--glass-border)] text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-colors hover:bg-[var(--glass-hover)]"
          style={{ color: "var(--text-primary)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continuer avec Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--glass-border)" }} />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>ou</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--glass-border)" }} />
        </div>

        {/* Email/Password */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
              style={{ color: "var(--text-primary)" }}
            />
            <label className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
              className="w-full bg-transparent border-b border-[var(--glass-border)] py-3 px-0 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors peer"
              style={{ color: "var(--text-primary)" }}
            />
            <label className="absolute left-0 top-3 text-xs tracking-[0.15em] uppercase transition-all peer-focus:-top-3 peer-focus:text-[0.65rem] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[0.65rem]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Mot de passe
            </label>
          </div>

          <button type="submit" className="btn-gold w-full" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          {error && (
            <p className="text-center text-xs" style={{ color: "var(--error)" }}>{error}</p>
          )}
        </form>
      </div>
    </main>
  );
}