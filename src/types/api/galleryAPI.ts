export type CategoryGallery = 'rooms' | 'atmosphere' | 'guests';

export interface GalleryModel {
    id: number;
    title: string;
    slug: CategoryGallery;
    image_path: string;
    image_preview_name_d: string;
    image_preview_name_m: string;
}

export interface GalleryItemModel {
    id: number;
    gallery_id: number;
    room_id: number | null;
    image_path: string;
    image_name_d: string;
    image_name_m: string;
    priority: number;
}