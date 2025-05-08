export interface GalleryPhoto {
    "@context": "https://schema.org";
    "@type": "CollectionPage";
    name: string;
    description: string;
    url: string;
    mainEntity: {
        "@type": "ImageGallery";
        name: string;
        image?: string[];
    }
}