import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {PartnersModel} from "@myTypes/api/partnersAPI";
import {JsonLDPartnersPage} from "@myTypes/meta/partners";
import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";

import {META_DATA} from "./constants";
import {getFullPathImage} from "@utils/getFullPath";


const TITLE = 'Партнёры кальянной Lava Lounge — табачные бренды, с которыми мы работаем';
const DESCRIPTION = 'Мы сотрудничаем только с проверенными табачными брендами, чтобы обеспечить нашим гостям лучший вкус и качество кальяна. Узнайте, какие марки представлены в Lava Lounge Краснодар.';
const KEYWORDS = [
    'партнёры кальянной',
    'табачные бренды для кальяна',
    'бренды табака Lava Lounge',
    'лучший табак для кальяна',
    'официальные партнёры кальянной',
    'кальянная Краснодар бренды',
    'Lava Lounge табачные марки',
    'что курят в Lava Lounge',
    'поставщики табака кальянная'
];

export const meta_partners_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/partners',
    'Превью картинка для страницы Партнеров заведения Lava Lounge',
    'previewPartners1200x630.webp',
    'previewPartners800x800.webp',
    'previewPartners1080x1920.webp',
);

export const jsonLd_partners = (partners: PartnersModel[]): (JsonLDBreadcrumbs | JsonLDPartnersPage)[] => [
    createJsonBreadcrumb(TITLE, '/partners', [{
        "@type": "ListItem",
        "position": 2,
        "name": "Партнеры",
        "item": `${META_DATA.url}/partners`
    }]),
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Партнёры кальянной Lava Lounge",
        "description": "Список табачных брендов, представленных в кальянной Lava Lounge в Краснодаре. Мы работаем только с лучшими производителями для качественного кальянного опыта.",
        "url": `${META_DATA.url}/partners`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": partners.map((partner) => ({
                "@type": "Brand",
                "name": partner.name,
                "logo": getFullPathImage('d', partner.image_path, partner.logo_image_d),
                "description": partner.short_description
            }))
        }
    }
];
