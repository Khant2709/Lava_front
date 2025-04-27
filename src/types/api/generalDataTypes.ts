export interface GeneralDataModel {
    id: number;
    phone: string;
    telegram: string;
    email: string;
    address: string;
    address_link: string;
    working_hours: string;
    instagram: string;
    vk: string;
    yandex_rating: number;
    yandex_reviews: number;
    yandex_link: string;
    google_rating: number;
    google_reviews: number;
    google_link: string;
    gis_rating: number;
    gis_reviews: number;
    gis_link: string;
}

export interface ContactsModel {
    phone: string;
    telegram: string;
    email: string;
    address: string;
    address_link: string;
    working_hours: string;
}

export interface PromotionsModel {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}

export interface AdvantageItemModel {
    id: number;
    advantage_id: number;
    text: string;
    priority: number;
}

export interface AdvantageModel {
    id: number;
    title: string;
    subtitle: string;
}

export interface AdvantagesModel extends AdvantageModel {
    list: AdvantageItemModel[]
}
