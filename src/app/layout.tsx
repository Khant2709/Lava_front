import React from "react";

import Header from "@components/layout/header/header";
import WrapperPreloader from "@components/layout/preloader/wrapperPreloader";
import Footer from "@components/layout/footer/footer";

import AgeWarningModal from "@components/modals/ageWarning/ageWarning";
import BookingModal from "@components/modals/booking/bookingModal";
import DevelopmentModal from "@components/modals/development/developmentModal";

import {WindowWidthProvider} from '@hooks/UseWidth';

import {jsonLD_layout, metaData_layout} from "../metadata/layout";
import {MetaLayout} from "@myTypes/meta/meta";

import "@styles/globals.scss";


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
        <WindowWidthProvider>
            <WrapperPreloader/>
            <DevelopmentModal/>
            <AgeWarningModal/>
            <BookingModal/>
            <Header/>
            {children}
            <Footer/>
        </WindowWidthProvider>
        </body>
        </html>
    );
}
