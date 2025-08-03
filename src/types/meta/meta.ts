export interface MetaLayout {
    site_name: string;
    generator: string;
    applicationName: string;
    referrer:
        | "origin"
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"
        | "origin-when-cross-origin";
    authors: { name: string }[];
    creator: string;
    publisher: string;
    formatDetection: {
        email?: boolean;
        address?: boolean;
        telephone?: boolean;
    };
    icons: {
        icon?: {
            url: string;
            type: string;
            sizes?: string;
        }[];
        shortcut?: {
            url: string;
            type: string;
            width?: number;
            height?: number;
        };
        apple?: {
            url: string;
            type: string;
            width?: number;
            height?: number;
        };
        other?: {
            rel: string;
            url: string;
            type: string;
            width?: number;
            height?: number;
        };
    };
    verification?: {
        google?: string;
        yandex?: string;
        other?: {
            me: string[];
        };
    };
    assets?: string[];
    category?: string;
    robots?: {
        index: boolean;
        follow: boolean;
        googleBot?: { index: boolean; follow: boolean };
        yandexBot?: { index: boolean; follow: boolean };
    };
    metadataBase: URL;
}


export interface JsonLDWebSite {
    "@context": "https://schema.org";
    "@type": "WebSite";
    name: string;
    url: string;
}