"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/galleries", label: "Galeries" },
  { href: "/fine-art", label: "Tirages Fine Art" },
  { href: "/videos", label: "Vidéos" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.85)"
            : "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
        }}
      >
        <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/" className="z-50 relative group">
            <span
              className="text-sm tracking-[0.3em] uppercase transition-colors duration-300 group-hover:text-[var(--accent-amber)]"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}
            >
              Olivier Reynes
            </span>
            <span
              className="block text-[0.6rem] tracking-[0.5em] uppercase opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              Photography
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  color: pathname === item.href ? "var(--accent-gold)" : "var(--text-muted)",
                }}
              >
                {item.label}
                {pathname === item.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--accent-gold)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--text-primary)",
                transform: isOpen ? "rotate(45deg) translateY(3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--text-primary)",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "var(--text-primary)",
                transform: isOpen ? "rotate(-45deg) translateY(-3px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500"
        style={{
          backgroundColor: isOpen ? "rgba(0,0,0,0.97)" : "rgba(0,0,0,0)",
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Gold gradient accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,202,0,0.03) 0%, transparent 70%)",
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />

        <nav className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl tracking-[0.2em] uppercase transition-all duration-500"
              style={{
                fontFamily: "var(--font-display)",
                color: pathname === item.href ? "var(--accent-gold)" : "var(--text-primary)",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {item.label}
              {pathname === item.href && (
                <div
                  className="h-px mt-1 transition-all duration-500"
                  style={{
                    background: "linear-gradient(90deg, var(--accent-gold), var(--accent-amber))",
                    width: isOpen ? "30%" : "0%",
                    marginLeft: "35%",
                    transitionDelay: `${i * 0.08 + 0.3}s`,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom info in mobile menu */}
        <div
          className="absolute bottom-12 left-0 right-0 text-center transition-all duration-500"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.5s",
          }}
        >
          <p className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            9B, rue du Docteur Mourier — Champagne-sur-Seine
          </p>
        </div>
      </div>
    </>
  );
}