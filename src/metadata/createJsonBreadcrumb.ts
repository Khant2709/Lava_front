import {META_DATA} from "./constants";
import {JsonLDBreadcrumbs} from "@myTypes/meta/constants";

type ElementBreadcrumb = {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
}

export const createJsonBreadcrumb = (
    title: string,
    pathPage: string,
    itemListElement: ElementBreadcrumb[]
): JsonLDBreadcrumbs => {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "url": `${META_DATA.url}${pathPage}`,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Главная",
                    "item": META_DATA.url
                },
                ...itemListElement
            ]
        }
    }
}