export type ErrorInfo = {
    status: number;
    statusText: string;
    data: any;
};

export type ApiRequest<T> = { request: T };
export type ApiResponse<T> = { response: T };
export type ApiError = { error: ErrorInfo };
