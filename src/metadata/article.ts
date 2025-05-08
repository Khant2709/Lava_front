import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {ArticleModel} from "@myTypes/api/articlesAPI";
import {JsonLDArticlesPage} from "@myTypes/meta/article";
import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";

import {META_DATA} from "./constants";


const TITLE = 'Статьи о кальянах, табаках и культуре курения — Lava Lounge Краснодар';
const DESCRIPTION = 'Читайте экспертные статьи от Lava Lounge: всё о кальянах, лучших табаках, уходе за шахтой, культуре курения и новинках индустрии. Узнайте больше и улучшите свой кальянный опыт.';
const KEYWORDS = [
    'статьи о кальянах',
    'блог кальянной',
    'кальянный табак советы',
    'уход за кальяном',
    'лучшие кальяны 2025',
    'новости кальянной индустрии',
    'кальянная культура',
    'Lava Lounge блог',
    'новинки табаков для кальяна',
    'мероприятия кальянной индустрии'
];

export const meta_articles_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/articles',
    'Превью картинка для Главной страницы заведения Lava Lounge',
    'previewArticles1200x630.webp',
    'previewArticles800x800.webp',
    'previewArticles1080x1920.webp',
);

export const jsonLd_articles = (articles: ArticleModel[]): (JsonLDBreadcrumbs | JsonLDArticlesPage)[] => [
    createJsonBreadcrumb(TITLE, '/articles', [{
        "@type": "ListItem",
        "position": 2,
        "name": "Статьи",
        "item": `${META_DATA.url}/articles`
    }]),
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Статьи о кальянах от Lava Lounge",
        "description": "Собрание экспертных статей о кальянах, табаках, уходе и культуре курения от кальянной Lava Lounge в Краснодаре.",
        "url": `${META_DATA.url}/articles`,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": articles.map((article) => ({
                "@type": "Article",
                "headline": article.title,
                "url": `${META_DATA.url}/articles/${article.id}`,
                "datePublished": String(article.modified_at).split('T')[0],
                "author": {
                    "@type": "Organization",
                    "name": "Lava Lounge",
                    "logo": {
                        "@type": "ImageObject",
                        "url": META_DATA.urlLogo
                    }
                }
            }))
        }
    }
];