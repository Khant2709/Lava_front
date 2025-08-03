import React from "react";
import Script from "next/script";

import Header from "@components/layout/header/header";
import WrapperPreloader from "@components/layout/preloader/wrapperPreloader";
import Footer from "@components/layout/footer/footer";

import {WindowWidthProvider} from '@hooks/UseWidth';

import {jsonLD_layout, metaData_layout} from "../metadata/layout";
import {MetaLayout} from "@myTypes/meta/meta";

import "@styles/globals.scss";
import ModalProvider from "@components/modals/modalProvider/modalProvider";


export const metadata: MetaLayout = metaData_layout;

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD_layout)}}
            />
        </head>
        <body>
        {/* Яндекс.Метрика */}
        <Script strategy="afterInteractive" src="https://mc.yandex.ru/metrika/tag.js"/>
        <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103496092', 'ym');

    ym(103496092, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
                `,
            }}
        />
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/103496092" style={{position: "absolute", left: "-9999px"}}
                      alt=""/></div>
        </noscript>

        <WindowWidthProvider>
            <WrapperPreloader/>
            <ModalProvider/>
            <Header/>
            {children}
            <Footer/>
        </WindowWidthProvider>
        </body>
        </html>
    );
}
