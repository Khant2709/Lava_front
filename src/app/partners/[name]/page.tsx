import React from 'react';
import WrapperCurrentPartner from "@components/pages/currentPartner/wrapperCurrentPartner";
import {partnersData} from '@components/pages/currentPartner/devData';
import {urlToReadableName} from "@utils/nameUrlTransform";

interface Props {
    params: Promise<{ name: string }>; // params как Promise
}

const CurrentPartnerPage = async ({params}: Props) => {
    const resolvedParams = await params; // Ожидаем params
    const namePartner = urlToReadableName(resolvedParams.name);
    const partnerData = partnersData.find(el => el.name === namePartner);

    return (
        <WrapperCurrentPartner partnerData={partnerData} />
    );
};

export default CurrentPartnerPage;