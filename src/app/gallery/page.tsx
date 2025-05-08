import React, {Suspense} from 'react';
import WrapperGallery from "@components/pages/gallery/wrapperGallery";
import Preloader from "@components/layout/preloader/preloader";
import {jsonLD_gallery, meta_gallery_page} from "../../metadata/gallery";
import SEOContentGalleryPage from "@components/pagesSEO/gallery";

export const metadata = meta_gallery_page;

const GalleryPage: React.FC = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD_gallery)}}
            />
            <SEOContentGalleryPage/>
            <Suspense fallback={<Preloader/>}>
                <WrapperGallery/>
            </Suspense>
        </>
    );
};

export default GalleryPage;

export const revalidate = 3600;