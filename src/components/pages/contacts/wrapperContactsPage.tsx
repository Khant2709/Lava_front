'use client'

import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import FormCommercial from "@components/forms/formCommercial/formCommercial";

import ContainerContacts from "./containerContacts/containerContacts";
import MapWithText from "./mapWithText/mapWithText";
import SocialIcons from "@components/pages/contacts/socialIcons/socialIcons";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";

export interface ContactsData {
    phone: string;
    address: string;
    address_link: string;
    working_hours: string;
}

export interface SocialData {
    phone: string;
    telegram: string;
    instagram: string;
    vk: string;
}

interface Props {
    contactsData: ContactsData;
    socialData: SocialData;
}


const WrapperContactsPage: React.FC<Props> = ({contactsData, socialData}) => {
    useClearSessionError('contacts');
    usePreloaderStop();

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Наши контакты'}/>
            <ContainerContacts {...contactsData}/>
            <MapWithText/>
            <FormCommercial/>
            <SocialIcons {...socialData}/>
        </SectionWrapper>
    );
};

export default WrapperContactsPage;