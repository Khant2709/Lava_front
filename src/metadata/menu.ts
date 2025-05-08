import {META_DATA} from "./constants";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";
import {MenuItemModel} from "@myTypes/api/menuAPI";
import {JsonLDMenuPage} from "@myTypes/meta/menu";


const TITLE = 'Меню кальянной Lava Lounge в Краснодаре';
const DESCRIPTION = 'Ознакомьтесь с меню кальянной Lava Lounge: цены на кальяны, авторские чаи, напитки и многое другое. Выгодные предложения, вкусные напитки и выгодная цена.';
const KEYWORDS = [
    'меню кальянной Краснодар',
    'меню кальянной Lava Lounge',
    'цены на кальян',
    'акции кальянной краснодар',
    'авторские чаи и лимонады',
    'выгодные предложения кальянной Краснодар',
    'Lava Lounge Краснодар',
    'кальянная Lava Lounge',
    'кальянная Лава',
    'кальянная Лава Краснодар',
];

export const meta_menu_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/menu',
    'Превью картинка для страницы Меню заведения Lava Lounge',
    'previewMenu1200x630.webp',
    'previewMenu800x800.webp',
    'previewMenu1080x1920.webp',
);

export const jsonLD_menu = (positionMenu: MenuItemModel[]): (JsonLDBreadcrumbs | JsonLDMenuPage)[] => {
    return [
        createJsonBreadcrumb(TITLE, '/menu', [{
            "@type": "ListItem",
            "position": 2,
            "name": "Меню",
            "item": `${META_DATA.url}/menu`
        }]),
        {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: TITLE,
            url: `${META_DATA.url}/menu`,
            itemListElement: positionMenu.map((item) => ({
                "@type": "Offer",
                name: item.name,
                description: item?.description || '',
                price: String(item.price),
                priceCurrency: "RUB"
            }))
        }
    ]
}