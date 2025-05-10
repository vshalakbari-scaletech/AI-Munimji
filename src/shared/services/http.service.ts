/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';

import { notify } from '@/components/notification/notification';
import { IResponseObject } from '@/types';
import { getUrl } from '@/utils/helpers';

import AuthService from './auth.service';
import { BASE_API_VERSION } from '../constants/api';

const axiosInstance = axios.create();
let cancel_req: Canceler;

export { cancel_req };

interface IMiscellaneousRequestParams {
	contentType?: string;
	isPublic?: boolean;
	responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
	fullResponse?: boolean;
}

/**
 * get method
 * @param request object containing axios params
 */
const get = (url: string, params: any = {}, otherData: IMiscellaneousRequestParams = {}) =>
	commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });

/**
 * post method
 * @param request object containing axios params
 */
const post = (url: string, params: any = {}, otherData: IMiscellaneousRequestParams = {}) =>
	commonAxios({ method: 'POST', url: getUrl(url), data: params, ...otherData });

/**
 * put method
 * @param request object containing axios params
 */
const put = (url: string, params: any = {}, otherData: IMiscellaneousRequestParams = {}) =>
	commonAxios({ method: 'PUT', url: getUrl(url), data: params, ...otherData });

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url: string, params: any = {}, otherData: IMiscellaneousRequestParams = {}) =>
	commonAxios({ method: 'DELETE', url: getUrl(url), data: params, ...otherData });

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url: string, params: any = {}, otherData: IMiscellaneousRequestParams = {}) =>
	commonAxios({ method: 'PATCH', url: getUrl(url), data: params, ...otherData });

interface IAxiosParams extends IMiscellaneousRequestParams {
	method: string;
	url: string;
	data?: any;
}

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type, isLogin
 */
const commonAxios = (config: IAxiosParams): Promise<any> => {
	const {
		method,
		url,
		data,
		contentType = 'application/json',
		isPublic = false,
		responseType,
		fullResponse = false
	} = config;
	const headers: any = {
		'Content-Type': contentType
	};

	if (!isPublic) {
		const token = AuthService.getAccessToken();
		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}
	}

	const body = contentType === 'application/json' ? JSON.stringify(data) : data;

	const axiosInstanceParams: AxiosRequestConfig = {
		method: method,
		baseURL: BASE_API_VERSION,
		url: url,
		cancelToken: new axios.CancelToken(function executor(c) {
			cancel_req = c;
		}),
		headers: headers,
		data: body,
		responseType: responseType
	};

	return new Promise((resolve, reject) => {
		axiosInstance(axiosInstanceParams)
			.then((response: AxiosResponse<IResponseObject<any>>) => {
				const res = fullResponse ? response.data : response.data.data;
				if (data && data.message) {
					if (data.isError) {
						notify(res.message, 'error');
					} else {
						notify(res.message, 'success');
					}
				}

				resolve(res);
			})
			.catch((error) => {
				const res = error.response.data;
				const status = error.response.status;

				// check if error is having data
				if (res && status) {
					// is http error code is 401, log out of the application
					if (status === 401 && res) {
						AuthService.removeAuthData();
						notify(res.message, 'error');
					} else if (res && res.message) {
						// if error data contains message field, add error notification
						notify(res.message, 'error');
					} else {
						notify(error.message, 'error');
					}
				}
				reject(error);
			});
	});
};

export { axiosInstance };

const HttpService = {
	get,
	post,
	put,
	deleteRequest,
	patch
};

export default HttpService;
