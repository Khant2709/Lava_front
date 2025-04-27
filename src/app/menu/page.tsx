import React from 'react';

import WrapperMenu from "@components/pages/menu/wrapperMenu";
import PageError from "@components/ui/error/pageError/pageError";

import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {menuAPI} from "@api/api"


async function fetchData() {
    return await singleRequest(() => menuAPI.getMenuData())
}

export default async function MenuPage() {
    const menuData = await fetchData();

    if (!checkApiResponses([menuData]) || !menuData?.data) return <PageError page={'menu'}/>

    return (
        <WrapperMenu menu={menuData.data}/>
    );
};

export const revalidate = 3600;