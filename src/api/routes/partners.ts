import {makeRequest} from "@utils/axios/makeRequest";
import {CurrentPartnerModel, PartnersModel} from "@myTypes/api/partnersAPI";
import {TIME_CASH} from "@constants/envData";


export const getPartners = async () =>
    makeRequest<PartnersModel[]>('get', '/partners', null, null, TIME_CASH[60].API);

export const getCurrentPartner = async (name: string) =>
    makeRequest<CurrentPartnerModel>('get', `/partners/partner/${name}`, null, null, TIME_CASH[60].API);