import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {JsonLDContactsPage} from "@myTypes/meta/contacts";

import {META_ADDRESS, META_DATA, META_GEO, META_SAME_AS} from "./constants";


const TITLE = 'Контакты кальянной Lava Lounge в Краснодаре';
const DESCRIPTION = 'Адрес, номер телефона, режим работы и схема проезда в кальянную Lava Lounge в Краснодаре. Свяжитесь с нами для бронирования и получения дополнительной информации.';
const KEYWORDS = [
    "кальянная Краснодар контакты",
    "Lava Lounge Краснодар адрес",
    "где находится кальянная Lava Lounge",
    "телефон кальянной Краснодар",
    "телефон кальянной на панораме",
    "Lava Lounge режим работы",
    "как добраться до кальянной Краснодар",
    "Lava Lounge Краснодар контакты",
    "бронирование кальянной Краснодар"
];

export const meta_contacts_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/contacts',
    'Превью картинка для Главной страницы заведения Lava Lounge',
    'previewContacts1200x630.webp',
    'previewContacts800x800.webp',
    'previewContacts1080x1920.webp',
);

export const jsonLD_contact: (JsonLDBreadcrumbs | JsonLDContactsPage)[] = [
    createJsonBreadcrumb(TITLE, '/contacts', [{
        "@type": "ListItem",
        "position": 2,
        "name": "Контакты",
        "item": `${META_DATA.url}/contacts`
    }]),
    {
        "@context": "https://schema.org",
        "@type": "HookahLounge",
        "name": 'Lava Lounge',
        logo: META_DATA.urlLogo,
        "image": `${META_DATA.url}/preview.webp`,
        "url": `${META_DATA.url}/contacts`,
        "telephone": META_DATA.telephone,
        "address": META_ADDRESS,
        "geo": META_GEO,
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "12:00",
                "closes": "04:00"
            }
        ],
        "sameAs": META_SAME_AS
    }
];