import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olivier Reynes Photography",
  description:
    "Photographe professionnel — Immobilier, Architecture, Mariages, Portraits. Île-de-France et au-delà.",
  keywords: [
    "photographe",
    "immobilier",
    "architecture",
    "mariage",
    "portrait",
    "drone",
    "Île-de-France",
    "Seine-et-Marne",
    "fine art",
  ],
  openGraph: {
    title: "Olivier Reynes Photography",
    description:
      "Photographe professionnel — Immobilier, Architecture, Mariages, Portraits.",
    type: "website",
    locale: "fr_FR",
    siteName: "Olivier Reynes Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivier Reynes Photography",
    description:
      "Photographe professionnel — Immobilier, Architecture, Mariages, Portraits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-secondary)] antialiased">
        {children}
      </body>
    </html>
  );
}