"use client";

import { useState } from "react";
import Link from "next/link";

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)" }}
      >
        {/* Logo */}
        <Link href="/" className="z-50 relative">
          <span
            className="text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)" }}
          >
            Olivier Reynes
          </span>
          <span
            className="block text-[0.6rem] tracking-[0.5em] uppercase opacity-60"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            Photography
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: isOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
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
              transform: isOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile Nav — Full-screen immersive */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500"
        style={{
          backgroundColor: isOpen ? "rgba(0,0,0,0.97)" : "rgba(0,0,0,0)",
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              {item.label}
              {/* Lumen bar on tap */}
              <div
                className="h-px mt-1 transition-all duration-500"
                style={{
                  background: "linear-gradient(90deg, var(--accent-gold), var(--accent-amber))",
                  width: isOpen ? "60%" : "0%",
                  marginLeft: "20%",
                  transitionDelay: isOpen ? `${i * 80 + 200}ms` : "0ms",
                }}
              />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}