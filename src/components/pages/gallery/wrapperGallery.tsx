'use client'

import React from 'react';
import {useRouter} from "next/navigation";

import DesktopVersion from "./desktopVersion/desktopVersion";
import MobileVersion from "./mobileVersion/mobileVersion";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import {useWindowWidth} from "@hooks/UseWidth";

import {devGalleryCategory} from "./devData";


const WrapperGallery: React.FC = () => {
    const router = useRouter();
    const width = useWindowWidth();


    const openGallery = (link: string) => {
        router.push(`/gallery/${link}`)
    }

    if (!width) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Галерея'}/>
            {width > 600
                ? <DesktopVersion galleryItems={devGalleryCategory} openGallery={openGallery}/>
                : <MobileVersion galleryItems={devGalleryCategory} openGallery={openGallery}/>
            }
        </SectionWrapper>
    );
};

export default WrapperGallery;