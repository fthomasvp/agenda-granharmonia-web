export type Response<T> = {
	data: T;
};
export type PaginatedResponse<T> = {
	data: {
		total: number;
		items: Array<T>;
	};
};
