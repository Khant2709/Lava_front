import React, {Suspense} from 'react';

import WrapperGalleryRooms from "@components/pages/gallery_room/wrapperGalleryRooms";
import PageError from "@components/ui/error/pageError/pageError";
import SEOContentRoomsPage from "@components/pagesSEO/rooms";
import Preloader from "@components/layout/preloader/preloader";

import {roomsAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {jsonLD_rooms, meta_rooms_page} from "../../metadata/rooms";


export const metadata = meta_rooms_page;

async function fetchData() {
    return await singleRequest(() => roomsAPI.getRooms());
}

const RoomsPage = async () => {
    const roomsData = await fetchData();

    if (!checkApiResponses([roomsData]) || !roomsData?.data) {
        return <PageError page={'rooms'}/>
    }

    const jsonLD = jsonLD_rooms(roomsData.data);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <SEOContentRoomsPage rooms={roomsData.data}/>

            <Suspense fallback={<Preloader/>}>
                <WrapperGalleryRooms rooms={roomsData.data}/>
            </Suspense>
        </>
    );
};

export default RoomsPage;

export const revalidate = 3600;