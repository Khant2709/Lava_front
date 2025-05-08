export interface PartnerBrand {
    "@context": "https://schema.org";
    "@type": "Brand";
    name: string;
    description: string;
    logo: string;
    url: string;
}

export interface PartnerItemList {
    "@context": "https://schema.org";
    "@type": "ItemList";
    name: string;
    itemListElement: {
        "@type": "Product";
        name: string;
        image: string;
        description: string;
        brand: {
            "@type": "Brand";
            name: string;
        }
    }[]
}