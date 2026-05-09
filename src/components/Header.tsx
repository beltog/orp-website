"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/galleries", label: "Galeries" },
  { href: "/fine-art", label: "Fine Art" },
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

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,168,78,0.08)" : "1px solid transparent",
        }}
      >
        <div className="px-6 md:px-16 py-5 flex items-center justify-between max-w-[1400px] mx-auto">
          <Link href="/" className="z-50 relative group">
            <span
              className="text-sm tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--serif)", color: "var(--text)", fontWeight: 400 }}
            >
              Olivier Reynes
            </span>
          </Link>

          {/* Desktop nav — tighter, no Accueil */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{
                  fontFamily: "var(--mono)",
                  color: pathname === item.href ? "var(--gold)" : "var(--text-dim)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer" : "Menu"}
          >
            <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--text)", transform: isOpen ? "rotate(45deg) translateY(3px)" : "none" }} />
            <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--text)", opacity: isOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-300" style={{ backgroundColor: "var(--text)", transform: isOpen ? "rotate(-45deg) translateY(-3px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center transition-all duration-500"
        style={{ backgroundColor: isOpen ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0)", pointerEvents: isOpen ? "auto" : "none", opacity: isOpen ? 1 : 0 }}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl tracking-[0.2em] uppercase transition-all duration-500"
              style={{
                fontFamily: "var(--serif)",
                color: pathname === item.href ? "var(--gold)" : "var(--text)",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}