import React, {Suspense} from 'react';
import WrapperGallery from "@components/pages/gallery/wrapperGallery";
import Preloader from "@components/layout/preloader/preloader";
import {jsonLD_gallery, meta_gallery_page} from "../../metadata/gallery";
import SEOContentGalleryPage from "@components/pagesSEO/gallery";
import {singleRequest} from "@utils/axios/request";
import PageError from "@components/ui/error/pageError/pageError";
import {checkApiResponses} from "@utils/checkStatusResponse";
import {galleryAPI} from "@api/api";


export const metadata = meta_gallery_page;

async function fetchData() {
    return await singleRequest(() => galleryAPI.getGallery())
}

const GalleryPage: React.FC = async () => {
    const gallery = await fetchData();

    if (!checkApiResponses([gallery]) || !gallery?.data) {
        return <PageError page={'gallery'}/>
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD_gallery)}}
            />
            <SEOContentGalleryPage/>
            <Suspense fallback={<Preloader/>}>
                <WrapperGallery gallery={gallery.data}/>
            </Suspense>
        </>
    );
};

export default GalleryPage;

export const revalidate = 3600;