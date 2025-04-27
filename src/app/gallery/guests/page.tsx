import React from 'react';
import {photosTest} from "@components/pages/gallery_photos/devData";
import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";

const GalleryGuestPage = () => {
    return (
        <GalleryPhotos title={'Наши гости'} photos={photosTest}/>
    );
};

export default GalleryGuestPage;