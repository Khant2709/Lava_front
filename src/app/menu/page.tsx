import React, {Suspense} from 'react';

import WrapperMenu from "@components/pages/menu/wrapperMenu";
import PageError from "@components/ui/error/pageError/pageError";

import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {menuAPI} from "@api/api"
import {jsonLD_menu, meta_menu_page} from "../../metadata/menu";
// import SEOContentMenuPage from "@components/pagesSEO/menu";
import {MenuItemModel} from "@myTypes/api/menuAPI";
import Preloader from "@components/layout/preloader/preloader";

export const metadata = meta_menu_page;

async function fetchData() {
    return await singleRequest(() => menuAPI.getMenuData())
}

export default async function MenuPage() {
    const menuData = await fetchData();

    if (!checkApiResponses([menuData]) || !menuData?.data) return <PageError page={'menu'}/>

    const positionMenu: MenuItemModel[] = [];
    menuData.data.forEach(category => positionMenu.push(...category.products));

    const jsonLd = jsonLD_menu(positionMenu);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            {/*<SEOContentMenuPage menu={menuData.data}/>*/}

            <Suspense fallback={<Preloader/>}>
                <WrapperMenu menu={menuData.data}/>
            </Suspense>
        </>
    );
};

export const revalidate = 3600;