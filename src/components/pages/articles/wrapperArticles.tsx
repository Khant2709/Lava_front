'use client'

import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import ContentArticles from "./contentArticles/contentArticles";

import {ArticleModel} from "@myTypes/api/articlesAPI";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";

interface Props {
    articles: ArticleModel[]
}

const WrapperArticles: React.FC<Props> = ({articles}) => {
    useClearSessionError('articles');
    usePreloaderStop();

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Кальянные статьи, советы и события'}/>
            <ContentArticles articles={articles}/>
        </SectionWrapper>
    );
};

export default WrapperArticles;