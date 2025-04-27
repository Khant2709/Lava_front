import React from 'react';
import WrapperArticles from "@components/pages/articles/wrapperArticles";
import {singleRequest} from "@utils/axios/request";
import {articlesAPI} from "@api/api";
import {checkApiResponses} from "@utils/checkStatusResponse";
import PageError from "@components/ui/error/pageError/pageError";

async function fetchData() {
    return await singleRequest(() => articlesAPI.getArticles())
}

export default async function ArticlesPage() {
    const articlesData = await fetchData();

    if (!checkApiResponses([articlesData]) || !articlesData?.data) return <PageError page={'articles'}/>

    return (
        <WrapperArticles articles={articlesData.data}/>
    );
};

