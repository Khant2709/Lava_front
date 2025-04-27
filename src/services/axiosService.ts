import axios, {AxiosInstance} from "axios";
import {setupCache} from "axios-cache-interceptor";
import {API_URL} from "@constants/envData";


const axiosJSON: AxiosInstance = setupCache(
    axios.create({
        baseURL: API_URL,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 30000,
    }),
    {
        ttl: 0,
    }
);

export default axiosJSON;