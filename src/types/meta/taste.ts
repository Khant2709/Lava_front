export interface TasteJsonLD {
    "@context": "https://schema.org";
    "@type": "Product";
    name: string;
    description: string;
    image: string;
    brand: {
        "@type": "Brand";
        name: string;
    };
    category: string;
    additionalProperty: {
        "@type": "PropertyValue";
        name: string;
        value: number;
    }[]
}