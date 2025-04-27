'use client'

import React from 'react';

import {useWindowWidth} from "@hooks/UseWidth";

import BannerSlider from "@components/pages/home/bannerSlider/bannerSlider";
import Advantages from "@components/pages/home/advantages/advantages";
import WrapperMenu from "@components/pages/home/menu/wrapperMenu";
import ContainerFormBooking from "@components/pages/home/formBooking/formBooking";

import ShortGallery from "@components/pages/home/shortGallery/shortGallery";
import AboutAs from "@components/pages/home/aboutAs/aboutAs";
import Contacts from "@components/pages/home/contacts/contacts";

import {useClearSessionError} from "@hooks/useClearSessionError";
import {MenuModel} from "@myTypes/api/menuAPI";
import {AdvantagesModel, ContactsModel, PromotionsModel} from "@myTypes/api/generalDataTypes";
import {usePreloaderStop} from "@hooks/usePreloaderStop";

interface Props {
    promotions: PromotionsModel[];
    advantages: AdvantagesModel[];
    menu: MenuModel[];
    mapsRating: {
        name: string;
        rating: number;
        reviewsCount: number;
        link: string;
    }[]
    contacts: ContactsModel
}

const WrapperHomePage: React.FC<Props> = ({promotions, advantages, menu, mapsRating, contacts}) => {
    useClearSessionError('home');
    usePreloaderStop();
    const width = useWindowWidth();

    if (!width) return null;

    return (
        <>
            <BannerSlider slides={promotions}/>
            <Advantages advantages={advantages}/>
            <WrapperMenu menu={menu} width={width}/>
            <ContainerFormBooking/>
            <AboutAs mapsRating={mapsRating}/>
            <ShortGallery/>
            <Contacts contacts={contacts}/>
        </>
    );
};

export default WrapperHomePage;