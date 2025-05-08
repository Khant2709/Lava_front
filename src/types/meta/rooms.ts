import {MetaAddress} from "@myTypes/meta/constants";

export interface JsonLDRoomsPage {
    "@context": "https://schema.org";
    "@type": "LodgingBusiness";
    name: string;
    url: string;
    address: MetaAddress;
    containsPlace: HotelRoom[];
}

interface HotelRoom {
    "@type": "HotelRoom";
    name: string;
    description: string;
    occupancy: {
        "@type": "QuantitativeValue";
        "maxValue": number;
        unitText: "человек" | "people" | string;
    };
    amenityFeature: AmenityFeature[];
    petsAllowed: boolean;
    image?: string[];
}

interface AmenityFeature {
    "@type": "LocationFeatureSpecification";
    name: string;
    value: boolean;
}
