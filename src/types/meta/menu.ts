export interface JsonLDMenuPage {
    "@context": "https://schema.org";
    "@type": "OfferCatalog";
    name: string;
    url: string;
    itemListElement: {
        "@type": "Offer";
        name: string;
        description: string;
        price: string;
        priceCurrency: string;
    }[]
}