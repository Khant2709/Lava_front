interface ApiResponse<T> {
    data: T | null;
    status: number;
    message?: string;
}

export const checkApiResponses = (responses: ApiResponse<unknown>[]): boolean => {
    return responses.every(
        res => res.status >= 200 && res.status < 300 && res.data !== null
    );
};
