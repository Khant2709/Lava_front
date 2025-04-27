import React from 'react';

import WrapperPartners from "@components/pages/partners/wrapperPartners";
import PageError from "@components/ui/error/pageError/pageError";

import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {partnersAPI} from "@api/api"

async function fetchData() {
    return await singleRequest(() => partnersAPI.getPartners());
}

export default async function PartnersPage() {
    const partnersData = await fetchData();

    if (!checkApiResponses([partnersData]) || !partnersData?.data) return <PageError page={'partners'}/>

    return (
        <WrapperPartners partners={partnersData.data}/>
    );
};

