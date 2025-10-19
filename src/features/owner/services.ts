import type { QueryFunctionContext } from "@tanstack/react-query";

import { apiClient } from "@/lib/axios";
import type { ownerKeys } from "./query-keys";
import type { TOwner } from "./types";

export const getApartmentsByUserIdService = async ({
	queryKey,
	signal,
}: QueryFunctionContext<ReturnType<(typeof ownerKeys)["list"]>>) => {
	const [{ userId }] = queryKey;
	const { data } = await apiClient.get<TOwner[]>(`/Owners/${userId}`, {
		signal,
	});

	return data;
};
