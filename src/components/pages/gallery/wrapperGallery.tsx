'use client'

import React from 'react';
import {useRouter} from "next/navigation";

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
    const router = useRouter();
    const width = useWindowWidth();
    usePreloaderStop();
    useClearSessionError('gallery');


    const openGallery = (link: string) => {
        const fullLink = link === 'rooms' ? `/${link}` : `/gallery/${link}`;
        router.push(fullLink);
    }

    if (!width) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Галерея'}/>
            {width > 600
                ? <DesktopVersion galleryItems={gallery} openGallery={openGallery}/>
                : <MobileVersion galleryItems={gallery} openGallery={openGallery}/>
            }
        </SectionWrapper>
    );
};

export default WrapperGallery;