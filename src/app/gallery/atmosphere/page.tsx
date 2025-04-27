import React from 'react';
import GalleryPhotos from "@components/pages/gallery_photos/galleryPhotos";
import {photosTest} from "@components/pages/gallery_photos/devData";

const GalleryAtmospherePage: React.FC = () => {
    return (
        <GalleryPhotos title={'Атмосфера'} photos={photosTest}/>
    );
};

export default GalleryAtmospherePage;