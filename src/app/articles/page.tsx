import React, {Suspense} from 'react';

import Preloader from "@components/layout/preloader/preloader";
import PageError from "@components/ui/error/pageError/pageError";
import WrapperArticles from "@components/pages/articles/wrapperArticles";

import {articlesAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {jsonLd_articles, meta_articles_page} from "../../metadata/article";


export const metadata = meta_articles_page;

async function fetchData() {
    return await singleRequest(() => articlesAPI.getArticles())
}

export default async function ArticlesPage() {
    const articlesData = await fetchData();

    if (!checkApiResponses([articlesData]) || !articlesData?.data) return <PageError page={'articles'}/>

    const jsonLd = jsonLd_articles(articlesData.data);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <Suspense fallback={<Preloader/>}>
                <WrapperArticles articles={articlesData.data}/>
            </Suspense>
        </>
    );
};

export const revalidate = 3600;