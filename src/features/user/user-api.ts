import type { QueryFunctionContext } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch";
import type { PaginatedResponse } from "@/types/common";
import type { userKeys } from "./query-keys";
import type { UserHouse } from "./types";

const API_BASE_PATH = "/api/v1/users";

export const fetchUserHouses = async (
	params: QueryFunctionContext<ReturnType<(typeof userKeys)["detail"]>>,
) => {
	const { queryKey, signal } = params;
	const [{ userId }] = queryKey;

	const response = await fetchApi<PaginatedResponse<UserHouse>>(
		`${API_BASE_PATH}/${userId}/houses`,
		{
			signal,
		},
	);

	return response;
};
