import {META_DATA} from "./constants";
import {JsonLDWebSite, MetaLayout} from "@myTypes/meta/meta";

export const metaData_layout: MetaLayout = {
    site_name: META_DATA.siteName,                                                                                      // Название сайта (может показываться в превью или агрегаторах).
    generator: "Next.js",                                                                                               // CMS/движок сайта (для информации, не влияет на SEO).
    applicationName: META_DATA.siteName,                                                                                // Имя веб-приложения, иногда используется в браузерах.
    referrer: "origin-when-cross-origin",                                                                               // Контроль, как браузер передаёт Referer.
    authors: META_DATA.authors,                                                                                         // Авторы контента сайта (используется в микроразметке).
    creator: META_DATA.meName,                                                                                          // Создатель сайта (или статьи, если мета используется на уровне страницы).
    publisher: META_DATA.siteName,                                                                                      // Издатель ресурса (может дублировать site_name).
    formatDetection: {                                                                                                  // Управление автораспознаванием номера телефона, email и адреса на мобильных.
        email: false,
        address: false,
        telephone: false,
    },
    icons: {                                                                                                            // Набор иконок для браузеров, Apple устройств, Android и т.п.
        icon: [
            {url: `${META_DATA.url}/favicon.ico`, type: "image/x-icon"},
            {url: `${META_DATA.url}/favicon.svg`, type: "image/svg+xml"}, // 👈 для Яндекса
            {url: `${META_DATA.url}/favicon32.png`, type: "image/png", sizes: "32x32"},
            {url: `${META_DATA.url}/favicon120.png`, type: "image/png", sizes: "120x120"},
        ],
        shortcut: {
            url: `${META_DATA.url}/favicon192.png`,
            type: "image/png",
            width: 192,
            height: 192,
        },
        apple: {
            url: `${META_DATA.url}/favicon180.png`,
            type: "image/png",
            width: 180,
            height: 180,
        },
        other: {
            rel: "apple-touch-icon-precomposed",
            url: `${META_DATA.url}/favicon180.png`,
            type: "image/png",
            width: 180,
            height: 180,
        },
    },
    verification: {                                                                                                     // Метки для подтверждения владения сайтом в Google/Yandex.
        google: "", // Добавьте после регистрации
        yandex: "f18f37ba373556cb", // Добавьте после регистрации
        other: {
            me: [META_DATA.meEmail],
        },
    },
    assets: [                                                                                                           // (Не стандарт) — твоя вспомогательная логика. (не нужно)
        `${META_DATA.url}/public`,
        `${META_DATA.url}/sitemap.xml`,
        `${META_DATA.url}/robots.txt`,
    ],
    category: "entertainment",                                                                                          // Тематика сайта (необязательно, но полезно).
    robots: {                                                                                                           // Поведение поисковых ботов.
        index: true,
        follow: true,
        googleBot: {index: true, follow: true},
        yandexBot: {index: true, follow: true},
    },
    metadataBase: new URL(META_DATA.url),                                                                               // Базовый URL сайта, нужен Next.js для генерации абсолютных ссылок.
};

export const jsonLD_layout: JsonLDWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: META_DATA.siteName,
    url: META_DATA.url,
}