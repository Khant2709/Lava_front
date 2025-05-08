export interface JsonLDArticlesPage {
    "@context": "https://schema.org";
    "@type": "CollectionPage";
    name: string;
    description: string;
    url: string;
    mainEntity: {
        "@type": "ItemList";
        itemListElement: ItemList[]
    }
}

interface ItemList {
    "@type": "Article";
    headline: string;
    url: string;
    datePublished: string;
    author: {
        "@type": "Organization";
        "name": string;
        logo: {
            "@type": "ImageObject";
            url: string;
        }
    }
}