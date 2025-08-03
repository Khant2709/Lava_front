import React, {Suspense} from 'react';

import PageError from "@components/ui/error/pageError/pageError";
import Preloader from "@components/layout/preloader/preloader";
import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";

import {galleryAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {jsonLd_gallery_atmosphere, meta_gallery_atmosphere_page} from "../../../metadata/galleryAtmosphere";
import {checkApiResponses} from "@utils/checkStatusResponse";


export const metadata = meta_gallery_atmosphere_page;

async function fetchData() {
    return await singleRequest(() => galleryAPI.getImagesCategory('atmosphere'))
}

const GalleryAtmospherePage: React.FC = async () => {
    const images = await fetchData();

    if (!checkApiResponses([images]) || !images?.data) {
        return <PageError page={'gallery_next'}/>
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd_gallery_atmosphere)}}
            />

            <Suspense fallback={<Preloader/>}>
                <GalleryPhotos title={'Атмосфера в кальянной Lava'} photos={images.data}/>
            </Suspense>
        </>
    );
};

export default GalleryAtmospherePage;

export const revalidate = 3600;