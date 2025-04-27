import {makeRequest} from "@utils/axios/makeRequest";
import {MenuFullModel, MenuModel} from "@myTypes/api/menuAPI";
import {TIME_CASH} from "@constants/envData";

// Получение всех общих данных
export const getMenuData = async () =>
    makeRequest<MenuFullModel[]>('get', '/menu', null, null, TIME_CASH[60].API);

export const getMenuShortData = async () =>
    makeRequest<MenuModel[]>('get', '/menu/short', null, null, TIME_CASH[60].API);