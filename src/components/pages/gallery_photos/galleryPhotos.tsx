'use client'

import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image, {StaticImageData} from "next/image";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";


import styles from './galleryPhotos.module.scss';
import {useWindowWidth} from "@hooks/UseWidth";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {useClearSessionError} from "@hooks/useClearSessionError";

interface Props {
    title: string;
    photos: StaticImageData[];
}

const GalleryPhotos: React.FC<Props> = ({title, photos}) => {
    const width = useWindowWidth();
    usePreloaderStop();
    useClearSessionError('gallery_next');

    if (!width) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={title}/>
            <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 480: 2, 768: 3}}>
                <Masonry>
                    {photos.map((photo, i) => {
                        return <Image key={`photo_${i}`} src={photo} alt={`photo_${i}`} className={styles.image}/>
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </SectionWrapper>
    );
};

export default GalleryPhotos;