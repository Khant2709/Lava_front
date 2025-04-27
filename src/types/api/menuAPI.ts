export interface MenuItemModel {
    id: number;
    menu_id: number;
    name: string;
    price: number;
    description: string;
    priority: number;
}

export interface MenuModel {
    id: number;
    title: string;
    short_description: string;
    note: string;
    priority: number;
    image_path: string;
    image_preview_name_d: string;
    image_preview_name_m: string;
    image_bg_name_d: string;
    image_bg_name_m: string;
}

export interface MenuFullModel extends MenuModel {
    products: MenuItemModel[]
}