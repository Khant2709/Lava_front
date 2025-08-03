import React, {Suspense} from 'react';

import PageError from "@components/ui/error/pageError/pageError";
import Preloader from "@components/layout/preloader/preloader";
import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";

import {galleryAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {jsonLd_gallery_guests, meta_gallery_guests_page} from "../../../metadata/galleryGuests";
import {checkApiResponses} from "@utils/checkStatusResponse";


export const metadata = meta_gallery_guests_page;

async function fetchData() {
    return await singleRequest(() => galleryAPI.getImagesCategory('guests'))
}

const GalleryGuestPage: React.FC = async () => {
    const images = await fetchData();

    if (!checkApiResponses([images]) || !images?.data) {
        return <PageError page={'gallery_next'}/>
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd_gallery_guests)}}
            />
            <Suspense fallback={<Preloader/>}>
                <GalleryPhotos title={'Фотографии гостей Lava Lounge'} photos={images.data}/>
            </Suspense>
        </>
    );
};

export default GalleryGuestPage;

export const revalidate = 3600;