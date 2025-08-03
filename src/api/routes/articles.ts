import {makeRequest} from "@utils/axios/makeRequest";
import {TIME_CASH} from "@constants/envData";
import {ArticleModel} from "@myTypes/api/articlesAPI";

export const getArticles = async () =>
    makeRequest<ArticleModel[]>('get', '/articles', null, null, TIME_CASH[60].API);