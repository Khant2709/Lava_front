'use client'

import React, {useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import FormCommercial from "@components/forms/formCommercial/formCommercial";

import ContainerContacts from "./containerContacts/containerContacts";
import MapWithText from "./mapWithText/mapWithText";
import SocialIcons from "@components/pages/contacts/socialIcons/socialIcons";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {notifyShowToast} from "@utils/showToast";
import {singleRequest} from "@utils/axios/request";
import {orderAPI} from "@api/api";
import {CommercialFormData} from "@validators/fieldsCommercialFormValidator";

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

    const [isDisableBtn, setIsDisableBtn] = useState<boolean>(false);

    const sendOrder = async (data: CommercialFormData) => {
        setIsDisableBtn(true);
        notifyShowToast('info', `${data.name}, ваша заявка отправлена, дождитесь ответа это займет меньше 1мин.`);

        const dataCompany = {
            name: data?.name || 'Ошибка',
            phone: data?.phone || 'Ошибка',
            email: data?.email || 'Ошибка',
            company_name: data?.company || 'Ошибка',
            company_order: data?.offer || 'Ошибка',
        }
        const result = await singleRequest(() => orderAPI.orderCompany(dataCompany))

        if (result.status === 200) {
            notifyShowToast('success', result.message || `${data.name}, Ваша заявка принята, в ближайшее время вам позвонят для подтверждения.`);
        } else {
            notifyShowToast('error', result.message || `${data.name}, произошла ошибка, попробуйте позднее или позвоните по номеру указанному на сайте.`);
        }

        setIsDisableBtn(false);
    }

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Наши контакты'}/>
            <ContainerContacts {...contactsData}/>
            <MapWithText/>
            <FormCommercial sendOrder={sendOrder} isDisableBtn={isDisableBtn}/>
            <SocialIcons {...socialData}/>
        </SectionWrapper>
    );
};

export default WrapperContactsPage;