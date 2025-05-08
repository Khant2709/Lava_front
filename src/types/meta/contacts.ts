import {MetaAddress, MetaGeo} from "@myTypes/meta/constants";

export interface JsonLDContactsPage {
    "@context": "https://schema.org";
    "@type": "HookahLounge";
    name: string;
    logo: string;
    image: string;
    url: string;
    telephone: string;
    address: MetaAddress;
    geo: MetaGeo;
    openingHoursSpecification: OpeningHours[];
    sameAs: string[];
}

export interface OpeningHours {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
}