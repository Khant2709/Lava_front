import {makeRequest} from "@utils/axios/makeRequest";
import {createProps, callProps, companyProps} from "@myTypes/api/orderAPI";

export const createBooking = (data: createProps) =>
    makeRequest('post', '/booking/create', data, null);

export const orderCall = (data: callProps) =>
    makeRequest('post', '/order/call', data, null);

export const orderCompany = (data: companyProps) =>
    makeRequest('post', '/order/company', data, null);