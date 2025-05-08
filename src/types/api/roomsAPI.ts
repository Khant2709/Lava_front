export type roomID = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface RoomModel {
    id: roomID;
    title: string;
    max_persons: number;
    description: string | null;
    amenities: string[] | [];
    rules: string[] | [];
    images: {
        id: number;
        image_path: string;
        image_name_d: string;
        image_name_m: string;
        priority: number
    }[] | [];
}