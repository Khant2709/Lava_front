import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {GalleryPhoto} from "@myTypes/meta/galleryPhoto";

import {META_DATA} from "./constants";



const TITLE = 'Атмосфера кальянной Lava Lounge — уюта, стиля и расслабления';
const DESCRIPTION = 'Откройте для себя атмосферу кальянной Lava Lounge в Краснодаре: мягкий свет, дизайнерский интерьер, расслабляющая музыка и особая энергетика уюта. Просмотрите фотографии, передающие нашу атмосферу.';
const KEYWORDS = [
    'атмосфера кальянной',
    'атмосфера кальянной на панораме',
    'фото интерьера кальянной',
    'уютная кальянная Краснодар',
    'Lava Lounge интерьер',
    'дизайн кальянной',
    'расслабляющая атмосфера кальянной',
    'галерея атмосферы кальянной',
    'лучшие кальянные Краснодар'
];

export const meta_gallery_atmosphere_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/gallery/atmosphere',
    'Превью картинка для страницы Галерея-атмосфера заведения Lava Lounge',
    'previewGalleryAtmosphere1200x630.webp',
    'previewGalleryAtmosphere800x800.webp',
    'previewGalleryAtmosphere1080x1920.webp',
);

export const jsonLd_gallery_atmosphere: (JsonLDBreadcrumbs | GalleryPhoto)[] = [
    createJsonBreadcrumb(TITLE, '/gallery/atmosphere', [
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Галерея",
            "item": `${META_DATA.url}/gallery`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Атмосфера",
            "item": `${META_DATA.url}/gallery/atmosphere`
        },
    ]),
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Атмосфера кальянной Lava Lounge",
        "description": "Фотогалерея атмосферы в кальянной Lava Lounge — уют, стиль и расслабление.",
        "url": `${META_DATA.url}/gallery/atmosphere`,
        "mainEntity": {
            "@type": "ImageGallery",
            "name": "Галерея фотографий атмосферы",
            // "image": [
            //     "https://yourdomain.ru/images/gallery/atmosphere1.webp",
            //     "https://yourdomain.ru/images/gallery/atmosphere2.webp"
            // ]
        }
    }
];