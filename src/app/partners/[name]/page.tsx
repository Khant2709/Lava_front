import React, {Suspense} from 'react';

import WrapperCurrentPartner from "@components/pages/currentPartner/wrapperCurrentPartner";
import PageError from "@components/ui/error/pageError/pageError";

import {partnersAPI, categoriesTobaccoAPI} from "@api/api";
import {batchRequest, singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";
import {jsonLd_partner, meta_partner_page} from "../../../metadata/partner";
import Preloader from "@components/layout/preloader/preloader";
import SEOContentPartnerPage from "@components/pagesSEO/partner";


interface Props {
    params: Promise<{ name: string }>;
}

export async function generateMetadata({params}: Props) {
    const resolvedParams = await params;
    const partner = await singleRequest(() => partnersAPI.getCurrentPartner(resolvedParams.name));
    if (checkApiResponses([partner]) && partner.data) {
        return meta_partner_page(partner.data);
    }
}

async function fetchData(name: string) {
    const requests = {
        partnerData: () => partnersAPI.getCurrentPartner(name),
        categoriesData: () => categoriesTobaccoAPI.getCategoriesTobacco(),
    };

    return await batchRequest(requests);
}

const CurrentPartnerPage = async ({params}: Props) => {
    const resolvedParams = await params;
    const {partnerData, categoriesData} = await fetchData(resolvedParams.name);

    if (!checkApiResponses([partnerData]) || !partnerData?.data ||
        !checkApiResponses([categoriesData]) || !categoriesData?.data) {
        return <PageError page={'partner'}/>
    }

    const jsonLD = jsonLd_partner(partnerData.data);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <SEOContentPartnerPage partner={partnerData.data}/>

            <Suspense fallback={<Preloader/>}>
                <WrapperCurrentPartner currentPartner={partnerData.data} categoriesTobacco={categoriesData.data}/>
            </Suspense>
        </>
    );
};

export default CurrentPartnerPage;

export const revalidate = 3600;