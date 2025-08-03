'use client'

import React from 'react';

import DesktopVersion from "./desktopVersion/desktopVersion";
import MobileVersion from "./mobileVersion/mobileVersion";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import {useWindowWidth} from "@hooks/UseWidth";

import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {GalleryModel} from "@myTypes/api/galleryAPI";

interface Props {
    gallery: GalleryModel[]
}

const WrapperGallery: React.FC<Props> = ({gallery}) => {
    const width = useWindowWidth();
    usePreloaderStop();
    useClearSessionError('gallery');

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Галерея кальянной Лава'}/>
            {!!width && width > 600
                ? <DesktopVersion galleryItems={gallery}/>
                : <MobileVersion galleryItems={gallery}/>
            }
        </SectionWrapper>
    );
};

export default WrapperGallery;