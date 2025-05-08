import React, {Suspense} from 'react';

import WrapperPartners from "@components/pages/partners/wrapperPartners";
import PageError from "@components/ui/error/pageError/pageError";

import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {partnersAPI} from "@api/api"
import {jsonLd_partners, meta_partners_page} from "../../metadata/partners";
import Preloader from "@components/layout/preloader/preloader";
import SEOContentPartnersPage from "@components/pagesSEO/partners";

export const metadata = meta_partners_page;

async function fetchData() {
    return await singleRequest(() => partnersAPI.getPartners());
}

export default async function PartnersPage() {
    const partnersData = await fetchData();

    if (!checkApiResponses([partnersData]) || !partnersData?.data) return <PageError page={'partners'}/>

    const jsonLD = jsonLd_partners(partnersData.data);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <SEOContentPartnersPage partners={partnersData.data}/>

            <Suspense fallback={<Preloader/>}>
                <WrapperPartners partners={partnersData.data}/>
            </Suspense>
        </>
    );
};

export const revalidate = 3600;