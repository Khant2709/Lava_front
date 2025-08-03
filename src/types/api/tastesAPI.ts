export interface TasteModel {
    id: number;
    partner_id: number;
    name: string;
    name_ru: string;
    type: 'mono' | 'mix';
    strength: number;
    smokiness: number;
    temp: number;
    description_company: string;
    description_lava: string;
    image_path: string;
    image_name_d: string;
    image_name_m: string;
    is_new: 0 | 1;
    category: number[] | null;
}

export interface TasteFullModel extends TasteModel {
    companyName: string;
    categories: string[];
}

export interface AllTastesModel {
    id: number;
    partner_name: string;
    name: string;
}