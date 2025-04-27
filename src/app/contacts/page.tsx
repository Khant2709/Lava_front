import React from 'react';
import WrapperContactsPage from "@components/pages/contacts/wrapperContactsPage";
import {singleRequest} from "@utils/axios/request";
import {generalDataAPI} from "@api/api";
import {checkApiResponses} from "@utils/checkStatusResponse";
import PageError from "@components/ui/error/pageError/pageError";

async function fetchData() {
    return await singleRequest(() => generalDataAPI.getGeneralData());
}

export default async function ContactsPage() {
    const generalData = await fetchData();

    if (!checkApiResponses([generalData]) || !generalData?.data) return <PageError page={'contacts'}/>

    const {phone, address, address_link, working_hours, telegram, instagram, vk} = generalData.data;

    const contactsData = {phone, address, address_link, working_hours};
    const socialData = {phone, telegram, instagram, vk};

    return (
        <WrapperContactsPage contactsData={contactsData} socialData={socialData}/>
    );
};


export const revalidate = 3600;