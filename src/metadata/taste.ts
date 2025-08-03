import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {transformNameToUrl} from "@utils/nameUrlTransform";
import {getFullPathImage} from "@utils/getFullPath";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {TasteFullModel} from "@myTypes/api/tastesAPI";
import {TasteJsonLD} from "@myTypes/meta/taste";

import {META_DATA} from "./constants";


const TITLE = (name: string, nameRu: string, nameCompany: string) => `Вкус табака ${nameRu} (${name}) от ${nameCompany} — описание, характеристики, категории`;
const KEYWORDS = (name: string, nameRu: string, nameCompany: string) => [
    `Табак для кальяна ${nameCompany}`,
    `бренд табака ${nameCompany}`,
    `${name}`,
    `Вкус ${name}`,
    `Вкус ${nameRu} ${nameCompany}`,
    `Вкус ${name} от ${nameCompany}`,
    `Лучший вкус ${name}`,
    `табак для кальяна ${nameCompany} ${nameRu}`,
    `Самый яркий вкус табака для кальяна`,
    'Качественный табак для кальяна',
    'лучший табак для кальяна',
    'табак Lava Lounge',
];

export const meta_taste_page = (taste: TasteFullModel): MetaPage => {
    return createMetaDataPage(
        TITLE(taste.name, taste.name_ru, taste.companyName),
        taste.description_company.slice(0, 160),
        KEYWORDS(taste.name, taste.name_ru, taste.companyName),
        `/partners/${transformNameToUrl(taste.companyName)}/${transformNameToUrl(taste.name)}`,
        `изображение вкуса ${taste.name}`,
        null,
        getFullPathImage('d', taste.image_path, taste.image_name_d),
        null,
    );
}

export const jsonLd_taste = (taste: TasteFullModel): (JsonLDBreadcrumbs | TasteJsonLD)[] => {
    const description = taste.description_company.slice(0, 160);
    const brandUrl = transformNameToUrl(taste.companyName);
    const tasteUrl = transformNameToUrl(taste.name);

    return [
        createJsonBreadcrumb(description, `/partners/${brandUrl}/${tasteUrl}`, [
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Партнеры",
                "item": `${META_DATA.url}/partners`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": taste.companyName,
                "item": `${META_DATA.url}/partners/${brandUrl}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": taste.name,
                "item": `${META_DATA.url}/partners/${brandUrl}/${tasteUrl}`
            },
        ]),
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${taste.name_ru} (${taste.name})`,
            "description": taste.description_company,
            "image": getFullPathImage('d', taste.image_path, taste.image_name_d),
            "brand": {
                "@type": "Brand",
                "name": taste.companyName
            },
            "category": taste.categories.join(', '),
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Крепость",
                    "value": taste.strength
                },
                {
                    "@type": "PropertyValue",
                    "name": "Дымность",
                    "value": taste.smokiness
                },
                {
                    "@type": "PropertyValue",
                    "name": "Жаростойкость",
                    "value": taste.temp
                }
            ]
        }
    ]
}