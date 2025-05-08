import React, {Suspense} from 'react';

import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";
import Preloader from "@components/layout/preloader/preloader";
import {SEOContentGuestsGallery} from "@components/pagesSEO/galleryPhoto";

import {photosTest} from "@components/pages/gallery_photos/devData";

import {jsonLd_gallery_guests, meta_gallery_guests_page} from "../../../metadata/galleryGuests";


export const metadata = meta_gallery_guests_page;

const GalleryGuestPage = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd_gallery_guests)}}
            />
            <SEOContentGuestsGallery/>

            <Suspense fallback={<Preloader/>}>
                <GalleryPhotos title={'Наши гости'} photos={photosTest}/>
            </Suspense>
        </>
    );
};

export default GalleryGuestPage;

export const revalidate = 3600;