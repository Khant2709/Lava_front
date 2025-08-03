import React, {Suspense} from 'react';

import WrapperContactsPage from "@components/pages/contacts/wrapperContactsPage";
import Preloader from "@components/layout/preloader/preloader";
import PageError from "@components/ui/error/pageError/pageError";

import {generalDataAPI} from "@api/api";
import {singleRequest} from "@utils/axios/request";
import {checkApiResponses} from "@utils/checkStatusResponse";

import {jsonLD_contact, meta_contacts_page} from "../../metadata/contacts";


export const metadata = meta_contacts_page;

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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD_contact)}}
            />

            <Suspense fallback={<Preloader/>}>
                <WrapperContactsPage contactsData={contactsData} socialData={socialData}/>
            </Suspense>
        </>
    );
};


export const revalidate = 3600;