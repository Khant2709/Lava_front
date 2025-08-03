import React, {Suspense} from "react"

import WrapperHomePage from "@components/pages/home/wrapperHomePage";
import PageError from "@components/ui/error/pageError/pageError";

import {generalDataAPI, menuAPI} from "@api/api"

import {batchRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {jsonLD_home, meta_home_page} from "../metadata/home";
import Preloader from "@components/layout/preloader/preloader";


export const metadata = meta_home_page;

const createRatingData = (name: string, rating: number, reviewsCount: number, link: string) => ({
    name, rating, reviewsCount, link
})

async function fetchData() {
    const requests = {
        generalData: () => generalDataAPI.getGeneralData(),
        promotionsData: () => generalDataAPI.getPromotionsData(),
        advantagesData: () => generalDataAPI.getAdvantagesData(),
        menuData: () => menuAPI.getMenuShortData(),
    };

    return await batchRequest(requests);
}

export default async function Home() {
    const {generalData, promotionsData, advantagesData, menuData} = await fetchData();
    const checkResponses = checkApiResponses([generalData, promotionsData, advantagesData, menuData]);

    if (!checkResponses || !generalData?.data || !promotionsData?.data || !advantagesData?.data || !menuData?.data) {
        return <PageError page={'home'}/>
    }


    const {
        phone,
        telegram,
        email,
        address,
        address_link,
        working_hours,
        yandex_rating,
        yandex_reviews,
        yandex_link,
        google_rating,
        google_reviews,
        google_link,
        gis_rating,
        gis_reviews,
        gis_link,
    } = generalData.data;

    const mapsRating = [
        createRatingData('Yandex карты', yandex_rating, yandex_reviews, yandex_link),
        createRatingData('Google карты', google_rating, google_reviews, google_link),
        createRatingData('2гис карты', gis_rating, gis_reviews, gis_link),
    ];

    const contacts = {phone, telegram, email, address, address_link, working_hours};

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD_home)}}
            />

            <Suspense fallback={<Preloader/>}>
                <WrapperHomePage
                    promotions={promotionsData.data}
                    advantages={advantagesData.data}
                    menu={menuData.data}
                    mapsRating={mapsRating}
                    contacts={contacts}
                />
            </Suspense>
        </>
    );
}

export const revalidate = 3600;