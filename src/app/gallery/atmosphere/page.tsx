import React, {Suspense} from 'react';

import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";
import Preloader from "@components/layout/preloader/preloader";
import {SEOContentAtmosphereGallery} from "@components/pagesSEO/galleryPhoto";

import {photosTest} from "@components/pages/gallery_photos/devData";

import {jsonLd_gallery_atmosphere, meta_gallery_atmosphere_page} from "../../../metadata/galleryAtmosphere";


export const metadata = meta_gallery_atmosphere_page;

const GalleryAtmospherePage: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd_gallery_atmosphere)}}
            />
            <SEOContentAtmosphereGallery/>

            <Suspense fallback={<Preloader/>}>
                <GalleryPhotos title={'Атмосфера'} photos={photosTest}/>
            </Suspense>
        </>
    );
};

export default GalleryAtmospherePage;

export const revalidate = 3600;