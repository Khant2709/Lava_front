import {TasteModel} from "@myTypes/api/tastesAPI";

export interface PartnersModel {
    id: number;
    name: string;
    name_ru: string;
    short_description: string;
    description: string;
    image_path: string;
    logo_image_d: string;
    logo_image_m: string;
}

export interface CurrentPartnerModel extends PartnersModel {
    tastes: TasteModel[];
}