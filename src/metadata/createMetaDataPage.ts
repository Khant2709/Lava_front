import {META_DATA} from "./constants";
import {MetaPage} from "@myTypes/meta/constants";

const isDev = true;

export const createMetaDataPage = (
    title: string,
    description: string,
    keywords: string[],
    pathPage: string,
    imageAlt: string,
    imageName1200x630: string | null,
    imageName800x800: string | null,
    imageName1080x1920: string | null
): MetaPage => {
    const images = [];

    if (imageName1200x630) {
        images.push({
            url: `${META_DATA.url}/${isDev ? 'preview1200x630.webp' : imageName1200x630}`,
            secure_url: `${META_DATA.url}/${isDev ? 'preview1200x630.webp' : imageName1200x630}`,
            width: 1200,
            height: 630,
            alt: imageAlt,
            type: "image/webp" as const
        });
    }

    if (imageName800x800) {
        images.push({
            url: `${META_DATA.url}/${isDev ? 'preview800x800.webp' : imageName800x800}`,
            secure_url: `${META_DATA.url}/${isDev ? 'preview800x800.webp' : imageName800x800}`,
            width: 800,
            height: 800,
            alt: imageAlt,
            type: "image/webp" as const
        });
    }

    if (imageName1080x1920) {
        images.push({
            url: `${META_DATA.url}/${isDev ? 'preview1080x1920.webp' : imageName1080x1920}`,
            secure_url: `${META_DATA.url}/${isDev ? 'preview1080x1920.webp' : imageName1080x1920}`,
            width: 1080,
            height: 1920,
            alt: imageAlt,
            type: "image/webp" as const
        });
    }

    return {
        title,
        description,
        keywords,
        openGraph: {
            site_name: META_DATA.siteName,
            title,
            description,
            url: `${META_DATA.url}${pathPage}`,
            images,
            locale: "ru_RU",
            type: "website"
        },
        alternates: {
            canonical: pathPage
        }
    };
};
