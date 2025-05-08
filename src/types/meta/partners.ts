export interface JsonLDPartnersPage {
    "@context": "https://schema.org";
    "@type": "CollectionPage";
    name: string;
    description: string;
    url: string;
    mainEntity: {
        "@type": "ItemList";
        itemListElement: {
            "@type": "Brand";
            name: string;
            logo: string;
            description: string;
        }[]
    }
}