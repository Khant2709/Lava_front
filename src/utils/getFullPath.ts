import {API_URL_IMAGES} from "@constants/envData";

export const getFullPathImage = (type: 'm' | 'd' | null, imageLink: string, imageName: string) => {
    switch (type){
        case 'm':
            return `${API_URL_IMAGES}${imageLink}mobile/${imageName}`;
        case 'd':
            return `${API_URL_IMAGES}${imageLink}desktop/${imageName}`;
        default:
            return `${API_URL_IMAGES}${imageLink}${imageName}`;
    }
};