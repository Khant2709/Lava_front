import {createMetaDataPage} from "./createMetaDataPage";
import {createJsonBreadcrumb} from "./createJsonBreadcrumb";

import {META_ADDRESS, META_DATA} from "./constants";

import {JsonLDBreadcrumbs, MetaPage} from "@myTypes/meta/constants";
import {RoomModel} from "@myTypes/api/roomsAPI";
import {JsonLDRoomsPage} from "@myTypes/meta/rooms";


const TITLE = 'VIP комнаты кальянной Lava Lounge';
const DESCRIPTION = 'Арендуйте уютные VIP-комнаты в кальянной Lava Lounge в Краснодаре. Комфортные зоны отдыха, PlayStation, настольные игры и приватная атмосфера для компании до 15 человек.';
const KEYWORDS = [
    'VIP комнаты кальянной Краснодар',
    'аренда кальянной комнаты',
    'приватная кальянная Краснодар',
    'кальянная для компании',
    'комнаты кальянной Lava Lounge',
    'отдых в кальянной Краснодар',
    'Lava Lounge Краснодар',
    'кальянная Краснодар',
    'уютные кальянные комнаты',
    'Lava Lounge VIP комнаты'
];

export const meta_rooms_page: MetaPage = createMetaDataPage(
    TITLE,
    DESCRIPTION,
    KEYWORDS,
    '/rooms',
    'Превью картинка для страницы VIP комнаты заведения Lava Lounge',
    'previewRooms1200x630.webp',
    'previewRooms800x800.webp',
    'previewRooms1080x1920.webp',
);

export const jsonLD_rooms = (rooms: RoomModel[]): (JsonLDBreadcrumbs | JsonLDRoomsPage)[] => {
    return [
        createJsonBreadcrumb(TITLE, '/rooms', [{
            "@type": "ListItem",
            "position": 2,
            "name": "VIP-комнаты",
            "item": `${META_DATA.url}/rooms`
        }]),
        {
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Lava Lounge",
            "url": `${META_DATA.url}/rooms`,
            "address": META_ADDRESS,
            "containsPlace": rooms.map((room) => {
                return {
                    "@type": "HotelRoom",
                    "name": room.title,
                    "description": room?.description ?? 'Описание временно недоступно',
                    "occupancy": {
                        "@type": "QuantitativeValue",
                        "maxValue": Number(room.max_persons),
                        "unitText": "человек"
                    },
                    "amenityFeature": room.amenities.map((el) => ({
                        "@type": "LocationFeatureSpecification",
                        "name": el,
                        "value": true
                    })),
                    "petsAllowed": false,
                    // "images": ["https://example.com/images/exemple.webp",] дополнить когда появятся фотографии
                }
            })
        }as JsonLDRoomsPage
    ]
}
