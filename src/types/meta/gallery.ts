export interface JsonLDGalleryPage {
    "@context": "https://schema.org";
    "@type": "CollectionPage";
    name: string;
    description: string;
    url: string;
    mainEntity: {
        "@type": "ItemList";
        itemListElement: {
            "@type": "MediaGallery";
            name: string;
            url: string;
        }[]
    }
}