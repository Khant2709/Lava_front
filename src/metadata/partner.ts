import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {getFullPathImage} from "@utils/getFullPath";
import {transformNameToUrl} from "@utils/nameUrlTransform";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {CurrentPartnerModel, PartnersModel} from "@myTypes/api/partnersAPI";

import {META_DATA} from "./constants";
import {PartnerBrand, PartnerItemList} from "@myTypes/meta/partner";


const TITLE = (name: string) => `Табак ${name}`;
const KEYWORDS = (name: string) => [
    'Качественный табак для кальяна',
    'лучший табак для кальяна',
    'табак Lava Lounge',
    `Табак для кальяна ${name}`,
    `табачный бренд для кальяна ${name}`,
    `бренд табака ${name}`,
    `${name}`,
    `вкусы табака ${name}`,
    `${name} вкусы`
];

export const meta_partner_page = (partner: PartnersModel): MetaPage => {
    return createMetaDataPage(
        TITLE(partner.name),
        partner.short_description,
        KEYWORDS(partner.name),
        `/partners/${transformNameToUrl(partner.name)}`,
        `логотип табака ${partner.name}`,
        null,
        getFullPathImage('d', partner.image_path, partner.logo_image_d),
        null,
    );
}

export const jsonLd_partner = (partner: CurrentPartnerModel): (JsonLDBreadcrumbs | PartnerBrand | PartnerItemList)[] => {
    const url = transformNameToUrl(partner.name)
    return [
        createJsonBreadcrumb(partner.short_description, `/partners/${url}`, [
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Партнеры",
                "item": `${META_DATA.url}/partners`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": partner.name,
                "item": `${META_DATA.url}/partners/${url}`
            }
        ]),
        {
            "@context": "https://schema.org",
            "@type": "Brand",
            "name": partner.name,
            "description": partner.short_description,
            "logo": getFullPathImage('d', partner.image_path, partner.logo_image_d),
            "url": `${META_DATA.url}/partners/${url}`
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `Вкусы табака ${partner.name}`,
            "itemListElement": partner.tastes.map((taste) => ({
                "@type": "Product",
                "name": `${taste.name} - ${taste.name_ru}`,
                "image": getFullPathImage('d', taste.image_path, taste.image_name_d),
                "description": taste.description_company,
                "brand": {
                    "@type": "Brand",
                    "name": partner.name
                }
            }))
        }
    ]
}