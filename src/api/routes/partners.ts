import {makeRequest} from "@utils/axios/makeRequest";
import {PartnersModel} from "@myTypes/api/partnersAPI";
import {TIME_CASH} from "@constants/envData";


export const getPartners = async () =>
    makeRequest<PartnersModel[]>('get', '/partners', null, null, TIME_CASH[60].API);