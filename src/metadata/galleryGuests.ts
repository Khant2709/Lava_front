import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {GalleryPhoto} from "@myTypes/meta/galleryPhoto";

import {META_DATA} from "./constants";



const TITLE = 'Наши гости в кальянной Lava Lounge — фото и яркие моменты';
const DESCRIPTION = 'Вдохновляйтесь атмосферой Lava Lounge через фотографии наших гостей. Улыбки, встречи, праздники и дружеские вечера — мы ценим каждого, кто был с нами.';
const KEYWORDS = [
    'гости кальянной',
    'фото гостей Lava Lounge',
    'мероприятия кальянной',
    'кальянная для праздников Краснодар',
    'друзья в кальянной',
    'гости Lava Lounge',
    'вечеринки в кальянной',
    'отзывы гостей кальянной'
];

export const meta_gallery_guests_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/gallery/guests',
    'Превью картинка для страницы Галерея-атмосфера заведения Lava Lounge',
    'previewGalleryGuests1200x630.webp',
    'previewGalleryGuests800x800.webp',
    'previewGalleryGuests1080x1920.webp',
);

export const jsonLd_gallery_guests: (JsonLDBreadcrumbs | GalleryPhoto)[] = [
    createJsonBreadcrumb(TITLE, '/gallery/guests', [
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Галерея",
            "item": `${META_DATA.url}/gallery`
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Гости",
            "item": `${META_DATA.url}/gallery/guests`
        },
    ]),
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Гости кальянной Lava Lounge",
        "description": "Фотогалерея гостей в кальянной Lava Lounge — уют, стиль и расслабление.",
        "url": `${META_DATA.url}/gallery/guests`,
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