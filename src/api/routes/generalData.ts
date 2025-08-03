// Запросы основных данных + данных для главной страницы
import {makeRequest} from "@utils/axios/makeRequest";
import {TIME_CASH} from "@constants/envData";
import {AdvantagesModel, ContactsModel, GeneralDataModel, PromotionsModel} from "@myTypes/api/generalDataTypes";

// Получение всех общих данных
export const getGeneralData = async () =>
    makeRequest<GeneralDataModel>('get', '/general_data', null, null, TIME_CASH[60].API);

// Получение контактных данных
export const getContactsData = async () =>
    makeRequest<ContactsModel>('get', '/general_data/contacts', null, null, TIME_CASH[60].API);

// Получение данных акций для слайдера на главной
export const getPromotionsData = async () =>
    makeRequest<PromotionsModel[]>('get', '/promotions', null, null, TIME_CASH[60].API);

// Получение данных для досуга на главной
export const getAdvantagesData = async () =>
    makeRequest<AdvantagesModel[]>('get', '/advantages', null, null, TIME_CASH[60].API);