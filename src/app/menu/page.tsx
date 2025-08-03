import React, {Suspense} from 'react';

import WrapperMenu from "@components/pages/menu/wrapperMenu";
import PageError from "@components/ui/error/pageError/pageError";

import {batchRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {generalDataAPI, menuAPI} from "@api/api"
import {jsonLD_menu, meta_menu_page} from "../../metadata/menu";
import {MenuItemModel} from "@myTypes/api/menuAPI";
import Preloader from "@components/layout/preloader/preloader";

export const metadata = meta_menu_page;

async function fetchData() {
    const requests = {
        promotionsData: () => generalDataAPI.getPromotionsData(),
        menuData: () => menuAPI.getMenuData()
    }
    return await batchRequest(requests);
}

export default async function MenuPage() {
    const {promotionsData, menuData} = await fetchData();

    if (!checkApiResponses([menuData, promotionsData]) || !menuData?.data) return <PageError page={'menu'}/>

    const positionMenu: MenuItemModel[] = [];
    menuData.data.forEach(category => positionMenu.push(...category.products));

    const jsonLd = jsonLD_menu(positionMenu);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <Suspense fallback={<Preloader/>}>
                <WrapperMenu menu={menuData.data} promotions={promotionsData.data}/>
            </Suspense>
        </>
    );
};

export const revalidate = 3600;