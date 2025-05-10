import { OrderType } from './enum';

export interface IResponseObject<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface Pagination extends PageParams {
	offset?: number;
	// page: number;
	total: number;
	// limit: number;
}

export interface PageParams {
	limit: number;
	page: number;
}

export interface WithPagination<T> {
	items: T[];
	pagination: Pagination;
}

export interface ISortData {
	order?: OrderType | '';
	sortBy?: string;
}

export interface Options {
	value: string;
	label: string;
}
