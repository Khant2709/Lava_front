import React, {Suspense} from 'react';

import WrapperMenu from "@components/pages/menu/wrapperMenu";
import PageError from "@components/ui/error/pageError/pageError";

<<<<<<< HEAD
import {batchRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {generalDataAPI, menuAPI} from "@api/api"
import {jsonLD_menu, meta_menu_page} from "../../metadata/menu";
=======
import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {menuAPI} from "@api/api"
import {jsonLD_menu, meta_menu_page} from "../../metadata/menu";
// import SEOContentMenuPage from "@components/pagesSEO/menu";
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce
import {MenuItemModel} from "@myTypes/api/menuAPI";
import Preloader from "@components/layout/preloader/preloader";

export const metadata = meta_menu_page;

async function fetchData() {
<<<<<<< HEAD
    const requests = {
        promotionsData: () => generalDataAPI.getPromotionsData(),
        menuData: () => menuAPI.getMenuData()
    }
    return await batchRequest(requests);
}

export default async function MenuPage() {
    const {promotionsData, menuData} = await fetchData();

    if (!checkApiResponses([menuData, promotionsData]) || !menuData?.data) return <PageError page={'menu'}/>
=======
    return await singleRequest(() => menuAPI.getMenuData())
}

export default async function MenuPage() {
    const menuData = await fetchData();

    if (!checkApiResponses([menuData]) || !menuData?.data) return <PageError page={'menu'}/>
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce

    const positionMenu: MenuItemModel[] = [];
    menuData.data.forEach(category => positionMenu.push(...category.products));

    const jsonLd = jsonLD_menu(positionMenu);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
<<<<<<< HEAD
            <Suspense fallback={<Preloader/>}>
                <WrapperMenu menu={menuData.data} promotions={promotionsData.data}/>
=======
            {/*<SEOContentMenuPage menu={menuData.data}/>*/}

            <Suspense fallback={<Preloader/>}>
                <WrapperMenu menu={menuData.data}/>
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce
            </Suspense>
        </>
    );
};

export const revalidate = 3600;