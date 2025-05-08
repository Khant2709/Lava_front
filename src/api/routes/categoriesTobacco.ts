import {makeRequest} from "@utils/axios/makeRequest";
import {TIME_CASH} from "@constants/envData";
import {CategoryTobaccoModel} from "@myTypes/api/categoriesTobaccoAPI";

export const getCategoriesTobacco = async () =>
    makeRequest<CategoryTobaccoModel[]>("get", "/category_tobacco", null, null, TIME_CASH[60].API);
