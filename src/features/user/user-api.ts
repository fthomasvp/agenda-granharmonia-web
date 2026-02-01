import type { QueryFunctionContext } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch";
import type { PaginatedResponse } from "@/types/common";
import type { userKeys } from "./query-keys";
import type { UserApartment, UserHouse } from "./types";

const API_BASE_PATH = "/api/v1/users";

export const fetchUserHouses = async (
	params: QueryFunctionContext<ReturnType<(typeof userKeys)["listUserHouses"]>>,
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

export const fetchUserApartments = async (
	params: QueryFunctionContext<
		ReturnType<(typeof userKeys)["listUserApartments"]>
	>,
) => {
	const { queryKey, signal } = params;
	const [{ userId, houseId }] = queryKey;

	const q = new URLSearchParams({
		houseId,
	});

	const response = await fetchApi<PaginatedResponse<UserApartment>>(
		`${API_BASE_PATH}/${userId}/apartments?${q}`,
		{
			signal,
		},
	);

	return response;
};
