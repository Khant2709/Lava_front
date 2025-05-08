import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {META_ADDRESS, META_CONTACT, META_DATA, META_GEO, META_REVIEW, META_SAME_AS} from "./constants";

import {JsonLDHomePage} from "@myTypes/meta/home";
import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";


const TITLE = 'Кальянная Lava Lounge в Краснодаре – атмосферный отдых и дымные кальяны';
const DESCRIPTION = 'Lava Lounge – это уютная кальянная в Краснодаре с авторскими напитками, VIP-комнатами и отличной атмосферой на ул.Восточно-кругликовская 34.';
const KEYWORDS = [
    'кальянная Краснодар',
    'лучшая кальянная Краснодар',
    'Lava Lounge Краснодар',
    'кальянная Lava Lounge',
    'кальянная Лава',
    'кальянная Лава Краснодар',
    'кальян Краснодар',
    'восточно-кругликовская кальянная',
    'vip кальянная краснодар',
    'кальянная с vip комнатами',
    'кальянная с закрытыми комнатами',
    'где покурить кальян Краснодар',
    'уютная кальянная Краснодар',
    'ночной отдых Краснодар'
];

export const meta_home_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/',
    'Превью картинка для Главной страницы заведения Lava Lounge',
    'preview1200x630.webp',
    'preview800x800.webp',
    'preview1080x1920.webp',
)

export const jsonLD_home: (JsonLDHomePage | JsonLDBreadcrumbs)[] = [
    createJsonBreadcrumb(TITLE, '/', []),
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: TITLE,
        url: META_DATA.url,
        logo: META_DATA.urlLogo,
        image: `${META_DATA.url}/preview.webp`,
        telephone: META_DATA.telephone,
        email: META_DATA.email,
        address: META_ADDRESS,
        geo: META_GEO,
        priceRange: '1000-3000 RUB',
        openingHours: META_DATA.timeToWork,
        contactPoint: META_CONTACT,
        review: META_REVIEW,
        sameAs: META_SAME_AS
    },
]