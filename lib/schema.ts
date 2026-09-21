import { getSiteUrl, getTomatoImageUrl, PRODUCT } from "./site";

export function getProductSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    description: PRODUCT.description,
    image: getTomatoImageUrl(),
    offers: {
      "@type": "Offer",
      price: PRODUCT.price.toFixed(2),
      priceCurrency: PRODUCT.currency,
      availability: "https://schema.org/InStock",
      url: siteUrl,
    },
  };
}

export function getFaqSchema(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
