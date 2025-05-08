import {makeRequest} from "@utils/axios/makeRequest";
import {TasteFullModel} from "@myTypes/api/tastesAPI";
import {TIME_CASH} from "@constants/envData";


export const getTaste = async (namePartner: string, nameTaste: string) =>
    makeRequest<TasteFullModel>('get', `/tastes/${namePartner}/${nameTaste}`, null, null, TIME_CASH[60].API);