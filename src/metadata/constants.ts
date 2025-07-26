import {EMAIL_COMPANY, PHONE_COMPANY, TG_COMPANY, TIME_WORK_COMPANY} from "@constants/envData";
import {
    MetaAddress,
    MetaAggregateRating,
    MetaContact,
    MetaDataType,
    MetaGeo,
    MetaReview
} from "@myTypes/meta/constants";

export const META_DATA: MetaDataType = {
    meName: 'Vladislav.Kh',
    meEmail: 'Khant2709@gmail.com',

    siteName: 'Кальянная Lava Lounge',
    domain: 'lavalounge.ru',
    url: 'https://lavalounge.ru',
    urlLogo: 'https://lavalounge.ru/logo.png',

    authors: [
        {name: "Vladislav.Kh"},
        {name: "Кальянная Lava Lounge"}
    ],

    telephone: PHONE_COMPANY,
    email: EMAIL_COMPANY,
    timeToWork: TIME_WORK_COMPANY,
}

export const META_ADDRESS: MetaAddress = {
    "@type": "PostalAddress",
    addressRegion: 'Краснодарский край',
    addressLocality: 'Краснодар',
    streetAddress: 'ул.Восточно-кругликовская, д.34',
    postalCode: '350901',
    addressCountry: "RU",
}

export const META_GEO: MetaGeo = {
    "@type": "GeoCoordinates",
    latitude: "45.051245",
    longitude: "39.029194",
}

export const META_CONTACT: MetaContact = {
    "@type": "ContactPoint",
    telephone: META_DATA.telephone,
    email: META_DATA.email,
    contactType: "customer support",
}

export const META_SAME_AS: string[] = [
    `https://t.me/${TG_COMPANY}`,
]

export const META_AGGREGATE_RATING: MetaAggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "411"
}

export const META_REVIEW: MetaReview[] = [
    {
        "@type": "Review",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5"
        },
        author: {
            "@type": "Organization",
            name: "Яндекс Карты"
        },
        name: "Отзывы с Яндекс.Карт",
        reviewBody: "217 отзывов от клиентов. Средняя оценка: 4.9 из 5.",
        url: "https://yandex.ru/maps/35/krasnodar/?ll=39.029692%2C45.049982&mode=poi&poi%5Bpoint%5D=39.029240%2C45.051395&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D82010384886&z=17",
        datePublished: "2025-05-05"
    },
    {
        "@type": "Review",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "4.5",
            bestRating: "5"
        },
        author: {
            "@type": "Organization",
            name: "Google Карты"
        },
        name: "Отзывы с Google",
        reviewBody: "118 отзывов от гостей. Средняя оценка: 4.5 из 5.",
        url: "https://www.google.tn/maps/place/Lava+lounge/@45.0511171,39.0291818,19z/data=!3m1!4b1!4m6!3m5!1s0x40f04543118d5c6b:0x925d4c961ca55ebd!8m2!3d45.0511171!4d39.0291818!16s%2Fg%2F11g01_3x6r?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
        datePublished: "2025-05-05"
    },
    {
        "@type": "Review",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "4.7",
            bestRating: "5"
        },
        author: {
            "@type": "Organization",
            name: "2ГИС"
        },
        name: "Отзывы с 2ГИС",
        reviewBody: "76 отзыва. Средняя оценка: 4.7 из 5.",
        url: "https://2gis.ru/krasnodar/firm/70000001030442859?m=39.0293%2C45.051365%2F19.35",
        datePublished: "2025-05-05"
    }
]


