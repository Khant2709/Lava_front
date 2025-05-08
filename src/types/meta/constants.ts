export interface MetaDataType {
    meName: string;
    meEmail: string;
    siteName: string;
    domain: string;
    url: string;
    urlLogo: string;
    authors: { name: string; }[];
    telephone: string;
    email: string;
    timeToWork: string;
}

export interface MetaAddress {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: "RU",
}

export interface MetaGeo {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
}

export interface MetaContact {
    "@type": "ContactPoint";
    telephone: string;
    email: string;
    contactType: "customer support";
}

export interface MetaReview {
    "@type": "Review",
    reviewRating: {
        "@type": "Rating",
        ratingValue: string;
        bestRating: string;
    },
    author: {
        "@type": "Organization",
        name: string;
    },
    name: string;
    reviewBody: string;
    url: string;
    datePublished: string;
}

export interface MetaImage {
    url: string;
    width: number;
    height: number;
    alt: string;
    type: "image/webp";
    secure_url?: string;
}

export interface JsonLDBreadcrumbs {
    "@context": "https://schema.org";
    "@type": "WebPage";
    name: string;
    url: string;
    breadcrumb: {
        "@type": "BreadcrumbList";
        itemListElement: {
            "@type": "ListItem";
            position: number;
            name: string;
            item: string;
        }[];
    };
}

export interface MetaPage {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
        site_name: string,
        title: string,
        description: string,
        url: string,
        images: MetaImage[],
        locale: "ru_RU",
        type: "website",
    },
    alternates: {
        canonical: string;
    },
}