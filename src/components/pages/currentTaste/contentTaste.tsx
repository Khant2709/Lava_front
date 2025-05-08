'use client'

import React, {useMemo} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import InformationTaste from "./informationTaste/informationTaste";
import DescriptionTaste from "@components/pages/currentTaste/descriptionTaste/descriptionTaste";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {TasteFullModel} from "@myTypes/api/tastesAPI";
import {getFullPathImage} from "@utils/getFullPath";
import {useWindowWidth} from "@hooks/UseWidth";

interface Props {
    taste: TasteFullModel;
}

const TYPE = {
    mono: 'Моно',
    mix: 'Микс',
}

const ContentTaste: React.FC<Props> = ({taste}) => {
    useClearSessionError('taste');
    usePreloaderStop();
    const width = useWindowWidth();

    const optionImage = useMemo<{ size: number; type: 'm' | 'd' }>(() => {
        if (!width || width > 480) {
            return {size: 450, type: 'd'}
        }

        return {size: 304, type: 'm'}
    }, [width])

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={taste.name}/>
            <InformationTaste
                brand={taste.companyName}
                name={taste.name}
                name_ru={taste.name_ru}
                type={TYPE[taste.type]}
                strength={taste.strength}
                smokiness={taste.smokiness}
                temp={taste.temp}
                category={taste.categories}
                image={getFullPathImage(optionImage.type, taste.image_path, taste.image_name_d)}
                size={optionImage.size}
            />
            <Title Tag={'h2'} text={'Описание'}/>
            <DescriptionTaste descriptionCompany={taste.description_company} descriptionLava={taste.description_lava}/>
        </SectionWrapper>
    );
};

export default ContentTaste;