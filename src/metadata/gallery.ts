import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";
import {META_DATA} from "./constants";
import {JsonLDGalleryPage} from "@myTypes/meta/gallery";

const TITLE = 'Галерея кальянной Lava Lounge — Комнаты, Атмосфера и Гости';
const DESCRIPTION = 'Откройте визуальный мир кальянной Lava Lounge в Краснодаре: уютные VIP-комнаты, живая атмосфера и довольные гости. Погрузитесь в нашу уникальную атмосферу через фотографии и выберите свой идеальный уголок.';
const KEYWORDS = [
    "галерея кальянной",
    "фото кальянной Краснодар",
    "Lava Lounge фотографии комнат ",
    "атмосфера кальянной",
    "атмосфера кальянной Lava Lounge",
    "гости кальянной",
    "интерьер кальянной",
    "интерьер кальянной Lava Lounge",
    "фотографии Lava Lounge",
    "галерея кальянная Краснодар"
];

export const meta_gallery_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/gallery',
    'Превью картинка для Главной страницы заведения Lava Lounge',
    'previewGallery1200x630.webp',
    'previewGallery800x800.webp',
    'previewGallery1080x1920.webp',
)

export const jsonLD_gallery: (JsonLDBreadcrumbs | JsonLDGalleryPage)[] = [
    createJsonBreadcrumb(TITLE, '/gallery', [{
        "@type": "ListItem",
        "position": 2,
        "name": "Галерея",
        "item": `${META_DATA.url}/gallery`
    }]),
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Галерея кальянной Lava Lounge",
        "description": "Коллекция фотографий с атмосферой, комнатами и гостями кальянной Lava Lounge в Краснодаре.",
        "url": `${META_DATA.url}/gallery`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "MediaGallery",
                    "name": "VIP-комнаты Lava Lounge",
                    "url": `${META_DATA.url}/rooms`
                },
                {
                    "@type": "MediaGallery",
                    "name": "Атмосфера кальянной",
                    "url": `${META_DATA.url}/gallery/atmosphere`
                },
                {
                    "@type": "MediaGallery",
                    "name": "Наши гости",
                    "url": `${META_DATA.url}/gallery/guests`
                }
            ]
        }
    }
];