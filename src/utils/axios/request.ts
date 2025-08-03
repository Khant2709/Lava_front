interface ApiResponse<T> {
    data: T | null;
    status: number;
    message?: string;
}

type RequestFn<T> = () => Promise<ApiResponse<T>>;

type RequestMap = Record<string, RequestFn<unknown>>;

type ExtractedResponse<T> = T extends () => Promise<ApiResponse<infer R>>
    ? ApiResponse<R>
    : never;

type BatchResponse<T extends RequestMap> = {
    [K in keyof T]: ExtractedResponse<T[K]>;
};

const isOK = (status: number) => (status >= 200 && status < 300);


// Одиночный запрос
export async function singleRequest<T>(
    request: () => Promise<ApiResponse<T>>
): Promise<ApiResponse<T>> {
    try {
        const response = await request();
        if (!isOK(response.status)) {
            console.warn(`[API-WARN]: Статус ${response.status}. Сообщение: ${response.message}`);
            return {
                data: null,
                status: response.status,
                message: response.message || "Ошибка запроса",
            };
        }

        return response
    } catch (error: unknown) {
        const err = error as Error;
        console.error("[API-ERROR]: Ошибка запроса", err.message);
        return {
            data: null,
            status: 500,
            message: err.message || "Непредвиденная ошибка",
        };
    }
}


// Асинхронный
export async function batchRequest<T extends RequestMap>(
    requests: T
): Promise<BatchResponse<T>> {
    const keys = Object.keys(requests) as Array<keyof T>;

    const results = await Promise.allSettled(
        keys.map((key) => requests[key]())
    );

    const response = {} as BatchResponse<T>;

    results.forEach((result, index) => {
        const key = keys[index];

        if (result.status === "fulfilled") {
            const res = result.value;

            if (isOK(res.status)) {
                response[key] = res as ExtractedResponse<T[typeof key]>;
            } else {
                console.warn(`[BATCH-WARN][${String(key)}]: статус ${res.status} — ${res.message}`);
                response[key] = {
                    data: null,
                    status: res.status,
                    message: res.message ?? "Ошибка в ответе",
                } as ExtractedResponse<T[typeof key]>;
            }
        } else {
            const reason = result.reason instanceof Error ? result.reason.message : "Неизвестная ошибка";

            console.error(`[BATCH-ERROR][${String(key)}]: ${reason}`);
            response[key] = {
                data: null,
                status: 500,
                message: reason,
            } as ExtractedResponse<T[typeof key]>;
        }
    });

    return response;
}

