import React, {Suspense} from 'react';

import Preloader from "@components/layout/preloader/preloader";
import PageError from "@components/ui/error/pageError/pageError";
import ContentTaste from "@components/pages/currentTaste/contentTaste";
import SEOContentTastePage from "@components/pagesSEO/taste";

import {tastesAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {jsonLd_taste, meta_taste_page} from "../../../../metadata/taste";


interface Props {
    params: Promise<{
        name: string;
        taste: string
    }>;
}

export async function generateMetadata({params}: Props) {
    const resolvedParams = await params;
    const taste = await singleRequest(() => tastesAPI.getTaste(resolvedParams.name, resolvedParams.taste));
    return meta_taste_page(taste.data);
}

async function fetchData(namePartner: string, nameTaste: string) {
    return await singleRequest(() => tastesAPI.getTaste(namePartner, nameTaste))
}

const CurrentTastePage = async ({params}: Props) => {
    const resolvedParams = await params;
    const tasteData = await fetchData(resolvedParams.name, resolvedParams.taste);

    if (!checkApiResponses([tasteData]) || !tasteData?.data) return <PageError page={'taste'}/>

    const jsonLD = jsonLd_taste(tasteData.data);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <SEOContentTastePage taste={tasteData.data}/>

            <Suspense fallback={<Preloader/>}>
                <ContentTaste taste={tasteData.data}/>
            </Suspense>
        </>
    );
};

export default CurrentTastePage;

export const revalidate = 3600;