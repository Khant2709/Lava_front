import {AxiosRequestConfig, Method, isAxiosError} from "axios";
import {CacheOptions} from "axios-cache-interceptor";
import axiosJSON from "@services/axiosService";

type HttpMethod = Method;

interface RequestResponse<T> {
    data: T | null;
    status: number;
    message?: string;
    error?: string;
}

interface RequestConfig<T = unknown> extends AxiosRequestConfig<T> {
    cache?: CacheOptions;
}

export const makeRequest = async <T = unknown>(
    method: HttpMethod,
    url: string,
    data: unknown = null,
    params: Record<string, unknown> | null = null,
    cacheMaxAge: number | null = null,
    options: Partial<RequestConfig> = {}
): Promise<RequestResponse<T>> => {
    try {
        const config: RequestConfig = {
            method,
            url,
            params: params ?? undefined,
            ...options,
        };

        if (cacheMaxAge && method.toLowerCase() === "get") {
            config.cache = {
                ttl: cacheMaxAge,
            } as CacheOptions;
        }

        if (method.toLowerCase() !== "get" && data !== undefined) {
            config.data = data;
        }

        const response = await axiosJSON(config);
        return response.data;
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            return {
                data: null,
                status: error.response?.status || 500,
                error: error.message,
            };
        }

        return {
            data: null,
            status: 500,
            error: "Неизвестная ошибка запроса",
        };
    }
};
