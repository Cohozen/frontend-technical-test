import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RootActions } from '../redux/rootActions';
import store from '../redux/rootReducer';

const { dispatch } = store;

export const axiosInstance = axios.create({
	baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
	dispatch(RootActions.applicationActions.beginLoading());
	return config;
});

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		dispatch(RootActions.applicationActions.stopLoading());
		return response;
	},
	error => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		dispatch(RootActions.applicationActions.stopLoading());
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
