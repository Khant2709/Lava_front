'use client'

import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Image from "next/image";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import {useWindowWidth} from "@hooks/UseWidth";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {useClearSessionError} from "@hooks/useClearSessionError";

import {getFullPathImage} from "@utils/getFullPath";
import {GalleryItemModel} from "@myTypes/api/galleryAPI";

import styles from './galleryPhotos.module.scss';


interface Props {
    title: string;
    photos: GalleryItemModel[];
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
                    {photos.map((photo) => {
                        return <Image key={`photo_${photo.id}`}
                                      src={getFullPathImage('m', photo.image_path, photo.image_name_m)}
                                      width={480}
                                      height={427}
                                      alt={`фотография ${title} №${photo.id}`}
                                      className={styles.image}/>
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </SectionWrapper>
    );
};

export default GalleryPhotos;