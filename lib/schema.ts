import { getSiteUrl, getTomatoImageUrl, PRODUCT, SITE_NAME } from "./site";

export function getProductSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    description: PRODUCT.description,
    image: getTomatoImageUrl(),
    sku: "one-tomato-digital",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      price: PRODUCT.price.toFixed(2),
      priceCurrency: PRODUCT.currency,
      availability: "https://schema.org/InStock",
      url: siteUrl,
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: PRODUCT.currency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "GB",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnNotPermitted",
        merchantReturnLink: `${siteUrl}/faq`,
      },
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
