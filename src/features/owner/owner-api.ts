import type { QueryFunctionContext } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch";
import type { ownerKeys } from "./query-keys";

const OWNERS_API_BASE_PATH = "/api/v1/owners";

export const getApartmentsByUserIdService = async (
	params: QueryFunctionContext<ReturnType<(typeof ownerKeys)["detail"]>>,
) => {
	const { queryKey, signal } = params;
	const [{ userId }] = queryKey;

	const data = await fetchApi(`${OWNERS_API_BASE_PATH}/${userId}`, {
		signal,
	});

	return data;
};
