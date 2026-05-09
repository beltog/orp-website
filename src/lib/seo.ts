export function generateSchemaOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Olivier Reynes Photography",
    description: "Photographe professionnel spécialisé en immobilier, architecture, mariages et portraits. Île-de-France et au-delà.",
    url: "https://orp-website-snowy.vercel.app",
    telephone: "",
    email: "olivierreynesphotography@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9B, rue du Docteur Mourier",
      addressLocality: "Champagne-sur-Seine",
      postalCode: "77430",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.3936",
      longitude: "2.7976",
    },
    image: "https://orp-website-snowy.vercel.app/og-image.jpg",
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.instagram.com/olivier_reynes",
      "https://www.youtube.com/@olivierreynes",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services photographiques",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photographie immobilière",
            description: "Photos et vidéos professionnelles pour la vente et la location de biens immobiliers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photographie d'architecture",
            description: "Mise en valeur d'espaces architecturaux pour architectes et promoteurs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Photographie de mariage",
            description: "Captation des moments uniques de votre mariage avec des galeries privées.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tirages Fine Art",
            description: "Tirages d'art limités sur papier Hahnemühle, signés et numérotés.",
          },
        },
      ],
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://orp-website-snowy.vercel.app/#business",
    name: "Olivier Reynes Photography",
    image: "https://orp-website-snowy.vercel.app/og-image.jpg",
    url: "https://orp-website-snowy.vercel.app",
    telephone: "",
    email: "olivierreynesphotography@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9B, rue du Docteur Mourier",
      addressLocality: "Champagne-sur-Seine",
      postalCode: "77430",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.3936",
      longitude: "2.7976",
    },
    vatID: "FR44039104300021",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}