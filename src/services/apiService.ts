import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

type RequestMethod = AxiosRequestConfig['method'];

const performRequest = async <T>(method: RequestMethod, url: string, data?: object, headers?: any): Promise<T> => {
    const response = await axiosInstance({
        url,
        data,
        method,
        headers,
    });
    return response.data;
};

export const get = <T>(endpoint: string, headers?: any): Promise<T> => {
    return performRequest('get', endpoint, undefined, headers);
};

export const post = <T>(endpoint: string, data?: any, headers?: any): Promise<T> => {
    return performRequest('post', endpoint, data, headers);
};

export const del = <T>(endpoint: string, data?: any, headers?: any): Promise<T> => {
    return performRequest('delete', endpoint, data, headers);
};
