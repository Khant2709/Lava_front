import {MetaAddress, MetaContact, MetaGeo, MetaReview} from "@myTypes/meta/constants";

export interface JsonLDHomePage {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: string;
    url: string;
    logo: string;
    image: string;
    telephone: string;
    email: string;
    address: MetaAddress;
    geo: MetaGeo;
    priceRange: string;
    openingHours: string;
    contactPoint: MetaContact;
    review: MetaReview[];
    sameAs: string[];
}