'use client'

import React from 'react';
import {useRouter} from "next/navigation";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import Carousel from "@components/pages/partners/carousel/carousel";
import ContainerPartners from "@components/pages/partners/containerPartners/containerPartners";

import {logoPartners, textPartners} from "./devData";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {PartnersModel} from "@myTypes/api/partnersAPI";

interface Props {
    partners: PartnersModel[];
}

const WrapperPartners: React.FC<Props> = ({partners}) => {
    const route = useRouter();
    useClearSessionError('partners');
    usePreloaderStop();

    const openPartner = (name: string) => {
        const splitName = name.split(' ');
        const checkName = splitName.length > 1 ? splitName.join('_') : name;
        route.push(`/partners/${checkName}`)
    }
    console.log(partners.length)
    return (
        <SectionWrapper needMarginTop={true}>
            <Carousel partners={partners}/>
            <Title Tag={'h1'} text={'Наши партнеры'}/>
            <ContainerPartners text={textPartners} partners={logoPartners} openPartner={openPartner}/>
        </SectionWrapper>
    );
};

export default WrapperPartners;