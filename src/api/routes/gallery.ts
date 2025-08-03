import {makeRequest} from "@utils/axios/makeRequest";
import {GalleryItemModel, GalleryModel} from "@myTypes/api/galleryAPI";
import {TIME_CASH} from "@constants/envData";


export const getGallery = async () =>
    makeRequest<GalleryModel[]>("get", '/gallery', null, null, TIME_CASH[60].API);

export const getImagesCategory = async (name: "rooms" | "atmosphere" | "guests") =>
    makeRequest<GalleryItemModel[]>("get", `/gallery/category/${name}`, null, null, TIME_CASH[60].API);
